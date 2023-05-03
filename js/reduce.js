const numeros = [3,10,20,50]

const sumar = (acumulador,numeros) => acumulador + numeros   
let totalReduce = numeros.reduce(sumar,0)
totalReduce


let total = numeros.reduce((acumulador, numeros) => {
  return acumulador + numeros 
}, 0)

total


const numeros = [71,41,19,88,3,65]

const acumuladorDobles = (acumulador, numero) => [...acumulador, numero *2]

const dobles = numeros.reduce(acumuladorDobles,[])
dobles

const doblesDeVuelta = numeros.reduce((acumulador,numero) => [...acumulador, numero *2],[])

doblesDeVuelta


const sumar = (acumulador,numeros) => acumulador + numeros   
let totalReduce = numeros.reduce(sumar,0)
totalReduce


let total = numeros.reduce((acumulador, numeros) => {
  return acumulador + numeros 
}, 0)

total


const numeros = [71,41,19,88,3,65]

const acumuladorDobles = (acumulador, numero) => [...acumulador, numero *2]

const dobles = numeros.reduce(acumuladorDobles,[])
dobles

const doblesDeVuelta = numeros.reduce((acumulador,numero) => [...acumulador, numero *2],[])

doblesDeVuelta