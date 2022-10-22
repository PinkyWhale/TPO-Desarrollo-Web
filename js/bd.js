//const animalContainer = document.querySelector(".animal-container");
const nombreAnimal = document.getElementById("h1-id");
const latinAnimal = document.getElementById("h4-id")
const ubicacionAnimal = document.getElementById("ubicacion-id");
const imagenAnimal = document.getElementById("img-id")


let url = "https://zoo-animal-api.herokuapp.com/animals/rand"
fetch(url)
    .then(response => response.json())//pedido de respuesta a json
    .then(data => mostrarData(data)) //capturando la informacion
    .catch(error => console.log(error)) //capturando posibles errores

function mostrarData(data){
    nombreAnimal.innerHTML = data.name;
    latinAnimal.innerHTML = "(" + data.latin_name + ")"
    ubicacionAnimal.innerHTML = "Ubicacion: "+ data.geo_range;
    imagenAnimal.src = data.image_link;



    /*
    const h3 = document.createElement('h3');
    h3.textContent = data.name;
    
    const img = document.createElement('img');
    img.src = data.image_link;

    const div = document.createElement('div');
    div.appendChild(h3);
    div.appendChild(img);

    animalContainer.appendChild(div);
    */
}