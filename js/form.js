const nombre = document.getElementById("nombreInput");
const mail = document.getElementById("mailInput");
const comentarios= document.getElementById("comentariosFormControlTextarea");
const colaborar = document.getElementsByName("flexRadioDefault");
const terms = document.getElementById("checkTerms");
const suscrip = document.getElementById("checkSuscrip");
const form = document.getElementById("form");
const mensajes = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    
    let warnings = '';
    let validacion = false;
    let regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

    if (nombre.value.lenght<3) {
        warnings += 'El nombre es menor a 3 caracteres* <br>';
        validacion = true;
    };
    if(!regexMail.test(mail.value)){
        warnings += 'El mail no es valido* <br>';
        validacion = true;
    }

    if(validacion) {
        mensajes.innerHTML = warnings;
        
    }else{
        mensajes.innerHTML = 'ENVIADO!';
    }
})