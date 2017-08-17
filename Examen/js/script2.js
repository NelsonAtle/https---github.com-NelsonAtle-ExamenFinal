var publicaciones = JSON.parse(localStorage.getItem('publicaciones'));

if (!publicaciones) {
    publicaciones = [];
}

function iniciar() {
    btnPublicar = document.getElementById("publi");
    btnPublicar.addEventListener("click", registrar, false);
    var get = getGET();
    post(get.var2);
}
function getGET(){
   var loc = document.location.href;
   var getString = loc.split('?')[1];
   var GET = getString.split('&');
   var get = {};

   for(var i = 0, l = GET.length; i < l; i++){
      var tmp = GET[i].split('=');
      get[tmp[0]] = unescape(decodeURI(tmp[1]));
   }
   return get;
}
function registrar() {
    var get = getGET();
    var public = document.getElementById("dato").value;
    saveToLocalStorage(get.var1,get.var2,public);

}

function saveToLocalStorage(nombre,correo,publications) {

    var publicacion = {
        nombre,
        correo,
        publications
    };


    publicaciones.push(publicacion);

    localStorage.setItem('publicaciones', JSON.stringify(publicaciones));
    post(correo);
}

function post(correo){
    if(localStorage.getItem("publicaciones")){

        
        var registros = JSON.parse(localStorage.getItem("publicaciones"));
        document.getElementById("publicaciones").innerHTML="";
        var respaldo = document.getElementById("publicaciones").value;
        for(i=0; i<registros.length;i++){
            if(registros[i].correo==correo){
              respaldo+=registros[i].nombre +"\n"+registros[i].publications+"\n \n";
              document.getElementById("publicaciones").innerHTML = respaldo;
            }
        }
       
       }
}


window.addEventListener("load", iniciar, false);