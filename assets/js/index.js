function relogio () {
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();

    if (hora < 0) {
        hora = "0" + hora;
    }

    if (minutos < 0) {
        minutos = "0" + minutos;
    }

    if (segundos < 0) {
        segundos = "0" + "0" + segundos;
    }

    var horas = hora + ":" + minutos + ":" + segundos;

 document.getElementById("rel").value=horas;
}

var Timer = setInterval(relogio,1000);