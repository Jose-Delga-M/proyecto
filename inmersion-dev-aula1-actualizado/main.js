let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let limpiar = document.getElementById('limpiar');


const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567891234567890!@#$%^&*,.?!@#$%^&*,.?";


function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if(numeroDigitado < 8){
        alert("la cantidad de caracteres tiene que ser mayor que 8");
        return;
     }

     let password = '';

    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres [Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);
        
        password += caracterAleatorio;
    }

    contrasena.value = password;

    validarContraseña(password);
    
}

function limpiar_contrasena(){
    contrasena.value = "";
    seguridad.value = '';
}
function validarContraseña(contraseña) {
    let expresion = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    
    if ((expresion.test(contraseña))) {
        seguridad.value = 'Fuerte';
        seguridad.style.color = 'green';
    } else {
        seguridad.value = 'Debil';
        seguridad.style.color = 'red';
    }

}
validarContraseña();
