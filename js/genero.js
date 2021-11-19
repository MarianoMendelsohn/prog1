
window.addEventListener('load', function () {
// capturo lo que voy a necesitar para las pelis
let urlDeGenerosPeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=5879ede367a1cc1dbb7ecaf35f419c29`
let LinksDeGeneros = document.querySelector(`.detalles-g`)
let LinkDeGeneros2 = document.querySelector(`.d-generos-series`)
let UrlDeGenerosSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=5879ede367a1cc1dbb7ecaf35f419c29`


//peliculas

fetch(urlDeGenerosPeliculas)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for(let i=0; i<data.genres.length; i++){

        LinksDeGeneros.innerHTML += `
        <article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=${data.genres[i].id}&tipo=movie">${data.genres[i].name}</a> </h3>
</article>

        `  
    }

})

.catch(function(error){
    console.log(`El error fue ` + error)
})  

//series 

fetch(UrlDeGenerosSeries)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    for(let i=0; i<data.genres.length; i++){

        LinkDeGeneros2.innerHTML += `
        <article class="d-generos">
<h3 class="titulo-g"> <a href="detail2-genres.html?id=${data.genres[i].id}&tipo=tv">${data.genres[i].name}</a> </h3>
</article>

        `  
    }

})

.catch(function(error){
    console.log(`El error fue ` + error)
})    

}) // importante no borrar 


