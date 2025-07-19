import { proyectos } from "../src/proyectos.js";

document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById("proyectos-container");
  proyectos.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.md = p.archivo;
    card.innerHTML = `
      <div>
        <div class="text-lg">${p.titulo}</div>
        <div class="text-sm ">${p.descripcion}</div>
      </div>`;
    contenedor.appendChild(card);
  });



  
});
