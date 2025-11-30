// assets/js/menu.js

document.addEventListener("DOMContentLoaded", function () {
  // Encontrar el item de menú con dropdown (Terapias)
  const dropdown = document.querySelector(".nav-item.dropdown");
  if (!dropdown) return; // por si alguna página no tiene el header

  const trigger = dropdown.querySelector(".nav-link");
  const menu = dropdown.querySelector(".dropdown-menu");

  if (!trigger || !menu) return;

  // 🚧 Si main.js ya marcó este botón, no duplicamos lógica aquí
  if (trigger.dataset.usingMainDropdown === "true") {
    return;
  }

  // Abrir / cerrar al hacer clic en "Terapias"
  trigger.addEventListener("click", function (event) {
    event.preventDefault();               // evita que se comporte como link
    dropdown.classList.toggle("open");    // activa la clase que muestra el menú
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });
});
