var usuarios = JSON.parse(localStorage.getItem('usuarios'));

if (!usuarios) {
    usuarios = [];
}

function iniciar() {
    btnGuardar = document.getElementById("save");
    btnGuardar.addEventListener("click", registrar, false);
    btnLoguear = document.getElementById("iniciar");
    btnLoguear.addEventListener("click", login, false);
}

function registrar() {
    var nombre = (document.getElementById("nombre").value);
    var apellido = (document.getElementById("apellido").value);
    var correo = (document.getElementById("correo").value);
    var contraseña = (document.getElementById("password").value);

    saveToLocalStorage(nombre, apellido, correo, contraseña);

}

function saveToLocalStorage(nombre, apellido, correo, contraseña) {

    var usuario = {
        nombre,
        apellido,
        correo,
        contraseña
    };


    usuarios.push(usuario);

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("correo").value="";
    document.getElementById("password").value="";
    alert("Nuevo Usuario Insertado");

}

function login(){
    if(localStorage.getItem("usuarios")){
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        
        var registros = JSON.parse(localStorage.getItem("usuarios"));
       
        for(i=0; i<registros.length;i++){
           
            if (user==registros[i].correo && pass==registros[i].contraseña) {
               
                location.href = "openFacebook.html?var1="+registros[i].nombre+"&var2="+registros[i].correo;
                document.getElementById("user").value="";
                document.getElementById("pass").value="";
                break;
            }
        }
       
       }
}


window.addEventListener("load", iniciar, false);