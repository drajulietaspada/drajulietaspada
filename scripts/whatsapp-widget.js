const WHATSAPP_NUMBER = "5491135116233";

const buildWhatsAppUrl = (message) => {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
};

const closeIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
  </svg>
`;

const arrowIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m8 5 7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

const calendarIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="4" y="5.5" width="16" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <path d="M8 3.5v4M16 3.5v4M4 9.5h16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
`;

const styles = `
  .spada-whatsapp {
    position: fixed;
    right: clamp(1rem, 2vw, 1.75rem);
    bottom: clamp(1rem, 2vw, 1.75rem);
    z-index: 1200;
    font-family: var(--font-body, "Montserrat", sans-serif);
  }

  .spada-whatsapp__launcher {
    width: 64px;
    height: 64px;
    display: grid;
    place-items: center;
    padding: 0;
    overflow: hidden;
    border: 0;
    border-radius: 50%;
    background: #25d366;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18);
    cursor: pointer;
    transition: transform 180ms ease, box-shadow 180ms ease;
  }

  .spada-whatsapp__launcher:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.22);
  }

  .spada-whatsapp__launcher-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
  }

  .spada-whatsapp__launcher:focus-visible,
  .spada-whatsapp__close:focus-visible,
  .spada-whatsapp__option:focus-visible,
  .spada-whatsapp__send:focus-visible,
  .spada-whatsapp__input:focus-visible {
    outline: 2px solid var(--accent, #cc9110);
    outline-offset: 3px;
  }

  .spada-whatsapp__panel {
    position: absolute;
    right: 0;
    bottom: 78px;
    width: min(380px, calc(100vw - 2rem));
    overflow: hidden;
    border: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
    border-radius: 22px;
    background: var(--surface, #fff);
    color: var(--ink, #111);
    box-shadow: var(--shadow-panel, 0 24px 60px rgba(8, 8, 8, 0.18));
    transform-origin: bottom right;
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
  }

  .spada-whatsapp__panel[hidden] {
    display: block;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(12px) scale(0.98);
  }

  .spada-whatsapp__header {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1rem 1rem 0.95rem;
    background: var(--surface, #fff);
    border-bottom: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
  }

  .spada-whatsapp__logo {
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    object-fit: contain;
    border-radius: 50%;
    background: var(--surface-alt, #f8f4f1);
    border: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
    padding: 0.2rem;
  }

  .spada-whatsapp__identity {
    min-width: 0;
    flex: 1;
  }

  .spada-whatsapp__identity strong {
    display: block;
    font-size: 0.94rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .spada-whatsapp__identity span {
    display: block;
    margin-top: 0.15rem;
    color: var(--ink-muted, #756f6f);
    font-size: 0.76rem;
  }

  .spada-whatsapp__close {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: transparent;
    color: var(--ink-soft, #4d4747);
    cursor: pointer;
  }

  .spada-whatsapp__close:hover {
    background: var(--surface-alt, #f8f4f1);
  }

  .spada-whatsapp__close svg {
    width: 22px;
    height: 22px;
  }

  .spada-whatsapp__body {
    padding: 1.1rem;
    background:
      radial-gradient(circle at 20% 0%, rgba(var(--accent-rgb, 204, 145, 16), 0.07), transparent 45%),
      var(--bg-strong, #f3efea);
  }

  .spada-whatsapp__message {
    width: fit-content;
    max-width: 88%;
    margin: 0 0 1rem;
    padding: 0.9rem 1rem;
    border-radius: 16px 16px 16px 5px;
    background: var(--surface, #fff);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.07);
    font-size: 0.95rem;
    line-height: 1.45;
  }

  .spada-whatsapp__options {
    display: grid;
    gap: 0.65rem;
  }

  .spada-whatsapp__option {
    display: grid;
    grid-template-columns: 28px 1fr 22px;
    align-items: center;
    gap: 0.7rem;
    width: 100%;
    min-height: 54px;
    padding: 0.75rem 0.85rem;
    border: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
    border-radius: 15px;
    background: rgba(255, 255, 255, 0.94);
    color: var(--ink, #111);
    text-align: left;
    text-decoration: none;
    font-size: 0.86rem;
    font-weight: 500;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.045);
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .spada-whatsapp__option:hover {
    transform: translateY(-1px);
    border-color: rgba(var(--accent-rgb, 204, 145, 16), 0.35);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.07);
  }

  .spada-whatsapp__option-icon,
  .spada-whatsapp__option-arrow {
    display: grid;
    place-items: center;
  }

  .spada-whatsapp__option-icon svg {
    width: 22px;
    height: 22px;
  }

  .spada-whatsapp__option-arrow {
    color: var(--ink-muted, #756f6f);
  }

  .spada-whatsapp__option-arrow svg {
    width: 18px;
    height: 18px;
  }

  .spada-whatsapp__composer {
    display: grid;
    grid-template-columns: 1fr 42px;
    gap: 0.55rem;
    padding: 0.85rem;
    background: var(--surface, #fff);
    border-top: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
  }

  .spada-whatsapp__input {
    width: 100%;
    min-width: 0;
    height: 42px;
    border: 1px solid var(--line-soft, rgba(17, 17, 17, 0.1));
    border-radius: 999px;
    background: var(--surface, #fff);
    color: var(--ink, #111);
    font: inherit;
    font-size: 0.82rem;
    padding: 0 0.95rem;
  }

  .spada-whatsapp__input::placeholder {
    color: var(--ink-muted, #756f6f);
  }

  .spada-whatsapp__send {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border: 0;
    border-radius: 50%;
    background: var(--ink, #111);
    color: #fff;
    cursor: pointer;
    transition: transform 160ms ease, background 160ms ease;
  }

  .spada-whatsapp__send:hover {
    transform: translateX(1px);
    background: var(--accent-strong, #a8740b);
  }

  .spada-whatsapp__send svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 719px) {
    .spada-whatsapp {
      right: 0.75rem;
      bottom: 0.75rem;
    }

    .spada-whatsapp__launcher {
      width: 58px;
      height: 58px;
    }

    .spada-whatsapp__panel {
      right: 0;
      bottom: 70px;
      width: min(390px, calc(100vw - 1.5rem));
      max-height: calc(100vh - 6rem);
      border-radius: 20px;
    }

    .spada-whatsapp__body {
      padding: 0.9rem;
    }

    .spada-whatsapp__message {
      max-width: 94%;
      font-size: 0.9rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .spada-whatsapp__launcher,
    .spada-whatsapp__panel,
    .spada-whatsapp__option,
    .spada-whatsapp__send {
      transition: none;
    }
  }
`;

function mountWhatsAppWidget() {
  if (document.querySelector("[data-spada-whatsapp]")) return;

  const style = document.createElement("style");
  style.dataset.spadaWhatsappStyles = "";
  style.textContent = styles;
  document.head.appendChild(style);

  const widget = document.createElement("aside");
  widget.className = "spada-whatsapp";
  widget.dataset.spadaWhatsapp = "";
  widget.innerHTML = `
    <section class="spada-whatsapp__panel" data-whatsapp-panel hidden aria-label="Chat de WhatsApp">
      <header class="spada-whatsapp__header">
        <img class="spada-whatsapp__logo" src="images/image.png" alt="" />
        <div class="spada-whatsapp__identity">
          <strong>Spada Dermatología &amp; Estética</strong>
          <span>WhatsApp</span>
        </div>
        <button class="spada-whatsapp__close" type="button" data-whatsapp-close aria-label="Cerrar chat">
          ${closeIcon}
        </button>
      </header>

      <div class="spada-whatsapp__body">
        <p class="spada-whatsapp__message">Hola 👋 ¿En qué podemos ayudarte?</p>
        <div class="spada-whatsapp__options">
          <a
            class="spada-whatsapp__option"
            href="${buildWhatsAppUrl("Quiero agendar una consulta")}"
            target="_blank"
            rel="noreferrer"
          >
            <span class="spada-whatsapp__option-icon">${calendarIcon}</span>
            <span>Quiero agendar una consulta</span>
            <span class="spada-whatsapp__option-arrow">${arrowIcon}</span>
          </a>
        </div>
      </div>

      <form class="spada-whatsapp__composer" data-whatsapp-form>
        <input
          class="spada-whatsapp__input"
          type="text"
          name="message"
          autocomplete="off"
          placeholder="Escribí tu mensaje..."
          aria-label="Mensaje para WhatsApp"
        />
        <button class="spada-whatsapp__send" type="submit" aria-label="Enviar por WhatsApp">
          ${arrowIcon}
        </button>
      </form>
    </section>

    <button
      class="spada-whatsapp__launcher"
      type="button"
      data-whatsapp-launcher
      aria-label="Abrir chat de WhatsApp"
      aria-expanded="false"
    >
      <img
        class="spada-whatsapp__launcher-image"
        src="images/whatsapp%20icon.png"
        alt=""
        aria-hidden="true"
      />
    </button>
  `;

  document.body.appendChild(widget);

  const panel = widget.querySelector("[data-whatsapp-panel]");
  const launcher = widget.querySelector("[data-whatsapp-launcher]");
  const closeButton = widget.querySelector("[data-whatsapp-close]");
  const form = widget.querySelector("[data-whatsapp-form]");
  const input = form.querySelector("input[name='message']");

  const setOpen = (open) => {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    launcher.setAttribute("aria-label", open ? "Cerrar chat de WhatsApp" : "Abrir chat de WhatsApp");

    if (open) {
      window.setTimeout(() => input.focus({ preventScroll: true }), 40);
    }
  };

  launcher.addEventListener("click", () => {
    setOpen(panel.hidden);
  });

  closeButton.addEventListener("click", () => setOpen(false));

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const message = input.value.trim();
    if (!message) {
      input.focus();
      return;
    }
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !panel.hidden) {
      setOpen(false);
      launcher.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!panel.hidden && !widget.contains(event.target)) {
      setOpen(false);
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountWhatsAppWidget, { once: true });
} else {
  mountWhatsAppWidget();
}
