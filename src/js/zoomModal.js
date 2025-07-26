document.addEventListener("DOMContentLoaded", () => {

  const photo = document.getElementById("main-photo");
  const modal = document.getElementById("photo-modal");
  const closeBtn = document.getElementById("close-modal");
  const zoomable = document.getElementById("zoomable-photo");

  photo.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    // reset escala al cerrar
    zoomable.classList.replace("scale-150", "scale-100");
    zoomable.classList.replace("cursor-zoom-out", "cursor-zoom-in");
  });

  // Alternar zoom al hacer click en la imagen ampliada
  zoomable.addEventListener("click", () => {
    if (zoomable.classList.contains("scale-100")) {
      zoomable.classList.replace("scale-100", "scale-150");
      zoomable.classList.replace("cursor-zoom-in", "cursor-zoom-out");
    } else {
      zoomable.classList.replace("scale-150", "scale-100");
      zoomable.classList.replace("cursor-zoom-out", "cursor-zoom-in");
    }
  });

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
        // reset zoom
      zoomable.classList.replace("scale-150", "scale-100");
      zoomable.classList.replace("cursor-zoom-out", "cursor-zoom-in");
      
      modal.classList.add("hidden");
      
    }
  });
});
