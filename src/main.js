import { example } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/pokemon/pokemon.js";
// import data from './data/rickandmorty/rickandmorty.js';

let menu = document.getElementById("menu");
let estado = false;
function visible() {
  if (estado) {
    menu.classList.remove("showMenu");
    estado = false;
  } else {
    menu.classList.add("showMenu");
    estado = true;
  }
}

document.getElementById("searchIcon2").addEventListener("click", visible);
