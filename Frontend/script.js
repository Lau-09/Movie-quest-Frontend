document.addEventListener("DOMContentLoaded", function () {
  const btnAbrir = document.getElementById("btnAbrir");
  const btnCerrar = document.getElementById("btnCerrar");
  const ventanaFlotante = document.getElementById("miVentanaFlotante");

  // Función para abrir la ventana flotante
  btnAbrir.addEventListener("click", function () {
    ventanaFlotante.style.display = "block";
  });

  // Función para cerrar la ventana flotante
  btnCerrar.addEventListener("click", function () {
    ventanaFlotante.style.display = "none";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const btnAbrir2 = document.getElementById("btnAbrir2");
  const btnCerrar2 = document.getElementById("btnCerrar2");
  const ventanaFlotante = document.getElementById("miVentanaFlotante2");

  // Función para abrir la ventana flotante
  btnAbrir2.addEventListener("click", function () {
    ventanaFlotante.style.display = "block";
  });

  // Función para cerrar la ventana flotante
  btnCerrar2.addEventListener("click", function () {
    ventanaFlotante.style.display = "none";
  });


  cargarPeliculas();

});

var cargarPeliculas = function(){
  var http = new XMLHttpRequest();
  var url = "http://localhost:3000/movies/all"

  http.open("GET", url);

  http.send();

  http.onreadystatechange = function(){
    if(this.status == 200){
      mostrarPeliculas(this.response)
    }
  }
}

var mostrarPeliculas = function (peliculas){
  var dom ='';
  for(var i = 0; i < peliculas.length; i++){
    dom += generarPeliculaDom(peliculas[i]);
  }

  document.getElementById('peliculas').innerHTML = dom;

}


var generarPeliculaDom = function(pelicula){
 return" <div class='card'><div class='front'><img class='carta' src='"+ pelicula.imagen +"'></div>" +
                  '<div class="back">'+
                    '<h1>'+ pelicula.nombre +'</h1>'+
                    '<p>Duración: '+ pelicula.duracion +'</p>'+
                    '<p>Genero: '+ pelicula.genero +'</p>'+
                    '<p>'+ pelicula.resumen +'</p>'+
                   '<h3>'+ pelicula.publico +'</h3>'+
                '  </div>"';
}

/*
document.addEventListener("DOMContentLoaded", function () {
  const btnAbrir3 = document.getElementById("btnAbrir3");
  const btnCerrar3 = document.getElementById("btnCerrar3");
  const ventanaFlotante = document.getElementById("miVentanaFlotante3");

  // Función para abrir la ventana flotante
  btnAbrir3.addEventListener("click", function () {
    ventanaFlotante.style.display = "block";
  });

  // Función para cerrar la ventana flotante
  btnCerrar3.addEventListener("click", function () {
    ventanaFlotante.style.display = "none";
  });
});
*/
