document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll sidebar
  document.querySelectorAll("nav a[href^='#']").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({ 
          behavior: "smooth",
          block: "start" 
        });
      }
    });
  });
});
