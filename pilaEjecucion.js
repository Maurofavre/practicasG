const productos = [  
  { id: "remera", precio:500},
  {id: "pantalon",precio:2000},
  {id: "short", precio:900}]

const baratos = (producto) => producto.precio < 1000
const masBaratos = productos.filter(baratos).map(( {precio}) => precio).reduce( (acumulador, numero) => acumulador + numero ,0)

masBaratos