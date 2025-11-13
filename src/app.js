import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let articulo = ["la", "una", "su"];
  let adjetivo = ["gran", "mejor", "loca"];
  let sustantivo = ["solucion", "respuesta", "idea"];
  let extension = [".com", ".net", ".es", ".org"];

  function genDomAleatorio() {

    for (let i = 0; i < articulo.length; i++) {
      let art = Math.floor(Math.random() * articulo.length);
      let adj = Math.floor(Math.random() * adjetivo.length);
      let sust = Math.floor(Math.random() * sustantivo.length);
      let ext = Math.floor(Math.random() * extension.length);
      return articulo[art] + adjetivo[adj] + sustantivo[sust] + extension[ext];
    }
  }
  document.getElementById("domAleatorio").innerText = genDomAleatorio()

}
window.onload()