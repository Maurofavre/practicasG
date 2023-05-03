 // Map 

 const numeros = [10 , 20 , 30 , 40 ]  array 1 

 const divisionEnDos = numeros.map(function(resultado){
   return resultado / 2 
 })
 divisionEnDos

 destructuring
 const [diez, veinte, treinta, cuarenta] = numeros
 diez
 veinte
 treinta

 const multiplicacionEnDos = numeros.map((numero) => {
   return numero * 2 
 })
 multiplicacionEnDos

 const ropa = [ 
  { 
   id: "remera",
   precio: 50 
  },
    { 
   id: "pantalon",
   precio: 150,
  },     
   { 
   id: "short",
   precio: 200,
  },
 ]

 const indentificacion = ropa.map( ({id}) => id )
 indentificacion

 const cambioPrecio = ropa.map( function(aumento){                      
 return aumento * 2 
   }
 )
