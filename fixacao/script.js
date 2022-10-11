let paragrafo = document.getElementById("paragrafo")
console.log(paragrafo.innerHTML)

let capturarValor = document.getElementById("texto")

const imprime = () =>{
    console.log(capturarValor.value)
}

const substituirP = () =>{
    paragrafo.innerHTML = capturarValor.value
    console.log(paragrafo.innerHTML)
    capturarValor.value=""
}