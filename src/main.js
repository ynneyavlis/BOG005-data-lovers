import data from "./data/ghibli/ghibli.js";

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

