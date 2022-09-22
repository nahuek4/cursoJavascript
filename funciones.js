let ingreso = 0;
let deuda = 0;
let saldoTotal = 0;
let final = 0;

finalizar();

function egresoNuevo(){
    deuda = Number(prompt("Ingrese una nueva deuda"))
    if(deuda > 0){
        console.log("Se agrego una deuda de " + deuda);
        saldoTotal -= deuda;
        finalizar();
    }else{
        console.log("Ingrese un numero mayor a 0.");
        finalizar();
    }
}

function ingresoNuevo() {
    ingreso = Number(prompt("Ingrese un nuevo ingreso"));
    if(ingreso > 0){
        console.log("Se agrego un ingreso de " + ingreso);
        saldoTotal += ingreso;
        finalizar();
    }else{
        console.log("Ingrese un numero mayor a 0");
        finalizar();
    }
}

function finalizar(){
    final = Number(prompt("Gestor de gastos: Si quieres agregar un nuevo ingreso pulsa 1. Si quieres agregar una nueva deuda ingresa 2. Si quieres finalizar pulsa 0"));

    if(final >= 0 && final <=2){
        if(final == 1){
            ingresoNuevo();
        }else if(final == 2){
            egresoNuevo();
        }else{
            if(saldoTotal < 0){
                console.log("Tienes una deuda total de " + saldoTotal + ". Hay que trabajar para poder poner nuestros numeros en verde!");
            }else if(saldoTotal === 0){
                console.log("Actualmente no tienes deuda ni dinero en el bolsillo. A trabajar!");
            }else{
                console.log("Tienes " + saldoTotal + " pesos disponibles para gastar!");
            }
        }
    }else{
        console.log("Ingrese un numero correcto...");
        finalizar();
    }
}