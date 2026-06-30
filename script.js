```javascript
const whatsapp = "526624212850";

function mostrarCamposEvento(){
    const tipo = document.getElementById("tipo").value;
    const camposEvento = document.getElementById("camposEvento");

    if(tipo === "Flyer de evento" || tipo === "Invitación / convocatoria"){
        camposEvento.classList.remove("hidden");
    }else{
        camposEvento.classList.add("hidden");
    }
}

function enviarWhatsapp(){
    const socio = document.getElementById("socio").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const tipo = document.getElementById("tipo").value;
    const tema = document.getElementById("tema").value.trim();

    const evento = document.getElementById("evento").value.trim();
    const tecnico = document.getElementById("tecnico").value.trim();
    const fechaEvento = document.getElementById("fechaEvento").value;
    const horaEvento = document.getElementById("horaEvento").value;
    const direccion = document.getElementById("direccion").value.trim();

    const texto = document.getElementById("texto").value.trim();
    const notas = document.getElementById("notas").value.trim();

    if(!socio || !ciudad || !celular || !tipo || !tema){
        alert("Por favor completa todos los campos obligatorios marcados con *.");
        return;
    }

    if((tipo === "Flyer de evento" || tipo === "Invitación / convocatoria") &&
       (!evento || !tecnico || !fechaEvento || !horaEvento || !direccion)){
        alert("Para flyer de evento completa nombre del evento, técnico, fecha, hora y dirección.");
        return;
    }

    let mensaje = "Hola, quiero solicitar un material gráfico:%0A%0A";
    mensaje += `Socio comercial: ${socio}%0A`;
    mensaje += `Ciudad: ${ciudad}%0A`;
    mensaje += `Celular para publicidad: ${celular}%0A`;
    mensaje += `Tipo de material: ${tipo}%0A`;
    mensaje += `Producto / promoción / tema principal: ${tema}%0A%0A`;

    if(tipo === "Flyer de evento" || tipo === "Invitación / convocatoria"){
        mensaje += "Datos del evento:%0A";
        mensaje += `Nombre del evento: ${evento}%0A`;
        mensaje += `Técnico: ${tecnico}%0A`;
        mensaje += `Fecha: ${fechaEvento}%0A`;
        mensaje += `Hora: ${horaEvento}%0A`;
        mensaje += `Dirección completa: ${direccion}%0A%0A`;
    }

    mensaje += `Texto que debe llevar el diseño:%0A${texto || "Sin texto específico"}%0A%0A`;
    mensaje += `Notas adicionales:%0A${notas || "Sin notas adicionales"}`;

    window.open(`https://wa.me/${whatsapp}?text=${mensaje}`, "_blank");
}
```
