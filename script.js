const whatsapp = "526624212850";

function mostrarCampos(){

    const tipo = document.getElementById("tipo").value;
    const formato = document.getElementById("formato").value;
    
    const camposPendon = document.getElementById("camposPendon");  
    const camposEvento = document.getElementById("camposEvento");
    const camposMedidas = document.getElementById("camposMedidas");
    const descripcionTipo = document.getElementById("descripcionTipo");
    const descripcionFormato = document.getElementById("descripcionFormato");

    // Mostrar campos del evento
    // Mostrar secciones según el tipo

if(tipo === "Flyer de evento" || tipo === "Invitación / convocatoria"){

    camposEvento.classList.remove("hidden");
    camposPendon.classList.add("hidden");

}
else if(tipo === "Pendón publicitario"){

    camposEvento.classList.add("hidden");
    camposPendon.classList.remove("hidden");

}
else if(tipo === "Otro"){

    camposEvento.classList.remove("hidden");
    camposPendon.classList.remove("hidden");

}
else{

    camposEvento.classList.add("hidden");
    camposPendon.classList.add("hidden");

}
    }

    // Mostrar medidas
    if(
        formato === "Impreso" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro"
    ){
        camposMedidas.classList.remove("hidden");
    }else{
        camposMedidas.classList.add("hidden");
    }

    // Descripción tipo

    let textoTipo="";

    switch(tipo){

        case "Historia para redes":
            textoTipo="Diseño vertical para historias de redes sociales.";
        break;

        case "Post para redes":
            textoTipo="Diseño para publicaciones permanentes.";
        break;

        case "Flyer de evento":
            textoTipo="Material para promocionar cursos, certificaciones o eventos.";
        break;

        case "Invitación / convocatoria":
            textoTipo="Material para invitar asistentes a un evento.";
        break;

        case "Pendón publicitario":
            textoTipo="Pendón impreso. Solo indica el nombre del evento y las medidas.";
        break;

        case "Otro":
            textoTipo="Especifica el material requerido.";
        break;

    }

    if(textoTipo){
        descripcionTipo.innerHTML = textoTipo;
        descripcionTipo.classList.remove("hidden");
    }else{
        descripcionTipo.classList.add("hidden");
    }

    // Descripción formato

    let textoFormato="";

    if(formato==="Digital"){
        textoFormato="Material para uso digital.";
    }

    if(formato==="Impreso"){
        textoFormato="Material para impresión.";
    }

    if(textoFormato){
        descripcionFormato.innerHTML=textoFormato;
        descripcionFormato.classList.remove("hidden");
    }else{
        descripcionFormato.classList.add("hidden");
    }

}

function enviarWhatsapp(){

    const socio = document.getElementById("socio").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const celular = document.getElementById("celular").value.trim();
    const tipo = document.getElementById("tipo").value;
    const formato = document.getElementById("formato").value;

    const medidas = document.getElementById("medidas").value.trim();
    const tipoMaterial = document.getElementById("tipoMaterial").value.trim();

    const objetivo = document.getElementById("objetivo").value.trim();
    const notas = document.getElementById("notas").value.trim();

    const evento = document.getElementById("evento").value.trim();
    const tecnico = document.getElementById("tecnico").value.trim();
    const fechaEvento = document.getElementById("fechaEvento").value;
    const horaEvento = document.getElementById("horaEvento").value;
    const direccion = document.getElementById("direccion").value.trim();

    let mensaje = "Hola, quiero solicitar un material gráfico:%0A%0A";

    if(socio)
        mensaje += `Socio comercial: ${socio}%0A`;

    if(ciudad)
        mensaje += `Ciudad: ${ciudad}%0A`;

    if(celular)
        mensaje += `Celular: ${celular}%0A`;

    if(tipo)
        mensaje += `Tipo de material: ${tipo}%0A`;

    if(formato)
        mensaje += `Formato: ${formato}%0A`;

    if(
        (formato==="Impreso" || tipo==="Pendón publicitario" || tipo==="Otro")
        && (medidas || tipoMaterial)
    ){
        mensaje += `%0A`;
        if(medidas)
            mensaje += `Medidas: ${medidas}%0A`;
        if(tipoMaterial)
            mensaje += `Tipo de material para impresión: ${tipoMaterial}%0A`;
    }

    if(objetivo){
        mensaje += `%0AObjetivo del material:%0A${objetivo}%0A`;
    }

    if(tipo==="Flyer de evento"){

        mensaje += `%0A=== DATOS DEL EVENTO ===%0A`;

        if(evento)
            mensaje += `Nombre del evento: ${evento}%0A`;

        if(tecnico)
            mensaje += `Técnico: ${tecnico}%0A`;

        if(fechaEvento)
            mensaje += `Fecha: ${fechaEvento}%0A`;

        if(horaEvento)
            mensaje += `Hora: ${horaEvento}%0A`;

        if(direccion)
            mensaje += `Dirección: ${direccion}%0A`;

    }

    if(tipo==="Pendón publicitario"){

        mensaje += `%0A=== EVENTO ===%0A`;

        if(evento)
            mensaje += `Nombre del evento: ${evento}%0A`;

    }

    if(notas){
        mensaje += `%0AComentarios adicionales:%0A${notas}`;
    }

    window.open(
        `https://wa.me/${whatsapp}?text=${mensaje}`,
        "_blank"
    );

}
