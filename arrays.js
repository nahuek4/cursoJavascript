let deuda = [];
let nombres = [];
let nombre = 0;
let edad = 0;
let dni = [];
let edades = [];
let ingreso = [];
let persona1 = [];
let ingreso1 = [];
let entrada = 0;

class Persona{
    constructor(nombre, dni, deuda, ingreso){
        this.nombre = nombre;
        this.dni = dni;
        this.deuda = deuda;
        this.ingreso = ingreso;
    }
    hablar(){
        console.log("Hola soy " + nombre + " y tengo " + edad + " años," + "con dni " + dni + ", tengo una deuda de " + deuda + " y un ingreso de " + ingreso);
    }
//  Metodo para que nuestro objeto hable: this.hablar = function (){console.log("Hola soy " + nombre + " con dni " + dni + " y tengo una deuda de " + deuda + " con un ingreso de " + ingreso + " pesos.")}
}

class Deuda{
    constructor(deuda, persona){
        this.deuda = deuda;
        this.persona = persona;
    }
    hablar(){
        console.log("Se registro una deuda de " + deuda + " a nombre de " + nombre)
    }
} 

class Ingreso{
    constructor(ingreso, persona){
        this.ingreso = ingreso;
        this.persona = persona; 
    }
    hablar() {
        console.log("Se registro un ingreso de " + ingreso + " pesos. A nombre de " + nombre)}
}

function nuevoIngreso(){
    ingreso = Number(prompt("Para agregar un ingreso pulse 1, de lo contrario 0."));
    if(ingreso == 1){
        ingreso = Number(prompt("Registre su ingreso"));
        ingreso1 = new Ingreso(ingreso, nombre);
        ingreso1.hablar();
    }else if(ingreso == 0){
        console.log("No registramos un ingreso");
    }else{
        console.log("Hemos notado que ha ingresado un numero incorrecto. Por lo tanto no hemos registrado ningun ingreso");
        dni = Number(prompt("Ingrese su dni"));
    }
    persona1 = new Persona(nombre, dni, deuda, ingreso);
    persona1.hablar();
    Inicio();
}

function nuevaDeuda(){
    deuda = Number(prompt("Ingrese su deuda"));
    const deuda1 = new Deuda(deuda, nombre);
    nuevoIngreso();
}

function verPersonas(){
    nombres.forEach(nom => {
        console.log(nom);
    });
}
function verEdades(){
    edades.forEach(eda => {
        console.log(eda);
    });
}

function Inicio(){
    let inicio = Number(prompt("Ingrese: 1. Para registrarse 2. Para ingresar una nueva deuda 3. Para ingresar un ingreso 4. Para ver todas las personas de esta sesion 5. Para ver los generos de las personas registradas 6. Para finalizar el programa"));
    switch(inicio){
        case 1: Registrar();break;
        case 2: nuevaDeuda();break;
        case 3: nuevoIngreso();break;
        case 4: verPersonas();break;
        case 5: verEdades();break;
        case 6: Finalizar();break;
        default: Inicio(); console.log("Ingrese un numero correcto");break;
    }
}

function Registrar(){
    nombre = prompt("Ingrese su nombre");
    edad = Number(prompt("Ingrese su edad"));
    dni = Number(prompt("Ingrese su dni"));
    deuda = Number(prompt("Si posee una deuda pulse 1, de lo contrario 0"));
    nombres.push(nombre);
    edades.push(edad);
    if (deuda == 1){
        nuevaDeuda();
    }else if(deuda > 1 || deuda < 0){
        console.log("Ingrese un numero correcto. ");
        Inicio();
    }else{
        nuevoIngreso();
    }
}
const promedioEdad = () => {let total = edades.reduce((acumulador, elemento) => acumulador + elemento, 0); return total / edades.length;}

function Finalizar(){
    console.log("Hemos finalizado el programa.");
    console.log("Hemos registrado un total de " + nombres.length + " personas. " + "El promedio de edades es " + promedioEdad());
}
Inicio(); 