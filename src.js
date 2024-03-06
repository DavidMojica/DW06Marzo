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
const Perro2 = {
    nombre: "Paco",
    edad: 4,
    raza: "Rata",
    color: "Blanco",
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
//-----------

const Vec = [Perro, Perro2];
Vec.forEach(animal => {
    //Cambiar propiedad nombre a cada objeto de la lista
    animal.nombre = "Cansón";
});

console.log(Perro);
console.log(Perro.caracteristicas.comida);

//Segunda forma - No indicada
const Auto = {};
Auto.model = "1986";
Auto.color = "Verde";
Auto.caracteristicas = {
    marca:"CosteñoxCars",
    kms: 72837,
}

console.log(Auto.caracteristicas);

//Tercera forma
let marca = "FuckMercedez";
let model = "JavaRun";
let caracteristicas = {

}

//Operador de propagacion
const str = "Nelson in desarrollo web";
const charArray = [...str];
console.log(charArray);

const Perro3 = {...Perro, ...Perro2}
console.log(Perro3)

const numbers = [10, 20, 30];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); 

