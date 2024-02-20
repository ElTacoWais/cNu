document.getElementById("calcular").addEventListener("click", function() {
    // Obtener los valores de los input
    var valorInicial = parseFloat(document.getElementById("valor_inicial").value);
    var dias = parseInt(document.getElementById("dias").value);
    var diasM = parseInt(document.getElementById("diasM").value);
    var valorAgregado = parseFloat(document.getElementById("valor_agregado").value);

    var x = 1;
    var ganancia = 0.15;
    var valor = valorInicial;

    while (x <= dias){

        if (x % diasM == 0){
        valor += valorAgregado;
        valorInicial += valorAgregado;
        }

        valor = ((valor * ganancia) / 360) + valor;
        x += 1;
    }

    var ganancia = valor - valorInicial;
    var gMes = ganancia / 12;

    // Mostrar el resultado
    document.documentElement.innerHTML += "<div> Cantidad puesta: " + valorInicial + "<br>Cantidad final: " + valor + "<br>Cantidad ganada: " + ganancia + "<br>Cantidad ganada por mes: " + gMes + "</div>";

});
