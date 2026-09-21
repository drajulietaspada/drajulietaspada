const brandLogos = [
  { file: "logo alma laser.png", alt: "Alma Lasers" },
  { file: "logo beloteroha.png", alt: "Belotero" },
  { file: "logo bodytite.png", alt: "BodyTite" },
  { file: "logo cellbooster.png", alt: "Cellbooster" },
  { file: "logo exilisultra360.png", alt: "Exilis Ultra 360" },
  { file: "logo exosomas.png", alt: "Exosomas" },
  { file: "logo mesoestetic.png", alt: "Mesoestetic" },
  { file: "logo morpheus8.png", alt: "Morpheus8" },
  { file: "logo nctfha135.png", alt: "NCTFHA 135" },
  { file: "logo pbserum.png", alt: "PBSerum" },
  { file: "logo radiesse.png", alt: "Radiesse" },
  { file: "logo sculptra.png", alt: "Sculptra" },
  { file: "logo ultherapyprime.png", alt: "Ultherapy Prime" },
  { file: "logo xeomin.png", alt: "Xeomin" }
];

const assetPath = (file) => encodeURI(`images/${file}`);

function renderLogoSet(copyIndex) {
  return `
    <div class="spada-brand-carousel__set" data-brand-set aria-hidden="${copyIndex === 1 ? "false" : "true"}">
      ${brandLogos
        .map(
          ({ file, alt }) => `
            <div class="spada-brand-carousel__item">
              <img
                class="spada-brand-carousel__logo"
                src="${assetPath(file)}"
                alt="${copyIndex === 1 ? alt : ""}"
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function createBrandCarousel() {
  const section = document.createElement("section");
  section.className = "spada-brand-carousel-section";
  section.dataset.spadaBrandCarouselSection = "";
  section.setAttribute("aria-label", "Marcas con las que trabajamos");

  section.innerHTML = `
    <div class="spada-brand-carousel" data-brand-carousel>
      <div class="spada-brand-carousel__track" data-brand-track>
        ${renderLogoSet(0)}
        ${renderLogoSet(1)}
        ${renderLogoSet(2)}
      </div>
    </div>
  `;

  return section;
}

function bindBrandCarousel(section) {
  const viewport = section.querySelector("[data-brand-carousel]");
  const track = section.querySelector("[data-brand-track]");
  const sets = Array.from(section.querySelectorAll("[data-brand-set]"));

  if (!viewport || !track || sets.length < 3) return;

  let cycleWidth = 0;
  let offset = 0;
  let lastTimestamp = 0;
  let animationFrame = 0;
  let dragging = false;
  let activePointerId = null;
  let lastPointerX = 0;
  let velocity = 0;
  let lastMoveTime = 0;

  const speed = () => (window.innerWidth < 720 ? 25 : 32);

  const measure = () => {
    const first = sets[0].getBoundingClientRect();
    const second = sets[1].getBoundingClientRect();
    cycleWidth = second.left - first.left;

    if (!Number.isFinite(cycleWidth) || cycleWidth <= 0) return;
    if (!offset) offset = -cycleWidth;
    normalizeOffset();
    applyTransform();
  };

  const normalizeOffset = () => {
    if (!cycleWidth) return;

    while (offset <= -2 * cycleWidth) offset += cycleWidth;
    while (offset >= 0) offset -= cycleWidth;
  };

  const applyTransform = () => {
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
  };

  const tick = (timestamp) => {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const deltaSeconds = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
    lastTimestamp = timestamp;

    if (!dragging && cycleWidth) {
      offset -= speed() * deltaSeconds;
      normalizeOffset();
      applyTransform();
    }

    animationFrame = window.requestAnimationFrame(tick);
  };

  const beginDrag = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragging = true;
    activePointerId = event.pointerId;
    lastPointerX = event.clientX;
    lastMoveTime = performance.now();
    velocity = 0;
    viewport.classList.add("is-dragging");
    viewport.setPointerCapture?.(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!dragging || event.pointerId !== activePointerId) return;

    const now = performance.now();
    const deltaX = event.clientX - lastPointerX;
    const deltaTime = Math.max(now - lastMoveTime, 1);

    offset += deltaX;
    velocity = deltaX / deltaTime;
    lastPointerX = event.clientX;
    lastMoveTime = now;

    normalizeOffset();
    applyTransform();
  };

  const endDrag = (event) => {
    if (!dragging || (event?.pointerId != null && event.pointerId !== activePointerId)) return;

    dragging = false;
    viewport.classList.remove("is-dragging");

    if (activePointerId != null) {
      try {
        viewport.releasePointerCapture?.(activePointerId);
      } catch {}
    }

    activePointerId = null;

    if (Math.abs(velocity) > 0.08) {
      offset += velocity * 70;
      normalizeOffset();
      applyTransform();
    }
  };

  viewport.addEventListener("pointerdown", beginDrag);
  viewport.addEventListener("pointermove", moveDrag);
  viewport.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("lostpointercapture", endDrag);
  viewport.addEventListener("dragstart", (event) => event.preventDefault());

  const resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(viewport);
  sets.forEach((set) => resizeObserver.observe(set));

  window.addEventListener("load", measure, { once: true });
  measure();
  animationFrame = window.requestAnimationFrame(tick);

  window.addEventListener(
    "pagehide",
    () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    },
    { once: true }
  );
}

function mountBrandCarousel(attempt = 0) {
  if (document.body.dataset.page !== "home") return;
  if (document.querySelector("[data-spada-brand-carousel-section]")) return;

  const reviewsSection = document.querySelector(".google-reviews-section");

  if (!reviewsSection) {
    if (attempt < 120) {
      window.requestAnimationFrame(() => mountBrandCarousel(attempt + 1));
    }
    return;
  }

  const carousel = createBrandCarousel();
  reviewsSection.insertAdjacentElement("afterend", carousel);
  bindBrandCarousel(carousel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mountBrandCarousel(), { once: true });
} else {
  mountBrandCarousel();
}
