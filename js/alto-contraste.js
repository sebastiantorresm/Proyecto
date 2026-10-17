
const botonContraste = document.getElementById("boton-contraste");

botonContraste.addEventListener("click", function () {
    document.body.classList.toggle("alto-contraste");

    const activo = document.body.classList.contains("alto-contraste");

    botonContraste.setAttribute("aria-pressed", activo);

    botonContraste.setAttribute(
        "aria-label",
        activo ? "Desactivar alto contraste" : "Activar alto contraste"
    );

    botonContraste.textContent = activo
        ? "Contraste normal"
        : "Alto contraste";
});
