const nombre = document.getElementById('nombreInput');
const email = document.getElementById('mailInput');
const msj = document.getElementById('msj-id');
const form = document.getElementById('formulario-id');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const mensajeOK= "Formulario Enviado!";

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log('Enviando formulario...')
    let validflag1,validflag2 = false;
    var mensajesError = [];

    // Validacion Nombre
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa un Nombre valido*');
    }else{
        validflag1 = true;
    }

    //Validacion Mail
    if(email.value.match(mailformat)){
        validflag2 = true;
    }else{
        mensajesError.push('Ingresa un Email valido*');
    }

    if(validflag1 && validflag2){
        alert("Formulario enviado al correo de los Administradores")
    }
    //Mensajes de error en form
    msj.innerHTML = mensajesError.join(', <br>');
});