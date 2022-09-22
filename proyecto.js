class Deuda{
    constructor(deuda, persona){
        this.deuda = deuda;
        this.persona = persona;
    }
} 

class Ingreso{
    constructor(ingreso, persona){
        this.ingreso = ingreso;
        this.persona = persona; 
    }
}

let nombreUsuario;

document.getElementById("formularioInicio").addEventListener("submit", handlerInicio);

function handlerInicio(e){
    e.preventDefault();
    nombreUsuario = document.getElementById("user").value;

    let gestorTotal = document.getElementById("gestor");
    const deudas = JSON.parse(localStorage.getItem(nombreUsuario));
    const ingresos = JSON.parse(localStorage.getItem(nombreUsuario));
    
    if(deudas > 0 && ingresos > 0){
        mostrarTotalDeudas(deudas);
        mostrarTotalIngreso(ingresos);
    }else{
        gestorTotal.innerHTML = `<h1>Bienvenido! ${nombreUsuario} al gestor de gastos.</h1>
                                 <br>
                                 <h2>No posees ningun registro actualmente.</h2>`;
    }
    mostrarPanelDeuda();
    mostrarPanelIngreso();
}

function mostrarTotalDeudas(deudas){
    let gestorDeuda = document.getElementById("gestorDeuda");
    gestorDeuda.innerHTML= "";
    
    deudas.forEach(deuda => {
        let li = document.createElement("li");
        li.innerHTML = `<h2>Deuda de ${deuda.deuda}`;
        const botonBorrar = botonBorrarDeuda(deuda);
        li.appendChild(botonBorrar);
        gestorDeuda.appendChild(li);
    });

    totalDeudas = deudas.reduce((valorTotal, valorActual) => valorTotal + valorActual, 0);

    if(totalDeudas > 0){
        let liDeuda = document.createElement("li");
        liDeuda.innerHTML = `<h2>Usted posee una deuda de ${totalDeudas}`;
        gestorDeuda.appendChild(liDeuda);
    }else if(totalDeudas <= 0){
        let liNulo = document.createElement("li");
        liNulo.innerHTML = `<h2>Usted no registra una deuda`;
        gestorDeuda.appendChild(liNulo);
        mostrarTotalDeudas();
    }
}

function mostrarTotalIngreso(ingresos){
    let gestorIngreso = document.getElementById("gestorIngreso");

    gestorIngreso.innerHTML= "";

    ingresos.forEach(ingreso => {
        let li = document.createElement("li");
        li.innerHTML = `<h2>Ingreso de ${ingreso.ingreso}`
        const botonBorrar = botonBorrarIngreso(ingreso);
        li.appendChild(botonBorrar);
        gestorIngreso.appendChild(li);
    });

    totalIngreso = ingresos.reduce((valorTotal, valorActual) => valorTotal + valorActual, 0);

    if(totalIngreso > 0){
        let liIngreso = document.createElement("li");
        liIngreso.innerHTML = `<h2>Usted posee un ingreso de ${totalIngreso}`;
        gestorIngreso.appendChild(liIngreso);
    }else if(totalIngreso <= 0){
        let liNulo = document.createElement("li");
        liNulo.innerHTML = "Usted no posee ningun ingreso registrado";
        gestorIngreso.appendChild(liNulo);
        mostrarPanelIngreso();
    }
}

function botonBorrarDeuda(deuda){
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
        eliminarDeuda(deuda);
    })
    return botonBorrar;
}

function botonBorrarIngreso(ingreso){
    const botonBorrar = document.createElement("button");
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => {
        eliminarIngreso(ingreso);
    })
    return botonBorrar;
}

function eliminarIngreso(ingreso){
    const ingresoEnLocal = JSON.parse(localStorage.getItem(nombreUsuario));
    let nuevoArrayIngresos = ingresoEnLocal.filter(ingresos => ingresos.ingreso != ingreso.ingreso);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArrayIngresos));
    mostrarTotalIngreso(nuevoArrayIngresos);
}

function eliminarDeuda(deuda){
    const deudaEnLocal = JSON.parse(localStorage.getItem(nombreUsuario));
    const nuevoArrayDeudas = deudaEnLocal.filter(item => item.deuda != deuda.deuda);
    localStorage.setItem(nombreUsuario, JSON.stringify(nuevoArrayDeudas));
    mostrarTotalDeudas(nuevoArrayDeudas);
}

function mostrarPanelDeuda(){
    let deuda = document.getElementById("gestorDeuda");

    deuda.innerHTML = `<form id="formularioDeudas">
                        <input type="text" id="deuda" placeholder="Ingrese su deuda">
                        <button type="submit">Agregar deuda</button>
                        </form>`;
    document.getElementById("formularioDeudas").addEventListener("submit", agregarDeuda);
}

function mostrarPanelIngreso(){
    const ingreso = document.getElementById("gestorIngreso");
    ingreso.innerHTML = `<form id="formularioIngreso">
                        <input type="text" id="ingreso" placeholder="Registre su ingreso">
                        <button type="submit">Agregar ingreso</button>
                        </form>`;
    document.getElementById("formularioIngreso").addEventListener("submit", agregarIngreso);
}

function agregarDeuda(e){
    e.preventDefault();
    const deudaValor = document.getElementById("deuda").value;

    const deuda = new Deuda(deudaValor, nombreUsuario);

    const deudaEnLocal = JSON.parse(localStorage.getItem(nombreUsuario));

    if(deudaEnLocal == null){
        localStorage.setItem(nombreUsuario, JSON.stringify([deuda]));
        mostrarTotalDeudas([deuda]);
    }else{
        deudaEnLocal.push(deudaValor);
        localStorage.setItem(nombreUsuario, JSON.stringify(deudaEnLocal));
        mostrarTotalDeudas(deudaEnLocal);
    }
    e.target.reset();
    console.log(deudaEnLocal);
    console.log(deuda);
    console.log(deudaValor);
}
function agregarIngreso(e){
    e.preventDefault();
    const ingresoValor = document.getElementById("ingreso").value;
    
    const ingreso = new Ingreso(ingresoValor, nombreUsuario);
    <a href=""></a>

    const ingresoEnLocal = JSON.parse(localStorage.getItem(nombreUsuario));

    if(ingresoEnLocal == null){
        localStorage.setItem(nombreUsuario, JSON.stringify([ingreso]));
        mostrarTotalDeudas([ingreso]);
    }else{
        ingresoEnLocal.push(ingresoValor);
        localStorage.setItem(nombreUsuario, JSON.stringify(ingresoEnLocal));
        mostrarTotalIngreso(ingresoEnLocal);
    }
    e.target.reset();
    console.log(ingreso);
    console.log(ingresoValor);
    console.log(ingresoEnLocal);
}