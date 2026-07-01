const whatsapp = "526623641909";

function mostrarCampos(){

    const tipo = document.getElementById("tipo").value;
    const formato = document.getElementById("formato").value;

    const camposEvento = document.getElementById("camposEvento");
    const camposMedidas = document.getElementById("camposMedidas");
    const descripcionTipo = document.getElementById("descripcionTipo");
    const descripcionFormato = document.getElementById("descripcionFormato");

    // Mostrar datos del evento
    if(
        tipo === "Flyer de evento" ||
        tipo === "Invitación / convocatoria" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro"
    ){
        camposEvento.classList.remove("hidden");
    }else{
        camposEvento.classList.add("hidden");
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

    // Descripción del tipo
    let textoTipo = "";

    switch(tipo){

        case "Flyer promocional":
            textoTipo = "Ideal para promociones, lanzamientos, descuentos o campañas comerciales.";
            break;

        case "Historia para redes":
            textoTipo = "Diseño vertical pensado para historias de Instagram, Facebook o WhatsApp.";
            break;

        case "Post para redes":
            textoTipo = "Diseño para publicaciones permanentes en redes sociales.";
            break;

        case "Flyer de evento":
            textoTipo = "Material para promocionar cursos, certificaciones, demostraciones o eventos.";
            break;

        case "Invitación / convocatoria":
            textoTipo = "Material para invitar a socios comerciales, técnicos o clientes.";
            break;

        case "Pendón publicitario":
            textoTipo = "Material impreso de gran formato. Es necesario indicar medidas y tipo de material.";
            break;

        case "Otro":
            textoTipo = "Describe el material que necesitas. Se habilitarán todos los campos para que Marketing pueda evaluar la mejor opción.";
            break;
    }

    if(textoTipo){
        descripcionTipo.innerHTML = textoTipo;
        descripcionTipo.classList.remove("hidden");
    }else{
        descripcionTipo.classList.add("hidden");
    }

    // Descripción del formato

    let textoFormato = "";

    if(formato === "Digital"){
        textoFormato = "Selecciona esta opción si el material será utilizado únicamente en medios digitales como redes sociales, WhatsApp o correo electrónico.";
    }

    if(formato === "Impreso"){
        textoFormato = "Selecciona esta opción cuando el material vaya a imprimirse. Es obligatorio indicar medidas y tipo de material.";
    }

    if(textoFormato){
        descripcionFormato.innerHTML = textoFormato;
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

    // Validaciones generales

    if(!socio || !ciudad || !tipo || !formato || !objetivo){
        alert("Por favor completa todos los campos obligatorios.");
        return;
    }

    // Validación impresión

    if(
        (formato === "Impreso" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro")
        &&
        (!medidas || !tipoMaterial)
    ){
        alert("Debes indicar las medidas y el tipo de material.");
        return;
    }

    // Validación evento

    if(
        (
        tipo === "Flyer de evento" ||
        tipo === "Invitación / convocatoria" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro"
        )
        &&
        (
        !evento ||
        !tecnico ||
        !fechaEvento ||
        !horaEvento ||
        !direccion
        )
    ){
        alert("Completa todos los datos del evento.");
        return;
    }

    // Construcción del mensaje

    let mensaje = "Hola, quiero solicitar un material gráfico:%0A%0A";

    mensaje += `Socio comercial: ${socio}%0A`;
    mensaje += `Ciudad: ${ciudad}%0A`;
    mensaje += `Celular para publicidad: ${celular || "No aplica"}%0A`;
    mensaje += `Tipo de material: ${tipo}%0A`;
    mensaje += `Formato: ${formato}%0A`;

    if(
        formato === "Impreso" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro"
    ){
        mensaje += `Medidas: ${medidas}%0A`;
        mensaje += `Tipo de material: ${tipoMaterial}%0A`;
    }

    mensaje += `%0AObjetivo del material:%0A${objetivo}%0A%0A`;

    if(
        tipo === "Flyer de evento" ||
        tipo === "Invitación / convocatoria" ||
        tipo === "Pendón publicitario" ||
        tipo === "Otro"
    ){

        mensaje += "DATOS DEL EVENTO:%0A";

        mensaje += `Nombre del evento: ${evento}%0A`;
        mensaje += `Técnico: ${tecnico}%0A`;
        mensaje += `Fecha: ${fechaEvento}%0A`;
        mensaje += `Hora: ${horaEvento}%0A`;
        mensaje += `Dirección: ${direccion}%0A%0A`;

    }

    mensaje += `Especificaciones adicionales:%0A${notas || "Sin especificaciones"}%0A`;

    window.open(
        `https://wa.me/${whatsapp}?text=${mensaje}`,
        "_blank"
    );

}
