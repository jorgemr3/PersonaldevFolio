import { Proyecto } from "/src/model/Proyecto.js";

export const proyectos = [
  new Proyecto(
    "01",
    "XpressRQ",
    "XpressRQ es la aplicación principal, enfocada en generación de requisiciones de material en formato PDF para su pronto envió via email, mantiene un diseño limpio y cómodo para su uso rápido y eficaz en casos en los que sus usuarios no cuenten con la infraestructura adecuada para generar una requisicion en forma, dándoles la opción de generarla ellos mismos desde cualquier lugar y momento.",
    "asdas"

  ),
  new Proyecto(
    "02",
    "AdminRQ",
    "AdminRQ es una aplicación web, exclusiva para el apoyo de XpressRQ, se tiene pensada para poder actualizar el inventario en caliente y poder consultarla del lado del cliente de manera instantánea, desarrollada en Flutter, permite mantener el inventario siempre actualizado y también el registrar usuarios nuevos de manera rápida usando Firebase como backend."
  ),
  new Proyecto(
    "03",
    "Intrack",
    "Intrack es una app móvil diseñada para ayudar a negocios pequeños a gestionar sus ventas e inventario de manera rápida y sencilla. Ideal para eventos con mucho movimiento, como mercadillos o tiendas pop-up, te permite registrar ventas, mantener tu catálogo actualizado y obtener un resumen inmediato de ingresos."
  ),
];

// instancias de proyectos 
