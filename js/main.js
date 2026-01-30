// ===============================
// ANDRA NAIS – JS GENERAL (FINAL)
// ===============================

document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     MENSAJE WHATSAPP GLOBAL
     =============================== */

  const telefono = "573142525205";
  const mensaje =
    "Hola, Andrea Nais 😊\n" +
    "Quisiera agendar una cita 💅";

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
  whatsapp.title = "Agenda tu cita por WhatsApp";
  document.body.appendChild(whatsapp);

  /* ===============================
     BOTONES WHATSAPP EN LA WEB
     (usar class="btn-whatsapp")
     =============================== */

  document.querySelectorAll(".btn-whatsapp").forEach(btn => {
    btn.href = whatsappURL;
    btn.target = "_blank";
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
