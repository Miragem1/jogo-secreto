let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAle();
let tentativas = 1;

function chamarTextoParaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

chamarTextoParaTela("h1", "Game of the secret number");
chamarTextoParaTela("p", "Put a number between 1 and 10:");

function exibirMensagemInicial() {
  chamarTextoParaTela("h1", "Game of the secret number do Miras");
  chamarTextoParaTela("p", "Put a number between 1 and 10:");
  chamarTextoParaTela("h2", "Parabéns! O ciclo do jogo foi resetado.");
}

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value); // Ensure it's an integer
  if (chute === numeroSecreto) {
    chamarTextoParaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    chamarTextoParaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      chamarTextoParaTela("p", "O número secreto é Menor");
    } else {
      chamarTextoParaTela("p", "O número secreto é Maior");
    }
    tentativas++;
    limparCampo();
  }
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function gerarNumeroAle() {
  let numeroEscolhido = parseInt(Math.random() * 10) + 1; // Generate a number between 1 and 10
  let quantidadeDeNumerosEscolhidos = listaDeNumerosSorteados.length;
  if (quantidadeDeNumerosEscolhidos == 10) {
    listaDeNumerosSorteados = [];
  }
  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    // If the number is already in the list, call the function again
    return gerarNumeroAle();
  } else {
    // If the number is unique, add it to the list and return it
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}
function reiniciarJogo() {
  numeroSecreto = gerarNumeroAle();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  console.log(listaDeNumerosSorteados);
  console.log("Lista resetada! Novo ciclo iniciado.");
}

/* function exibirNome(nome) {
  console.log(`olá ${nome}`);
}
exibirNome("Alice");

function dobro(n) {
  return n * 2;
}

let dobrado = dobro("5");
console.log(dobrado); */

//////////////////////////////////////////////////////////////////////////////////

// let nome = 'Gabriel'

// console.log(`Olá,${nome}!`)

// let n = 45

// function dobrarNumero(n){
// return n*2
// }
// console.log(`o dobro de ${n} é ${dobrarNumero(n)}`)

// function soma(a,b,c) {
//   let resultado = (a+b+c)/3;
//   return resultado;

// }
// console.log(`a media de 5,5 e 2 é ${soma(5,5,2)}`);

// function maior(a, b) {
//   if (a>b) {
//     console.log(`o numero maior é ${a}`)
//   } else {
//     console.log(`o número maior é ${b}`)
//   }
// }
// console.log(maior(6, 2));

// function aoQuadrado(n){
// let quadrada = n
//   let multiplicação = n**3;
//   return multiplicação;
// }
// console.log(aoQuadrado(5))

//////////////////////////////////////////////////////////////////

/* 
let a = 80 
let b = 1.88
console.log(`O imc de uma pessoa de 1.88m pesando 82kg é de ${a/b}`)


function imc(a,b){
let resultado = (b/a)
return resultado;
}
 */

////////////////////////////////////////////////////

/* function fatoramento() {
  let resultado = 1;
  for (let n = 5; n >= 1; n--) {
    resultado *= n;
    
  }
  console.log(`o numero ${5} faturado é ${resultado}`);
}
fatoramento(); */

////////////////////////////////////////////////////

/* function tamanho(altura,largura) {
  let area = (altura*largura)






  
  let perimetro = (2*altura+2*largura)
  document.querySelector('h1').innerHTML = `a área é ${area}, e o perimetro é ${perimetro}`;

}

tamanho(10,10)
     */

///////////////////////////////////////////////////////

/* function periCirculo(raio) {
  let perimetro = (raio*(3.14*2))
  document.querySelector('h1').innerHTML = `o perimetro é ${perimetro}`;

}
periCirculo(10) */

//////////////////////////////////////////////////////////////////

/* function tabuada(n){
  let mult = 10;
  let lista = [];

 for(let i = n;mult>=1;mult--) {
  let item = i*mult;
  lista.push(item)
   
  } 
 document.querySelector('h1').innerHTML = `a tabuada de ${n} é ${lista}`;
 console.log(`${lista}`)

}
 tabuada(5)
 */

/////////////////GPT VIU ATÉ AQUI/////////////////

//exercícios propostos ao final do modulo de arrays
//criação de lista vazia
/* let listaGenerica = [];
//criação de lista com elementos
let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
//adição de elementos à lista
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");

//exibição de itens específicos.
let nomes = ["Gabriel", "Anderson", "Antony"];
console.log(nomes[0]);
console.log(nomes[1]);
console.log(nomes[2]);
 */
