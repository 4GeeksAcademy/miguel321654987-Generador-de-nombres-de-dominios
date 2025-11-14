import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let articulo = ["la", "una", "su"];
  let adjetivo = ["gran", "loca"];
  let sustantivo = ["solucion", "respuesta", "idea"];
  let extension = [".com", ".es", ".org"];

  function genDominio() {
    let dominios = [];

    for (let i = 0; i < articulo.length; i++) {
      for (let j = 0; j < adjetivo.length; j++) {
        for (let k = 0; k < sustantivo.length; k++) {
          for (let l = 0; l < extension.length; l++) {
            dominios.push(articulo[i] + adjetivo[j] + sustantivo[k] + extension[l]);
          }
        }
      }
    }
    return dominios;
  }
  console.log(genDominio());
  document.getElementById("dominio").innerText = genDominio().join("\n");
  
}
window.onload()