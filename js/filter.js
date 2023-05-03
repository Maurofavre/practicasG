
// Filter

const productos = []

productos.push(
  { id: "remera", precio:500},
  {id: "pantalon",precio:2000},
  {id: "short", precio:1500},
  {id: "camisa", precio:900}
        )
productos

const masBarato = (productos) => productos.precio < 1000
const filtrado = productos.filter(masBarato)
filtrado
//--------------
const masCaro = productos.filter((productos) =>productos.precio > 1000)
masCaro
//------------
const reversa = productos.reverse((productos) => productos.id)
reversa
//----------------

const arriba = productos.filter((producto) => producto.id == "remera" || producto.id == "camisa"  )
arriba
//-----------------

