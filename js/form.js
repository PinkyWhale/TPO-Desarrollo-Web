const nombre = document.getElementById('nombreInput');
const email = document.getElementById('mailInput');
const error = document.getElementById('error');
const form = document.getElementById('formulario-id');
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener('submit', function(evt){
    evt.preventDefault();
    console.log('Enviando formulario...')

    var mensajesError = [];

    // Validacion Nombre
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa un Nombre valido*');
    }

    //Validacion Mail
    if(email.value.match(mailformat)){
        console.log('Mail OK!');
    }else{
        mensajesError.push('Ingresa un Email valido*');
    }

    //Mensajes de error en form
    error.innerHTML = mensajesError.join(', <br>');
});
