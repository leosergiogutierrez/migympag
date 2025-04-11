document.addEventListener("DOMContentLoaded", () => {
  // Lógica del formulario de contacto
  const form = document.getElementById("contact-form");
  const spinner = document.getElementById("spinner");
  const modal = document.getElementById("modal");
  const cerrarModal = document.getElementById("cerrar-modal");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Formulario enviado");
      spinner.style.display = "block";

      setTimeout(() => {
        spinner.style.display = "none";
        modal.classList.add("mostrar");
        form.reset();
      }, 5000);
    });

    cerrarModal.addEventListener("click", () => {
      modal.classList.remove("mostrar");
    });
  }

  // Lógica del toggle de precios
  const toggle = document.getElementById("toggle-precios");
  const precios = document.querySelectorAll(".precio");

  if (toggle) {
    toggle.addEventListener("change", () => {
      precios.forEach(precio => {
        const valor = toggle.checked
          ? precio.getAttribute("data-anual")
          : precio.getAttribute("data-mensual");
        precio.textContent = `$${valor}`;
      });
    });
  }
});

//  ¿Por qué así? Uso if (form) y if (toggle) para asegurarme de que solo se ejecute esa parte si el elemento existe en la página (así el script no rompe si no estás en contactos.html o precios.html). Todo está dentro de un solo DOMContentLoaded para evitar conflictos//