let listaNumeroSorteados = [];
let numeroAleatorio = gerarNumero();
console.log(numeroAleatorio);
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto 2.0');
exibirTextoNaTela('p', 'Digite um numero de 1 á 10');


function gerarNumero(){
    let numeroSorteado = parseInt(Math.random() * 10 + 1);
    let qntdElementosLista = listaNumeroSorteados.length;

    if(qntdElementosLista == 10){
      listaNumeroSorteados = [];
    }

    if(listaNumeroSorteados.includes(numeroSorteado)){
      return gerarNumero();
    }else{
      listaNumeroSorteados.push(numeroSorteado);
      console.log(listaNumeroSorteados);
      return numeroSorteado;
    }
}

function verificarChute(){
  let chute = document.querySelector('input').value
  
  if(chute == numeroAleatorio){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativas}`;    
    exibirTextoNaTela('p', mensagemTentativas);

  } else {
    if(chute < numeroAleatorio){
        exibirTextoNaTela('p', 'O numero secreto é maior!');
    }else{
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }tentativas++
    limparCampo()
    
  }
}

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo(){

  numeroAleatorio = gerarNumero();
  limparCampo();
  tentativas = 1;
  exibirTextoNaTela('h1', 'Bem vindo ao jogo do numero secreto 2.0');
  exibirTextoNaTela('p', 'Digite um numero de 1 á 10');
    

}