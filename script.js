const whatsapp = "526623641909";

function mostrarCamposEvento(){

    const tipo = document.getElementById("tipo").value;

    if(
        tipo === "Flyer de evento" ||
        tipo === "Invitación / convocatoria"
    ){
        document.getElementById("camposEvento")
        .classList.remove("hidden");
    }
    else{
        document.getElementById("camposEvento")
        .classList.add("hidden");
    }
}

function enviarWhatsapp(){

    let mensaje = "";

    mensaje += "SOLICITUD DE MATERIAL GRAFICO%0A%0A";

    mensaje += "Socio Comercial: "
        + document.getElementById("socio").value + "%0A";

    mensaje += "Ciudad: "
        + document.getElementById("ciudad").value + "%0A";

    mensaje += "Celular: "
        + document.getElementById("celular").value + "%0A";

    mensaje += "Tipo de material: "
        + document.getElementById("tipo").value + "%0A";

    if(
        document.getElementById("tipo").value === "Flyer de evento" ||
        document.getElementById("tipo").value === "Invitación / convocatoria"
    ){

        mensaje += "%0A--- DATOS DEL EVENTO ---%0A";

        mensaje += "Evento: "
            + document.getElementById("evento").value + "%0A";

        mensaje += "Tecnico: "
            + document.getElementById("tecnico").value + "%0A";

        mensaje += "Fecha: "
            + document.getElementById("fechaEvento").value + "%0A";

        mensaje += "Hora: "
            + document.getElementById("horaEvento").value + "%0A";

        mensaje += "Direccion: "
            + document.getElementById("direccion").value + "%0A";
    }

    mensaje += "%0AProducto / Promocion:%0A";
    mensaje += document.getElementById("tema").value + "%0A%0A";

    mensaje += "Texto:%0A";
    mensaje += document.getElementById("texto").value + "%0A%0A";

    mensaje += "Notas:%0A";
    mensaje += document.getElementById("notas").value;

    window.open(
        `https://wa.me/${whatsapp}?text=${mensaje}`,
        "_blank"
    );
}
