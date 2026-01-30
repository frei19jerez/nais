// ===============================
// ANDRA NAIS – JS GENERAL
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     WHATSAPP FLOTANTE
     =============================== */

  const mensajeWhatsapp =
    "Hola 👋 Bienvenido a Andra Nais 💅%0AQuiero agendar una cita";

  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/573142525205?text=" + encodeURIComponent(
    "Hola 👋 Bienvenido a Andra Nais 💅\nQuiero agendar una cita"
  );
  whatsapp.className = "whatsapp-float";
  whatsapp.innerHTML = "💬";
  whatsapp.target = "_blank";
  whatsapp.title = "Agenda tu cita por WhatsApp";
  document.body.appendChild(whatsapp);

  /* ===============================
     MENU HAMBURGUESA
     =============================== */

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace (móvil)
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

});

/* ===============================
   SCROLL SUAVE (ANCLAS)
   =============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
