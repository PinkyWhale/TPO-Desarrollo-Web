const nombreAnimal = document.getElementById("h1-id");
const latinAnimal = document.getElementById("h4-id")
const ubicacionAnimal = document.getElementById("ubicacion-id");
const imagenAnimal = document.getElementById("img-id");
const tipoAnimal = document.getElementById("animaltipo-id");
const habitatAnimal = document.getElementById("habitat-id");

let url = "https://zoo-animal-api.herokuapp.com/animals/rand"
fetch(url)
    .then(response => response.json())//pedido de respuesta a json
    .then(data => mostrarData(data)) //capturando la informacion
    .catch(error => console.log(error)) //capturando posibles errores

function mostrarData(data){
    imagenAnimal.src = data.image_link;
    nombreAnimal.innerHTML = data.name;
    latinAnimal.innerHTML = "(" + data.latin_name + ")";
    tipoAnimal.innerHTML = data.animal_type;
    ubicacionAnimal.innerHTML = "<strong>Ubicación:</strong> "+ data.geo_range;
    habitatAnimal.innerHTML = "<strong>Habitat:</strong> "+ data.habitat;
}