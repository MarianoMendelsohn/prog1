window.addEventListener('load', function () {
    // peliculas 
    let esteId = new URLSearchParams(location.search);
    let idGet = esteId.get(`id`)
    let tipoGet = esteId.get(`tipo`)
    console.log(idGet)
    let urlDeGenerosPeliculas = `https://api.themoviedb.org/3/genre/${idGet}?api_key=5879ede367a1cc1dbb7ecaf35f419c29`; 
    let tituloGenero = document.querySelector(`.titulo-fav`)
    let listaDePelis = document.querySelector(`.ul-detail2`)
    let urlGeneroP = `https://api.themoviedb.org/3/movie/${tipoGet}?api_key=5879ede367a1cc1dbb7ecaf35f419c29` 




    fetch(urlDeGenerosPeliculas)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            tituloGenero.innerHTML= ` ${data.name}
             `
             

            console.log(data)


        })
        .catch()

   if(tipoGet='movie'){
fetch (urlGeneroP)
    .then(function(respuesta){
        return respuesta.json()
    })
    .then(function(data){
        console.log(data);
    })
    .catch()
}
   else{

   }




})




























