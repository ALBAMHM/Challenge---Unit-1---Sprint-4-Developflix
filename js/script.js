import peliculas from './peliculas.js'
const accion = document.getElementById("genero-28");
const accionPadre = accion.parentNode;
const thriller = document.getElementById("genero-53");
const thrillerPadre = thriller.parentNode;
const aventura = document.getElementById("genero-12");
const aventuraPadre = aventura.parentNode;

function funcionPrueba (idGenero, divGenero){
    let pelis= peliculas.filter((element) => element.genre_ids.includes(idGenero));
    const lista = document.createElement ("ul");
    divGenero.appendChild(lista);
    for (let peli of pelis) {
        let liPeli =document.createElement ("li");
        lista.appendChild(liPeli);
        liPeli.innerHTML= "<img src=\"https://image.tmdb.org/t/p/w500" + peli.poster_path + "\" width=\"135\" height=\"200\">" + "<span class=\"titulo-pelicula\">"+ peli.title + "</span>"
    }
}


accionPadre.addEventListener ("click", function (){
    if (!accion.hasChildNodes()){
        funcionPrueba (28, accion); 
    } else {
        if (accion.style.display=="none"){
            accion.style.display="block";
        }
        else {accion.style.display="none"}; 
    }
});

thrillerPadre.addEventListener ("click", function (){
    if (!thriller.hasChildNodes()){
        funcionPrueba (53, thriller);
    }  else {
        if (thriller.style.display=="none"){
            thriller.style.display="block";
        }
        else {thriller.style.display="none"}; 
    }
});

aventuraPadre.addEventListener ("click", function (){
    if (!aventura.hasChildNodes()){
        funcionPrueba (12, aventura);
    }  else {
        if (aventura.style.display=="none"){
            aventura.style.display="block";
        }
        else {aventura.style.display="none"}; 
    }
});


