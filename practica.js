function agregarNombre() {
    


// crea objeto Persona
     function Persona(nombre, dinero) {
        this.nombre = nombre;
        this.dinero = dinero;
     }
    
    let gasto = parseInt( document.getElementById("gasto").value);
    let nombre = document.getElementById("nombre").value;
// crea nuevos objetos mediante gasto y nombre 
    nuevoParticipante = new Persona(nombre , gasto);
console.log(nuevoParticipante);
     agregar()
    }


    const baseDato = [];            

    function agregar() {
        baseDato.push(nuevoParticipante);
        console.log(baseDato);

        document.getElementById("tabla").innerHTML += '<tbody><td>' + nuevoParticipante.nombre + '</td><td>' + nuevoParticipante.dinero + '</td></tbody>'
     };

     function sumaTotal() {
       const total = baseDato.filter( g => g.dinero).map( ({dinero}) => dinero).reduce((a,n) => a + n,0)
        console.log(total);
        document.getElementById("total").innerHTML += '<h1>' + total + '</h1>' 
     }
  


