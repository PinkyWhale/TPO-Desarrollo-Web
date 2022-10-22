const animalContainer = document.querySelector(".animal-container");

let url = "https://zoo-animal-api.herokuapp.com/animals/rand"
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

function mostrarData (data){
    const h3 = document.createElement('h3');
    h3.textContent = data.name;
    
    const img = document.createElement('img');
    img.src = data.image_link;

    const div = document.createElement('div');
    div.appendChild(h3);
    div.appendChild(img);

    animalContainer.appendChild(div);
}