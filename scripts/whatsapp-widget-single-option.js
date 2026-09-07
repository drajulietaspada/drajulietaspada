import "./whatsapp-widget.js";

function keepOnlyBookingPreset() {
  document.querySelectorAll(".spada-whatsapp__option").forEach((option) => {
    if (!option.textContent.includes("Quiero agendar una consulta")) {
      option.remove();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", keepOnlyBookingPreset, { once: true });
} else {
  keepOnlyBookingPreset();
}
