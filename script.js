function enviarWhatsApp() {

    const distribuidor = document.getElementById("distribuidor").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const tipoMaterial = document.getElementById("tipoMaterial").value;
    const formato = document.getElementById("formato").value;
    const medidas = document.getElementById("medidas").value.trim();
    const fechaEntrega = document.getElementById("fechaEntrega").value;
    const objetivo = document.getElementById("objetivo").value.trim();

    // VALIDACIONES

    if (!distribuidor) {
        alert("Ingresa el nombre del distribuidor.");
        return;
    }

    if (!ciudad) {
        alert("Ingresa la ciudad.");
        return;
    }

    if (!tipoMaterial) {
        alert("Selecciona el tipo de material.");
        return;
    }

    if (!formato) {
        alert("Selecciona el formato.");
        return;
    }

    if (!fechaEntrega) {
        alert("Selecciona una fecha requerida.");
        return;
    }

    if (!objetivo) {
        alert("Describe el objetivo del material.");
        return;
    }

    // CAMBIAR POR EL NÚMERO OFICIAL
    const telefono = "526623641909";

    const mensaje =
`🎨 SOLICITUD DE MATERIALES GRÁFICOS

👤 Distribuidor:
${distribuidor}

📍 Ciudad:
${ciudad}

🖼️ Tipo de material:
${tipoMaterial}

📌 Formato:
${formato}

📐 Medidas / Especificación:
${medidas || "No especificado"}

📅 Fecha requerida:
${fechaEntrega}

🎯 Objetivo del material:
${objetivo}

📎 Nota:
Las referencias, fotografías, logotipos o ejemplos pueden adjuntarse posteriormente en Trello.

— Solicitud generada desde Centro Creativo Verenize`;

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}
