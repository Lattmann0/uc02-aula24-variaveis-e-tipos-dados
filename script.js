// obtive a div com id root
const divRoot = document.getElementById("root");
//Imprimindo no console a div
console.log(divRoot)
let valor1 = 10;
let valor2 = 20;
//criando um elemento de titulo nivel 1 
const resultado = document.createElement("h1")
// atribuindo o valor da soma dos dois valores para o texto do titulo
resultado.textContent = (valor1+valor2)
divRoot.appendChild(resultado)

// criamos uma nov div
const divValores = document.createElement ("div")
// atribuimos o id "valores" para a div 
divValores.setAttribute("id","valores")

//criamos um elemento de titulo 2 na div com id "valores"
//
const h2Valor1 = document.createElement ("h2")
h2Valor1.textContent = valor1
divValores.appendChild (h2Valor1)

divRoot.appendChild(divValores)
