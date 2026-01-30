// ===============================
// ANDRA NAIS – JS SIMPLE
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = document.createElement("a");
  whatsapp.href = "https://wa.me/573142525205";
  whatsapp.className = "whatsapp-float";
  whatsapp.innerHTML = "💬";
  whatsapp.target = "_blank";
  whatsapp.title = "Agenda tu cita por WhatsApp";
  document.body.appendChild(whatsapp);
});

// Scroll suave (si luego usas anclas)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
