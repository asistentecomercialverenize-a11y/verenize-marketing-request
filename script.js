function enviarWhatsApp() {
  const distribuidor = document.getElementById("distribuidor").value.trim();
  const ciudad = document.getElementById("ciudad").value.trim();
  const tipoMaterial = document.getElementById("tipoMaterial").value;
  const formato = document.getElementById("formato").value;
  const medidas = document.getElementById("medidas").value.trim();
  const fechaEntrega = document.getElementById("fechaEntrega").value;
  const objetivo = document.getElementById("objetivo").value.trim();

  if (!distribuidor || !ciudad || !tipoMaterial || !formato || !fechaEntrega || !objetivo) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  const telefono = "526621234567"; // Cambia este número por el WhatsApp correcto

  const mensaje = `🎨 SOLICITUD DE MATERIALES GRÁFICOS - VERENIZE

👤 Distribuidor:
${distribuidor}

📍 Ciudad:
${ciudad}

🖼️ Tipo de material:
${tipoMaterial}

📌 Formato:
${formato}

📐 Medidas / especificación breve:
${medidas || "No especificado"}

📅 Fecha requerida:
${fechaEntrega}

🎯 Objetivo o uso del material:
${objetivo}

📎 Nota:
El socio puede adjuntar referencias, fotografías, logotipos o ejemplos en la tarjeta de Trello si es necesario.`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
