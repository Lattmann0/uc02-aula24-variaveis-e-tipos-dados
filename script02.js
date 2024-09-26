const divRoot = document.getElementById ("root")

// Calculadora
//Obter dois valores 

//conversão para float ou numero do ponto flutuante ()
const valor1 = parseInt (prompt ("Informe um valor"))
const valor2 = parseInt (prompt ("Informe outro valor"))

const soma = valor1 + valor2
const subtracao = valor1 - valor2
const divisao = valor1 / valor2
const multiplicacao = valor1 * valor2 
const resto = valor1 % valor2 

console.log("soma")
console.log("subtracao")
console.log("divisao")
console.log("multiplicacao")
console.log("resto")

const resultadoSoma = document.createElement ("span")
resultadoSoma.textContent = valor1 + "+" + valor2 + " = " + soma 

const resultadoSubtracao = document.createElement ("span")
resultadoSubtracao.textContent = valor1 + "-" + valor2 + " = " + subtracao

const resultadoMultiplicacao = document.createElement ("span")
resultadoMultiplicacao.textContent = `${valor1} * ${valor2} = ${multiplicacao}`

const resultadoDivisao = document.createElement ("span)")
resultadoDivisao.textContent = `${valor1} / ${valor2} = ${divisao}`

const resultadoResto = document.createElement ("span)")
resultadoResto.textContent = `${valor1} / ${valor2} = ${resto}`

divRoot.appendChild(resultadoSoma)
divRoot.appendChild(document.createElement ("br"))
divRoot.appendChild(resultadoSubtracao)
divRoot.appendChild(document.createElement ("br"))
divRoot.appendChild(resultadoMultiplicacao)
divRoot.appendChild(document.createElement ("br"))
divRoot.appendChild(resultadoDivisao)
divRoot.appendChild(document.createElement ("br"))
divRoot.appendChild(resultadoResto)

const texto = "Ola pessoal"
const elementoTexto = document.createElement ("p")
elementoTexto.textContent = texto 
divRoot.appendChild (elementoTexto)
divRoot.text