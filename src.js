//Callback functions
const fahrenheigthToCelcius  = gradosFahrenheigth => (5/9) * gradosFahrenheigth;
const displayResult = (callbackfn, grados) => {
    let gradosCentigrados = callbackfn(grados);
    console.log(gradosCentigrados);
}

displayResult(fahrenheigthToCelcius, 1);

//------------POO Js--------------//

const Perro = {
    nombre: "Ignacio",
    edad: 4,
    raza: "Coyote",
    color: "Café",
    nombrarPerro(nombre){
        return this.nombre = nombre;
    },
    caracteristicas:{
        gay: false,
        territorial: true,
        celoso: false,
        altura: "58cm",
        comida: "Nutrecan",
        odiaALosGatos: true
    }
}


