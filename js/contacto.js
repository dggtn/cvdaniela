let nombre;
let email;
let mensaje;
//validar formularios
function contacto(){
    let formularioValido = true;
    let emailValido = true
    let nombre= document.getElementById("nombre").value;
    if (nombre == ""){
        formularioValido = false;
    }

    let email= document.getElementById("email").value;
    if (email == ""){
        formularioValido = false;
    } else {
        emailValido = validarEmail(email)
        if(emailValido == false) {
            formularioValido = false;
        }
    }
    
    let comentarios= document.getElementById("mensaje").value;
    if (comentarios == ""){
        formularioValido = false;
    }
    if (formularioValido == true){
        alert ("Gracias por tu interés en mi CV, " + nombre + "  ¡me pondré en contacto contigo lo antes posible!") 
        document.getElementById("nombre").value = ""
        document.getElementById("email").value=""
        document.getElementById("mensaje").value=""
        
    } else {
        alert ("Por favor complete todos los campos")
        console.log("Valido:", emailValido)
        if (emailValido == false) {
            alert ("Formato de email incorrecto")
        }
    }
}

function validarEmail(email){
	
	// Define our regular expression.
	var expresionRegular =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    return expresionRegular.test(email);
}