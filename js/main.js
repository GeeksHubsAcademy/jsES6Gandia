
//ES6

//Funciones Clásicas vs Arrow Functions

// function Multiplicar (parametro1, parametro2) {
//     return parametro1 * parametro2;
// };

// const Multiplicar = (parametro1, parametro2) => {
//     return parametro1 * parametro2;
// };

// const Multiplicar = (parametro1, parametro2) => parametro1 * parametro2;

//En caso de recibir un único parámetro, la función flecha no requiere de paréntesis (PIJADA ESTÉTICA);

// const Cuadrado = parametroNumero => parametroNumero**2;

//ARROW FUNCTIONS Y OBJETOS

//en este caso la funcion devuelve un objeto anónimo.
// const Coche = (marca,potencia) => {

//     let color = "Rosa";

//     return ({   MiCoche : marca, 
//         Color: color, 
//         Potencia: potencia
//     });

// };
    
    

// let cochazo = Coche("Ferrari",300);

// console.log(cochazo);

//MAPEO


//Forma antigua
// let fruta = ["manzana","banana","naranja","ciruela","pera","sandia"];

// let frutas = [];

// for(let i = 0; i < fruta.length; i++){
    //     frutas.push(fruta[i]  + 's');
    // };
    
    // console.log(frutas);
    
    //Mapeo...

// let arrayFruta = ["manzana","banana","naranja","ciruela","pera","sandia"];

// let frutas = arrayFruta.map(nombreRandomDelElemento => nombreRandomDelElemento + 's');

// console.log(arrayFruta);
// console.log(frutas);

//PARÁMETROS CON VALOR POR DEFECTO

// const Iva = (precio, impuesto = 0.07) => {

//     return precio + (precio*impuesto);

// };

// console.log(Iva(1000,0.1));

// const nombreRobot = (pre="RX") => {

//     let numero = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
//     return pre + numero;
// };

// console.log(nombreRobot());

//SPREAD.......

// const spreadPropiedades = (nombre, edad, altura, ciudad, poder) => {

//     return ({
//         nombre : nombre,
//         edad: edad,
//         altura: altura,
//         ciudad: ciudad,
//         poder: poder
//     });
// };

// let Matias = ["Matias", 20, 1.85, "Gandia", "Programar"];

// console.log(spreadPropiedades(...Matias));

//REST

// const Galardona = (...copas) => {

//     for(let i = 0; i < copas.length; i++){
//         console.log("Bravo por..", copas[i]);
//     }
// };


// Galardona("Bachillerato","Futbol","NY Trip");
// Galardona("Ski","Skate");
// Galardona("Grupo musical","Profesor","Estudios","Bootcamp","Metronomo");

// const spreadPropiedades = (nombre, edad, altura, ciudad, poder) => {
//     /* Extension literal....
    
//     La extension literal nos permite ahorrarnos el escribir el nombre 
//     del argumento venido en la funcion cuando asignamos el valor a la propiedad del objeto.

//     */
//     return ({
//         nombre,
//         edad,
//         altura,
//         ciudad,
//         poder
//     });
// };

//STRINGS LITERALES

// let variableJS = 665;

// let interporlado = `escribo el string que quiero blabla ${variableJS}`;

// let alumnoNombre = prompt("dime tu nombre");

// let saludo = `Hola ${alumnoNombre}`;


// FOR OF

//El for of recorre el valor de los elementos

// let arrayColores = ["Blanco","Negro","Azul","Verde","Rojo","Amarillo","Naranja"];

// for (let colorin of arrayColores){
//     console.log(colorin);
// }

// FOR IN 

// let arrayFrutosSecos = ["nueces","avellanas","cacao","almendras","cacahuetes","pistachos"];

// for (let michaelJackson in arrayFrutosSecos){
//     if(arrayFrutosSecos[michaelJackson] == "avellanas"|| arrayFrutosSecos[michaelJackson] == "cacahuetes"){

//         console.log(michaelJackson);
//     }
// }

