import { proyectos } from "./ProyectosList.js";

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("proyectos-container");
  proyectos.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.md = p.archivo;
//     card.innerHTML = `
//   <article class="exp-card-base p-6 mb-6" role="article" aria-label="${p.titulo}">
//     <div class="text-xs text-gray-500 font-extralight">${p.id}</div>
//     <h3 class="text-xl font-medium text-gray-800 mt-1">${p.titulo}</h3>
//     <p class="text-sm text-gray-700 mt-2">${p.descripcion}</p>
//   </article>
// `;

card.innerHTML = `
 <section class="grid grid-cols-1 md:grid-cols-2 gap-6  px-6 py-6 max-w-7xl mx-auto role="article" aria-label="${p.titulo}">
            
            <div class="flex flex-col gap-2">                                                             
              <h3 class="text-lg font-semibold">${p.titulo}</h3>
              <a href="${p.link}" class="hover:text-blue-700 text-sm font-medium text-gray-700">(link)</a>
              <img class="border-2 border-gray-200 w-[100px] h-[100px] md:w-[130px] md:h-[130px] rounded-full mx-[0.5rem]" draggable="false" loading="lazy" src="${p.photo}" alt="project icon">
            </div>

            <!-- Columna 2: Descripción -->
            <div>
              <p class="text-sm font-base leading-relaxed text-gray-800">
               ${p.descripcion}
              </p>
            </div>

           


          </section>

`;
    contenedor.appendChild(card);
  });
});
