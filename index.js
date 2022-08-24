let inputValue = Number(prompt('Ingrese un numero'));

    for(let i = 0; i<5; i++){
    inputValue += Number(prompt("Ingrese otro numero"));
    console.log(inputValue);
}

let valorInicial = prompt("Ingrese un texto o numeros");
 console.log(valorInicial);

do{
    let valorExtra = prompt("Ingrese otro texto, para terminar la concatenacion escriba 'ESC' ");
    valorInicial += valorExtra;
    console.log(valorInicial);
}while(valorInicial.includes('ESC') == false);

let numero = Number(prompt("Ingrese un numero"));

let multiplicacion = Number(prompt("Ingrese la cantida de veces que desea multiplicarlo"));

if(multiplicacion > 0 && numero > 0){
    let resultado = numero * multiplicacion;
    console.log(resultado);
}else if(isNaN(multiplicacion) && isNaN(numero)){
    console.log("Recuerda que tienen que ser numeros!");
}else{
    console.log("Alguno de los numeros ingresados es menor a 0 o igual a 0.");
}