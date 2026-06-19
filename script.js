const tipoMaterial = document.getElementById("tipoMaterial");
const camposFlyer = document.getElementById("camposFlyer");

tipoMaterial.addEventListener("change", function () {
    if (this.value === "Flyer") {
        camposFlyer.classList.remove("oculto");
    } else {
        camposFlyer.classList.add("oculto");
    }
});

function enviarWhatsApp() {

    const distribuidor = document.getElementById("distribuidor").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const celularPublicidad = document.getElementById("celularPublicidad").value.trim();
    const tipo = document.getElementById("tipoMaterial").value;
    const formato = document.getElementById("formato").value;
    const medidas = document.getElementById("medidas").value.trim();
    const fechaEntrega = document.getElementById("fechaEntrega").value;
    const objetivo = document.getElementById("objetivo").value.trim();

    const nombreEvento = document.getElementById("nombreEvento").value.trim();
    const fechaEvento = document.getElementById("fechaEvento").value;
    const horaEvento = document.getElementById("horaEvento").value;
    const tecnico = document.getElementById("tecnico").value.trim();
    const ubicacionEvento = document.getElementById("ubicacionEvento").value.trim();
    const direccionEvento = document.getElementById("direccionEvento").value.trim();

    if (!distribuidor || !ciudad || !tipo || !formato || !fechaEntrega || !objetivo) {
        alert("Por favor completa todos los campos obligatorios.");
        return;
    }

    let detalleFlyer = "";

    if (tipo === "Flyer") {
        detalleFlyer = `

📌 DATOS DEL EVENTO
Nombre del evento: ${nombreEvento || "No especificado"}
Fecha del evento: ${fechaEvento || "No especificado"}
Hora: ${horaEvento || "No especificado"}
Técnico / Imparte: ${tecnico || "No especificado"}
Ubicación: ${ubicacionEvento || "No especificado"}
Dirección: ${direccionEvento || "No especificado"}`;
    }

    const telefono = "526621234567";

    const mensaje = `🎨 SOLICITUD DE MATERIALES GRÁFICOS

👤 Distribuidor:
${distribuidor}

📍 Ciudad:
${ciudad}

📱 Celular para publicidad:
${celularPublicidad || "No especificado"}

🖼️ Tipo de material:
${tipo}

📌 Formato:
${formato}

📐 Medidas / especificación:
${medidas || "No especificado"}${detalleFlyer}

📅 Fecha requerida:
${fechaEntrega}

🎯 Objetivo:
${objetivo}

📎 Nota:
Las referencias, fotografías, logotipos o ejemplos pueden adjuntarse posteriormente en Trello.`;

    window.open(`https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`, "_blank");
}
