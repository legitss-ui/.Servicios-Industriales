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

const track = document.getElementById("sliderTrack");
const dotsContainer = document.getElementById("sliderDots");
const counter = document.getElementById("sliderCounter");
const progressFill = document.getElementById("sliderProgress");

const slides = track.querySelectorAll(".slider__slide");
const total = slides.length;
let current = 0;
let timer;

const INTERVAL = 4000;

console.log(`Carrusel iniciado: ${total} slides encontrados`);

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.classList.add("slider__dot");

  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    goTo(i);
    resetTimer();
  });

  dotsContainer.appendChild(dot);
});

function goTo(n) {
  current = (n + total) % total;

  track.style.transform = `translateX(-${current * 100}%)`;

  document.querySelectorAll(".slider__dot").forEach((d, i) => {
    d.classList.toggle("active", i === current);
  });

  counter.textContent = `${current + 1} / ${total}`;

  progressFill.style.transition = "none";
  progressFill.style.width = "0%";

  setTimeout(() => {
    progressFill.style.transition = `width ${INTERVAL}ms linear`;
    progressFill.style.width = "100%";
  }, 30);
}

function resetTimer() {
  clearInterval(timer);
  startAuto();
}

function startAuto() {
  goTo(current);
  timer = setInterval(() => goTo(current + 1), INTERVAL);
}

document.getElementById("sliderPrev").addEventListener("click", () => {
  goTo(current - 1);
  resetTimer();
});

document.getElementById("sliderNext").addEventListener("click", () => {
  goTo(current + 1);
  resetTimer();
});

startAuto();

function enviarWhatsapp(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;
  const email = document.getElementById("email").value;
  const servicio = document.getElementById("servicio").value;
  const mensaje = document.getElementById("mensaje").value;

  if (
    !nombre.trim() ||
    !telefono.trim() ||
    !email.trim() ||
    !servicio ||
    !mensaje.trim()
  ) {
    alert("Por favor, completa todos los campos");
    return;
  }

  const texto = `Hola, soy ${nombre}.
Teléfono: ${telefono}
Correo: ${email}
Servicio: ${servicio}
Proyecto: ${mensaje}`;

  const url = `https://wa.me/524499061873?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
}



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

