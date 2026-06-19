document.addEventListener("DOMContentLoaded", function () {

    const tipoMaterial = document.getElementById("tipoMaterial");
    const camposFlyer = document.getElementById("camposFlyer");

    if (tipoMaterial && camposFlyer) {
        tipoMaterial.addEventListener("change", function () {
            if (this.value === "Flyer") {
                camposFlyer.classList.remove("oculto");
            } else {
                camposFlyer.classList.add("oculto");
            }
        });
    }

});

function obtenerValor(id) {
    const elemento = document.getElementById(id);
    return elemento ? elemento.value.trim() : "";
}

function enviarWhatsApp() {

    const distribuidor = obtenerValor("distribuidor");
    const ciudad = obtenerValor("ciudad");
    const celularPublicidad = obtenerValor("celularPublicidad");
    const tipo = obtenerValor("tipoMaterial");
    const formato = obtenerValor("formato");
    const medidas = obtenerValor("medidas");
    const fechaEntrega = obtenerValor("fechaEntrega");
    const objetivo = obtenerValor("objetivo");

    const nombreEvento = obtenerValor("nombreEvento");
    const ciudadEvento = obtenerValor("ciudadEvento");
    const fechaEvento = obtenerValor("fechaEvento");
    const horaEvento = obtenerValor("horaEvento");
    const tecnico = obtenerValor("tecnico");
    const direccionEvento = obtenerValor("direccionEvento");

    if (!distribuidor || !ciudad || !celularPublicidad || !tipo || !formato || !fechaEntrega || !objetivo) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
    }

    if (tipo === "Flyer") {
        if (!nombreEvento || !ciudadEvento || !fechaEvento || !horaEvento || !tecnico || !direccionEvento) {
            alert("Por favor completa todos los datos obligatorios del evento.");
            return;
        }
    }

    let detalleEvento = "";

    if (tipo === "Flyer") {
        detalleEvento = `

📌 DATOS DEL EVENTO
Nombre del evento: ${nombreEvento}
Ciudad del evento: ${ciudadEvento}
Fecha del evento: ${fechaEvento}
Hora del evento: ${horaEvento}
Técnico / Imparte: ${tecnico}
Dirección completa del evento: ${direccionEvento}`;
    }

    const telefono = "526621234567"; // Cambia este número

    const mensaje = `🎨 SOLICITUD DE MATERIALES GRÁFICOS

👤 Distribuidor:
${distribuidor}

📍 Ciudad:
${ciudad}

📱 Celular para publicidad:
${celularPublicidad}

🖼️ Tipo de material:
${tipo}

📌 Formato:
${formato}

📐 Medidas / especificación:
${medidas || "No especificado"}${detalleEvento}

📅 Fecha requerida de entrega:
${fechaEntrega}

🎯 Objetivo o uso:
${objetivo}

📎 Nota:
Las referencias, fotografías, logotipos o ejemplos pueden adjuntarse posteriormente en Trello.

— Solicitud generada desde Verenize Marketing Request`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.location.href = url;
}
