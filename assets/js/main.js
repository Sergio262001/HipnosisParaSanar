document.addEventListener("DOMContentLoaded", () => {
  // Dropdown TERAPIAS
  const dropdown = document.querySelector(".nav-item.dropdown");
  const toggle = dropdown?.querySelector(".nav-link");

  if (dropdown && toggle) {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
      dropdown.classList.remove("open");
    });
  }

  // FAQ: solo uno abierto a la vez
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });
});
