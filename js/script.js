const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");

// Lista de imágenes temáticas libres (velas, mandalas, tarot)
const images = [
  "https://images.unsplash.com/photo-1611684552998-2b9c3b9c35ab?auto=format&fit=crop&w=1024&q=80", // velas
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1024&q=80", // mandala
  "https://images.unsplash.com/photo-1612627656815-b3a67c3d0a55?auto=format&fit=crop&w=1024&q=80", // tarot
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1024&q=80", // velas 2
  "https://images.unsplash.com/photo-1520986606214-8b456906c813?auto=format&fit=crop&w=1024&q=80"  // mandala 2
];

let current = 0;
let topSlide = slide2;   // slide visible
let bottomSlide = slide1;

function showNextImage() {
  bottomSlide.style.backgroundImage = `url('${images[current]}')`;
  bottomSlide.style.opacity = 1;
  topSlide.style.opacity = 0;

  [topSlide, bottomSlide] = [bottomSlide, topSlide];
  current = (current + 1) % images.length;
}

// Inicializar primera imagen
topSlide.style.backgroundImage = `url('${images[0]}')`;
topSlide.style.opacity = 1;
current = 1;

// Cambiar cada 5 segundos
setInterval(showNextImage, 5000);