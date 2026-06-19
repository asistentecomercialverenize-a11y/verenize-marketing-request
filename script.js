document.addEventListener("DOMContentLoaded", function () {
  const tipoMaterial = document.getElementById("tipoMaterial");
  const camposFlyer = document.getElementById("camposFlyer");

  tipoMaterial.addEventListener("change", function () {
    if (this.value === "Flyer") {
      camposFlyer.classList.remove("oculto");
    } else {
      camposFlyer.classList.add("oculto");
    }
  });
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

  const nombreEvento = document.getElementById("nombreEvento")?.value.trim() || "";
  const ciudadEvento = document.getElementById("ciudadEvento")?.value.trim() || "";
  const fechaEvento = document.getElementById("fechaEvento")?.value || "";
  const horaEvento = document.getElementById("horaEvento")?.value || "";
  const tecnico = document.getElementById("tecnico")?.value.trim() || "";
  const direccionEvento = document.getElementById("direccionEvento")?.value.trim() || "";

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

  const telefono = "526621234567";

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
  window.open(url, "_blank");
}
