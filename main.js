window.onload = iniciar;

function iniciar() {
    btnContador = document.getElementById("btnContador");
    btnContador.addEventListener("click", capitulosRecuento);

    function capitulosRecuento() {
        let capitulos = (document.getElementById("formulario").value);
        {
            if (capitulos > 1059) {
                alert("tiene muchos pero no tantos")
            }

            if (capitulos < 1059) {
                alert("te quedaste corto")
            }

            if (capitulos == 1059) {
                alert("Perfecto, eres un mugiwara!!")
            }
        }
    }
}