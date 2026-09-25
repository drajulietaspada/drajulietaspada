const AUTOPLAY_DELAY = 4000;

const chevronLeft = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m14.5 5.5-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
  </svg>
`;

const chevronRight = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9.5 5.5 6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
  </svg>
`;

const makeCases = (slug, treatment, files) => files.map((file) => ({ slug, treatment, file }));

const radiesseNctfhaCases = [
  "Caso  radiesse + ncftha 135 abdala.png",
  "Caso radiesse + ncftha 135 cioccio.png",
  "Caso radiesse + ncftha 135 cioccio 2.png",
  "Caso radiesse + ncftha 135 manos abdala.png",
  "Caso radiesse + ncftha 135 salto.png"
];

const treatmentCases = {
  "ultherapy-prime": makeCases("ultherapy-prime", "Ultherapy Prime", [
    "Caso ultherapy anusic.png",
    "caso ultherapy Boutto.png",
    "caso ultherapy hombre.png",
    "caso ultherapy loewel.png",
    "caso ultherapy.png",
    "caso up orteu.png",
    "caso up orteu (2).png",
    "caso up orteu (3).png",
    "caso up rodillas spada.png"
  ]),
  "morpheus-8": makeCases("morpheus-8", "Morpheus 8", [
    "Caso Morpheus 8.png",
    "caso morpheus 8 campos.png",
    "caso morpheus Boutto.png",
    "caso morpheus churin.png",
    "caso morpheus orteu.png",
    "caso morpheus orteu (2).png",
    "caso morpheus orteu (3).png"
  ]),
  "facetite": makeCases("facetite", "FaceTite", [
    "Caso facetite rojas1.png",
    "Caso facetite rojas2.png"
  ]),
  "harmony-aft-540-950": makeCases("harmony-aft-540-950", "Harmony AFT 540–950", [
    "Caso harmony aft salto.png",
    "caso harmony aft.png",
    "caso harmony aft (2).png",
    "caso harmony aft lujan.png",
    "caso harmony aft lujan (2).png"
  ]),
  "harmony-pixel-erbium": makeCases("harmony-pixel-erbium", "Harmony Pixel Erbium", [
    "caso erbium campos.png",
    "caso erbium campos (2).png"
  ]),
  "blend-de-ojeras": makeCases("blend-de-ojeras", "Blend de ojeras", [
    "Caso blend de ojeras drzeuko.png",
    "caso blend de ojeras analuz.png",
    "caso blend de ojeras bruschini.png",
    "caso blend de ojeras loewel.png",
    "caso blend de ojeras luli.png"
  ]),
  "tarsopexia": makeCases("tarsopexia", "Tarsopexia", [
    "caso tarsopexia quimica.png",
    "caso tarsopexia quimica (2).png",
    "caso tarsopexia quimica (3).png",
    "caso tarsopexia quimica jenaro.png",
    "caso tarsopexia quimica perez.png",
    "caso tarsopexia quimica steinhauser.png",
    "caso tarsopexia quimica ure.png"
  ]),
  "traptox": makeCases("traptox", "Traptox", [
    "Caso traptox bevilaquia.png",
    "Caso traptox bevilaquia 2.png"
  ]),
  "hiperhidrosis": makeCases("hiperhidrosis", "Hiperhidrosis", [
    "Caso hiperhidrosis romero1.png",
    "Caso hiperhidrosis romero2.png"
  ]),
  "hueco-supraorbitario": makeCases("hueco-supraorbitario", "Hueco supraorbitario", [
    "caso hueco supra.png",
    "caso hueco supra alegre.png",
    "caso hueco supra jenaro.png",
    "caso hueco supra perez.png"
  ]),
  "glow-blend": makeCases("glow-blend", "Glow blend", [
    "caso glow blend.png",
    "caso glow blend (2).png"
  ]),
  "radiesse": makeCases("radiesse", "Radiesse", [
    "caso radiesse.png",
    "caso radiesse (2).png",
    "caso radiesse da silva.png"
  ]),
  "radiesse-nctfha-135": makeCases("radiesse-nctfha-135", "Radiesse + NCTFHA 135", radiesseNctfhaCases),
  "nctfha-135": makeCases("nctfha-135", "NCTFHA 135", radiesseNctfhaCases),
  "relleno-de-lobulo-de-oreja": makeCases("relleno-de-lobulo-de-oreja", "Relleno de lóbulo de oreja", [
    "Caso lobulo de la oreja brillantino.png",
    "Caso lobulo de la oreja brillantino2.png",
    "caso lobulo de la oreja riva.png"
  ]),
  "blanching-peribucal": makeCases("blanching-peribucal", "Blanching peribucal", [
    "Caso blanching peribucal adelina.png"
  ]),
  "rinomodelacion": makeCases("rinomodelacion", "Rinomodelación", [
    "Caso rino groisman.png",
    "caso rino.png",
    "caso rino (2).png",
    "caso rino elizabeth.png",
    "caso rino elizabeth 2.png"
  ]),
  "acido-hialuronico-en-labios": makeCases("acido-hialuronico-en-labios", "Ácido hialurónico en labios", [
    "Caso Labios boutto.png",
    "Caso labios2.png",
    "caso labios andrea.png",
    "caso labios1.png"
  ]),
  "surco-nasogeniano": makeCases("surco-nasogeniano", "Surco nasogeniano", [
    "Caso surco nasogeniano.png",
    "caso surco nasogeniano bianccioti.png",
    "caso surco nasogeniano lujan1.png",
    "caso surco nasogeniano sivori.png"
  ]),
  "surco-labiomentoniano": makeCases("surco-labiomentoniano", "Surco labiomentoniano", [
    "Caso Surco labiomentoniano 2.png",
    "Caso surco labiomentoniano bianccioti.png",
    "Caso surco labiomentoniano bianccioti 2.png"
  ]),
  "pbserum-de-primera-y-segunda-generacion": makeCases("pbserum-de-primera-y-segunda-generacion", "PBSerum de primera y segunda generación", [
    "Caso pb serum fernandez.png"
  ]),
  "arrugas-en-el-tercio-superior": makeCases("arrugas-en-el-tercio-superior", "Arrugas en el tercio superior", [
    "Caso tercio superior casal.png",
    "Caso tercio superior dominguez.png",
    "caso tercio superior mazzeo.png",
    "caso tercio superior.png"
  ]),
  "relleno-de-frente": makeCases("relleno-de-frente", "Relleno de frente", [
    "Caso relleno frente casal.png",
    "Caso relleno frente dominguez.png"
  ])
};

const assetPath = (file) => encodeURI(`images/${file}`);

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function createCaseCarousel(sourceItems) {
  const items = shuffle(sourceItems);
  if (!items.length) return null;

  const first = items[0];
  const section = document.createElement("section");
  section.className = "section spada-case-section spada-case-section--treatment";
  section.dataset.spadaCaseSection = "";

  section.innerHTML = `
    <div class="shell shell--wide">
      <div class="spada-case-shell">
        <div class="spada-case-carousel" data-spada-case-carousel aria-label="Casos clínicos" tabindex="0">
          <button class="spada-case-arrow spada-case-arrow--prev" type="button" data-spada-case-prev aria-label="Ver caso anterior" ${items.length > 1 ? "" : "hidden"}>
            ${chevronLeft}
          </button>

          <div class="spada-case-stage" data-spada-case-stage>
            <button
              class="spada-case-media spada-case-media--zoom"
              type="button"
              data-spada-case-media
              data-spada-case-open
              aria-label="Ampliar caso clínico de ${first.treatment}"
            >
              <img
                class="spada-case-image"
                data-spada-case-image
                src="${assetPath(first.file)}"
                alt="Caso clínico de ${first.treatment}"
                loading="eager"
                decoding="async"
                draggable="false"
              />
            </button>
          </div>

          <button class="spada-case-arrow spada-case-arrow--next" type="button" data-spada-case-next aria-label="Ver caso siguiente" ${items.length > 1 ? "" : "hidden"}>
            ${chevronRight}
          </button>
        </div>
      </div>
    </div>
  `;

  const carousel = section.querySelector("[data-spada-case-carousel]");
  const stage = section.querySelector("[data-spada-case-stage]");
  const image = section.querySelector("[data-spada-case-image]");
  const open = section.querySelector("[data-spada-case-open]");
  const prev = section.querySelector("[data-spada-case-prev]");
  const next = section.querySelector("[data-spada-case-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let autoplayTimer = 0;
  let loadFallbackTimer = 0;
  let isTransitioning = false;
  let pointerStartX = null;
  let suppressOpenClick = false;
  let lightbox = null;
  let previousFocus = null;

  const clearAutoplay = () => {
    if (!autoplayTimer) return;
    window.clearTimeout(autoplayTimer);
    autoplayTimer = 0;
  };

  const preload = (targetIndex) => {
    if (items.length < 2) return;
    const probe = new Image();
    probe.decoding = "async";
    probe.src = assetPath(items[targetIndex].file);
  };

  const scheduleAutoplay = () => {
    clearAutoplay();
    if (items.length < 2 || reducedMotion.matches || document.hidden || lightbox) return;

    preload((currentIndex + 1) % items.length);
    autoplayTimer = window.setTimeout(() => goTo(currentIndex + 1), AUTOPLAY_DELAY);
  };

  const goTo = (requestedIndex) => {
    if (items.length < 2 || isTransitioning) return;

    clearAutoplay();
    isTransitioning = true;

    const nextIndex = (requestedIndex + items.length) % items.length;
    const nextItem = items[nextIndex];
    const nextSrc = assetPath(nextItem.file);
    const loader = new Image();
    let imageReady = false;
    let fadeReady = false;
    let committed = false;

    const commit = () => {
      if (committed || !imageReady || !fadeReady) return;

      committed = true;
      window.clearTimeout(loadFallbackTimer);
      currentIndex = nextIndex;
      image.src = nextSrc;
      image.alt = `Caso clínico de ${nextItem.treatment}`;
      open?.setAttribute("aria-label", `Ampliar caso clínico de ${nextItem.treatment}`);

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          stage.classList.remove("is-changing");
          isTransitioning = false;
          preload((currentIndex + 1) % items.length);
          scheduleAutoplay();
        });
      });
    };

    stage.classList.add("is-changing");

    loader.onload = () => {
      imageReady = true;
      commit();
    };
    loader.onerror = () => {
      imageReady = true;
      commit();
    };
    loader.decoding = "async";
    loader.src = nextSrc;

    window.setTimeout(() => {
      fadeReady = true;
      commit();
    }, 220);

    loadFallbackTimer = window.setTimeout(() => {
      imageReady = true;
      commit();
    }, 1400);
  };

  const closeLightbox = () => {
    if (!lightbox) return;

    lightbox.remove();
    lightbox = null;
    document.documentElement.classList.remove("spada-case-lightbox-open");

    if (previousFocus instanceof HTMLElement) {
      previousFocus.focus({ preventScroll: true });
    }

    previousFocus = null;
    scheduleAutoplay();
  };

  const openLightbox = () => {
    if (suppressOpenClick) {
      suppressOpenClick = false;
      return;
    }

    if (lightbox) return;

    clearAutoplay();
    previousFocus = document.activeElement;

    const currentItem = items[currentIndex];
    lightbox = document.createElement("div");
    lightbox.className = "spada-case-lightbox";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", `Caso clínico ampliado de ${currentItem.treatment}`);

    lightbox.innerHTML = `
      <button class="spada-case-lightbox__close" type="button" aria-label="Cerrar imagen ampliada">
        <span aria-hidden="true">×</span>
      </button>
      <div class="spada-case-lightbox__frame">
        <img
          class="spada-case-lightbox__image"
          src="${assetPath(currentItem.file)}"
          alt="Caso clínico ampliado de ${currentItem.treatment}"
          decoding="async"
          draggable="false"
        />
      </div>
    `;

    lightbox.querySelector(".spada-case-lightbox__close")?.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    lightbox.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      }
    });

    document.documentElement.classList.add("spada-case-lightbox-open");
    document.body.appendChild(lightbox);
    lightbox.querySelector(".spada-case-lightbox__close")?.focus({ preventScroll: true });
  };

  open?.addEventListener("click", openLightbox);

    prev?.addEventListener("click", () => goTo(currentIndex - 1));
  next?.addEventListener("click", () => goTo(currentIndex + 1));

  carousel?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  stage?.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      suppressOpenClick = false;
      pointerStartX = event.clientX;
    }
  });

  stage?.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;
    const distance = event.clientX - pointerStartX;
    pointerStartX = null;
    if (Math.abs(distance) < 42) return;

    suppressOpenClick = true;
    goTo(currentIndex + (distance > 0 ? -1 : 1));
  });

  stage?.addEventListener("pointercancel", () => {
    pointerStartX = null;
    suppressOpenClick = false;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearAutoplay();
    else scheduleAutoplay();
  });

  reducedMotion.addEventListener?.("change", scheduleAutoplay);
  preload(items.length > 1 ? 1 : 0);
  scheduleAutoplay();

  return section;
}

function findScientificSupportSection(app) {
  return Array.from(app.querySelectorAll("section")).find((section) => {
    const eyebrow = section.querySelector(":scope > .section-heading .section-heading__eyebrow, :scope > .section-heading__eyebrow");
    return eyebrow?.textContent.trim().toLowerCase() === "literatura científica";
  });
}

function mountTreatment(app) {
  if (app.querySelector("[data-spada-case-section]")) return true;

  const slug = new URLSearchParams(window.location.search).get("slug") || "";
  const cases = treatmentCases[slug];
  if (!cases?.length) return true;

  const detailSection = app.querySelector(".section--detail-treatment");
  const detailIntro = app.querySelector(".detail-treatment__intro");
  if (!detailSection || !detailIntro) return false;

  app.querySelector(".before-after-block")?.remove();

  const carousel = createCaseCarousel(cases);
  if (!carousel) return true;

  const scientificSupport = findScientificSupportSection(app);
  if (scientificSupport?.parentNode === detailSection) {
    scientificSupport.classList.add("spada-scientific-support");
    detailSection.insertBefore(carousel, scientificSupport);
  } else {
    detailIntro.insertAdjacentElement("afterend", carousel);
  }

  detailIntro.classList.add("spada-detail-intro-ordered");
  Array.from(detailSection.children).forEach((child) => {
    if (child !== detailIntro && child !== carousel && child !== scientificSupport) {
      child.classList.add("spada-detail-after-cases");
    }
  });

  return true;
}

function mount(attempt = 0) {
  const app = document.getElementById("app");
  if (!app) {
    if (attempt < 120) window.requestAnimationFrame(() => mount(attempt + 1));
    return;
  }

  const mounted = document.body.dataset.page === "tratamiento" ? mountTreatment(app) : true;
  if (!mounted && attempt < 120) window.requestAnimationFrame(() => mount(attempt + 1));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mount(), { once: true });
} else {
  mount();
}
