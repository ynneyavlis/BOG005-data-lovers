import { searchFilters } from "./data.js";
import data from "./data/ghibli/ghibli.js";
import { GenreFilters } from "./data.js";

// search filter

const searcherInput = document.querySelector(".inputSearch");

searcherInput.addEventListener("keyup", test);

function test() {
  const value = searcherInput.value;
  const filteredData = searchFilters(value);
  console.log(filteredData);
  let output = "";
  for (let i = 0; i < filteredData.length; i++) {
    output =
      output +
      `<div class="movie">
          <figure>
            <img
              alt="Portada de ${filteredData[i].title}"
              class="movieImg"
              src="${filteredData[i].poster}"/>
          </figure>
          <span class="titleMovie">${filteredData[i].title}</span>
          <span class="fecha">${filteredData[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;
}

// Genre filter

const genreDesktop = document.getElementsByClassName("spanGenre");
for (let nodo of genreDesktop) {
  nodo.addEventListener("click", test2);
}

function test2(e) {
  const textGenre = e.target.textContent;
  const filteredData = GenreFilters(textGenre);
  let output = "";
  for (let i = 0; i < filteredData.length; i++) {
    output =
      output +
      `<div class="movie">
          <figure>
            <img
              alt="Portada de ${filteredData[i].title}"
              class="movieImg"
              src="${filteredData[i].poster}"/>
          </figure>
          <span class="titleMovie">${filteredData[i].title}</span>
          <span class="fecha">${filteredData[i].release_date}</span>
          </div>`;
  }
  document.getElementById("movieContainer__2").innerHTML = output;
}
