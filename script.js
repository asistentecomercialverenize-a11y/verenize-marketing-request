function obtenerValor(id) {
    const elemento = document.getElementById(id);
    return elemento ? elemento.value.trim() : "";
}

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

function enviarWhatsApp() {
    const socio comercial = obtenerValor("socio comercial");
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

    if (!Socio comercial || !ciudad || !tipo || !formato) {
        alert("Completa nombre del socio comercial, ciudad, tipo de material y formato.");
        return;
    }

    let detalleEvento = "";

    if (tipo === "Flyer") {
        detalleEvento = `

📌 DATOS DEL EVENTO
Nombre del evento: ${nombreEvento || "No especificado"}
Ciudad del evento: ${ciudadEvento || "No especificado"}
Fecha del evento: ${fechaEvento || "No especificado"}
Hora del evento: ${horaEvento || "No especificado"}
Técnico / Imparte: ${tecnico || "No especificado"}
Dirección completa del evento: ${direccionEvento || "No especificado"}`;
    }

    const telefono = "526621234567"; // Cambia este número por el WhatsApp real

    const mensaje = `🎨 SOLICITUD DE MATERIALES GRÁFICOS

👤Socio Comercial:
${Socio comercial)

📍 Ciudad:
${ciudad}

📱 Celular para publicidad:
${celularPublicidad || "No especificado"}

🖼️ Tipo de material:
${tipo}

📌 Formato:
${formato}

📐 Medidas / especificación:
${medidas || "No especificado"}${detalleEvento}

📅 Fecha requerida de entrega:
${fechaEntrega || "No especificado"}

🎯 Objetivo o uso:
${objetivo || "No especificado"}

📎 Nota:
Las referencias, fotografías, logotipos o ejemplos pueden adjuntarse posteriormente en Whatsapp.

— Solicitud generada desde Verenize Marketing Request`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.location.href = url;
}
