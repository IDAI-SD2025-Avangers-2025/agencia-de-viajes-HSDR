
function calcular() {
    var total = 0;
    var form = document.getElementById("calcular-precio");
    var vuelo = form.vuelo.value;
    if (!vuelo) {
        alert("Selecciona una opción de vuelo");
        return;
    }
    
    
    if (vuelo == "sin-avion") {
        total = total + 999;
    }
    if (vuelo == "ida") {
        total = total + 2499;
    }
    if (vuelo == "ida-vuelta") {
        total = total + 5999;
    }

    
    var hospedaje = form.hospedaje.value;
    if (!hospedaje) {
        alert("Selecciona una opción de hospedaje");
        return;
    }
    
    
    if (hospedaje == "sin-hotel") {
        total = total + 499;
    }
    if (hospedaje == "sencilla") {
        total = total + 799;
    }
    if (hospedaje == "doble") {
        total = total + 999;
    }

    
    var adultos = document.getElementById("adultos").value;
    total = total + (adultos * 865);

    var menores = document.getElementById("menores").value;
    total = total + (menores * 437);

    var dias = document.getElementById("dias-individual").value;
    if (dias < 1) {
        alert("Ingresa un número válido de días");
        return;
    }
    total = total + (dias * 769);

    alert("Total: $" + total + " MXN");
}


function calcularPaquete() {
    var total = 0;
    var form = document.getElementById("calcular-paquetes");

    var destino = form.destino.value;
    if (!destino) {
        alert("Selecciona un destino turístico");
        return;
    }
    
    if (destino == "suramerica") {
        total = total + 7999;
    }
    if (destino == "europa") {
        total = total + 21999;
    }
    if (destino == "africa") {
        total = total + 17999;
    }
    if (destino == "asia") {
        total = total + 25999;
    }
    if (destino == "norteamerica") {
        total = total + 12999;
    }

    var dias = document.getElementById("dias-paquete").value;
    if (dias < 1) {
        alert("Ingresa un número válido de días");
        return;
    }
    total = total + (dias * 899);

    if (form.especial.checked) {
        total = total + 19999;
    }

    var cantidadExtras = 0;
    if (form.extras(0).checked) cantidadExtras = cantidadExtras + 1;
    if (form.extras(1).checked) cantidadExtras = cantidadExtras + 1;
    if (form.extras(2).checked) cantidadExtras = cantidadExtras + 1;
    if (form.extras(3).checked) cantidadExtras = cantidadExtras + 1;
    if (form.extras(4).checked) cantidadExtras = cantidadExtras + 1;
    total = total + (cantidadExtras * 699);

    alert("Total: $" + total + " MXN");
}