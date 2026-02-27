// ===============================
// ANDREA NAILS – JS GENERAL (FINAL PRO)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     CONFIGURACIÓN GLOBAL
     =============================== */

  const telefono = "573142525205";
  const mensaje =
    "Hola Andrea Nails 😊\n" +
    "Quiero agendar una cita 💅";

  const whatsappURL =
    `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

  /* ===============================
     WHATSAPP FLOTANTE
     =============================== */

  const whatsapp = document.createElement("a");
  whatsapp.href = whatsappURL;
  whatsapp.className = "whatsapp-float";
  whatsapp.innerHTML = "💬";
  whatsapp.target = "_blank";
  whatsapp.rel = "noopener";
  whatsapp.title = "Agenda tu cita por WhatsApp";
  document.body.appendChild(whatsapp);

  /* ===============================
     BOTONES WHATSAPP EN LA WEB
     (usar class="btn-whatsapp")
     =============================== */

  document.querySelectorAll(".btn-whatsapp").forEach(btn => {
    btn.href = whatsappURL;
    btn.target = "_blank";
    btn.rel = "noopener";
  });

  /* ===============================
     MENU HAMBURGUESA
     =============================== */

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic (móvil)
    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("active");
      });
    });
  }

});

/* ===============================
   SCROLL SUAVE (ANCLAS SEGURAS)
   =============================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }

  });
});