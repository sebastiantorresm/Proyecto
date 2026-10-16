const pista = document.querySelector(".carrusel-pista");
const botonAnterior = document.querySelector(".carrusel-anterior");
const botonSiguiente = document.querySelector(".carrusel-siguiente");

botonSiguiente.addEventListener("click", () => {
  pista.scrollBy({ left: pista.clientWidth });
});

botonAnterior.addEventListener("click", () => {
  pista.scrollBy({ left: -pista.clientWidth });
});