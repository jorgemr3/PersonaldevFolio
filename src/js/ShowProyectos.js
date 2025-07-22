import { proyectos } from "./ProyectosList.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("proyectos-container");
  proyectos.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.md = p.archivo;
    card.innerHTML = `
      <div class="bg-[#e9e3e6] rounded-[8px] shadow-[0_2px_6px_rgba(0,0,0,0.1)] p-[1.5rem] mb-[1.5rem] ">
        <!-- card -->
        <div class="text-xs font-extralight"> ${p.id}</div>
        <div class="text-xs font-extralight"> </div>
        <div class="text-xl font-medium">${p.titulo}</div>
        <div class="text-xs md:text-sm ">${p.descripcion}</div>
      </div>`;
    contenedor.appendChild(card);
  });
});
