//CLIENTE (VOY PARA EL RESTAURANTE)
//RESTAURANTE=SERVIDOR DE SPOTIFY
let uri="https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?market=us";

let token= "Bearer BQC52fdgdKYKryzd6TiR_-qFwBrMACgBFsiNfQSN6sYGOW8CLArvOerem6WINnHPE9qvhhWJDXUqhyCsTw_Uq7ix8DrmHonOQTSIRPCILW6-bxnX3yBAEwfU0PIt5t0kUpfltKlk8JRvL6WV5HsEuykGaMYuObo";

let parametrosEnvio={
    method:"GET",
    headers:{
        Authorization:token
    }
}

fetch(uri,parametrosEnvio)
.then(function(respuesta){
    return(respuesta.json())
})
.then(function(respuesta){
    console.log(respuesta)
    pintarDatos(respuesta)
    
})
.catch(function(error){
    console.log(error)
})

function pintarDatos(datos){

    let fila=document.getElementById("fila")

    datos.tracks.forEach(function(cancion){
        console.log(cancion.name)
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear un div con js
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo un div que sirve de tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        //creo una img de tarjeta
        let imagen=document.createElement("img")
        imagen.classList.add("card-img-top")
        imagen.src=cancion.album.images[0].url
         
        //creo una etiqueta de audio
        let audio=document.createElement("audio")
        audio.classList.add("w-100")
        audio.classList.add("mt-5")
        audio.setAttribute("controls","controls")
        audio.src=cancion.preview_url
        

    
        //PADRES E HIJOS
        tarjeta.appendChild(imagen)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
        tarjeta.appendChild(audio)
        

    })

}

//text content, h1, 
// generar el token 
