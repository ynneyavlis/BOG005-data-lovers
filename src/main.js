import data from "./data/ghibli/ghibli.js";
console.log(data.films);

//responsive
let menu = document.getElementsByClassName("menu")[0];
menu.classList.add("hideMenu");

let estado = true;
function visible() {
  if (estado) {
    menu.classList.remove("hideMenu");
    estado = false;
  } else {
    menu.classList.add("hideMenu");
    estado = true;
  }
}

document.getElementById("searchIcon2").addEventListener("click", visible);

// data

data.films;
let output = "";
for (let i = 0; i < data.films.length; i++) {
  output =
    output +
    `<div class="movie">
          <figure>
            <img
              alt="Portada de ${data.films[i].title}"
              class="movieImg"
              src="${data.films[i].poster}"/>
          </figure>
          <span class="titleMovie">${data.films[i].title}</span>
          <span class="fecha">${data.films[i].release_date}</span>
          </div>`;
}

document.getElementById("movieContainer__2").innerHTML = output;

data.films.people;
let SalidaFicha = "";
for (let i = 0; i < data.films.people.length; i++) {
  SalidaFicha =
    SalidaFicha +
    `<div class="people">
          <figure>
            <img
              alt="personaje ${data.films.people[i].people}"
              class="peopleImg"
              src="${data.films.people[i].img}"/>
          </figure>
          <span class="peoplesky">${data.films.people[i].peoplesky}</span>
          <span class="Gender">${data.films.people[i].Gender}</span>
          <span class="age">${data.films.people[i].age}</span>
          <span class="eye_color">${data.films.people[i].eye_color}</span>
          <span class="hair_color">${data.films.people[i].hair_color}</span>
          <span class="specie">${data.films.peoples[i].specie}</span>        
        </div>
     `;
}
document.getElementById("peoples").innerHTML = SalidaFicha;
