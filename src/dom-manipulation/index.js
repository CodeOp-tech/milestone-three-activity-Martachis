/*
 * Usa todo lo que has aprendido para manipular el DOM usando sólo JavaScript
 * para completar las preguntas debajo cuando hagas "submit" en el formulario:
 * 1. Cambia el estilo del elemento <body> para que todo el texto tenga una font-family: "Verdana, sans-serif".
 * 2. Asegúrate que todos los elementos <span> muestren el contenido que has introducido en los inputs.
 * 3. Haz un loop que cambie la clase de cada <li> a "list-item"
 * 5. Crea un nuevo elemento <img>, haz que el atributo src sea una imagen tuya y añádelo a la parte superior
 * de la sección "Sobre mi". Si necesitas añadir algún elemento adicional al index.html, puedes hacerlo,
 * pero crédito extra si lo logras sin añadir elementos adicionales.
 * 5. Bonus - Modifica y añade estilo al layout para que tu página "Sobre mi" tenga una aspecto más pulido.
 */

const bodyEl = document.querySelector("body");
bodyEl.style.fontFamily = "Verdana, sans-serif";

const imgEl = document.createElement("img");
imgEl.src = "../Assets/Marta_Noa.JPG";
imgEl.style.width = "300px";
imgEl.style.height = "auto";
imgEl.classList.add("img-Noa-Marta");
const divImg = document.getElementById("img-cabecera");
divImg.appendChild(imgEl);

function handleSubmit(event) {
  event.preventDefault();

  alert("Submit!");

  const inputRestaurant = document.getElementById("restaurantsInput");
  const spanRestaurant = document.getElementById("restaurant");
  spanRestaurant.textContent = inputRestaurant.value;

  const inputNeighborhood = document.getElementById("neighborhoodInput");
  const spanNeighborhood = document.getElementById("neighborhood");
  spanNeighborhood.textContent = inputNeighborhood.value;

  const inputHometown = document.getElementById("hometownInput");
  const spanHometown = document.getElementById("hometown");
  spanHometown.textContent = inputHometown.value;

  const liEls = document.querySelectorAll("li");
  for (let i = 0; i < liEls.length; i++) {
    liEls[i].classList.add("list-item");
  }

  form.reset();
}

let form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
