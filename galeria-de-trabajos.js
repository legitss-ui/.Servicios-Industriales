const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});

document.querySelectorAll(".header__nav a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("open");
  });
});



// ========== MODAL GALERÍA ==========
const allImages = document.querySelectorAll(".image__src"); // Selecciona todos los elementos con la clase "image__src" que son las imagenes
const modal = document.getElementById("modalGaleria");
// Selecciona el elemento con el ID "modalGaleria" que es el contenedor del modal
const modalImage = document.getElementById("imagenModal");
// Selecciona el elemento con el ID "imagenModal" que es la imagen que se muestra en el modal dentro de el
const closeBtn = document.querySelector(".close-modal-galeria");
// Selecciona el elemento con la clase "close-modal-galeria" que es el botón que cierra el modal

function cerrarModal() {
  modal.style.display = "none";
}

function abrirModal(src) {
  modal.style.display = "block";
  modalImage.src = src;
  // se obtiene la src actualizada para mostrar en el modal onclick="abrirModal(this.src)" es la clave aqui ya que con esto se obtiene la src y en esta funcion la actualizamos
}

allImages.forEach((item) => {
  item.addEventListener("click", () => {
    const img = item.querySelector("img");
    abrirModal(item.src);
  })
});

closeBtn.addEventListener("click", cerrarModal);

modal.addEventListener("click", (e) => {
  if (e.target !== modalImage) {
    cerrarModal();
    // si le das click a la imagen no hace nada si no cierra el modal
  }
});


