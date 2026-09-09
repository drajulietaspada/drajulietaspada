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
  "harmony-aft-540-950": makeCases("harmony-aft-540-950", "Harmony AFT 540–950", [
    "Caso Harmony aft chiovetta.png",
    "Caso harmony aft salto.png",
    "caso harmony aft.png",
    "caso harmony aft (2).png",
    "caso harmony aft lujan.png",
    "caso harmony aft lujan (2).png"
  ]),
  "hueco-supraorbitario": makeCases("hueco-supraorbitario", "Hueco supraorbitario", [
    "caso hueco supra.png",
    "caso hueco supra (2).png",
    "caso hueco supra alegre.png",
    "caso hueco supra jenaro.png",
    "caso hueco supra perez.png"
  ]),
  "glow-blend": makeCases("glow-blend", "Glow blend", [
    "caso glow blend.png",
    "caso glow blend (2).png"
  ]),
  "relleno-de-lobulo-de-oreja": makeCases("relleno-de-lobulo-de-oreja", "Relleno de lóbulo de oreja", [
    "Caso lobulo de la oreja brillantino.png",
    "Caso lobulo de la oreja brillantino2.png",
    "caso lobulo de la oreja riva.png"
  ]),
  "radiesse": makeCases("radiesse", "Radiesse", [
    "caso radiesse.png",
    "caso radiesse (2).png",
    "caso radiesse da silva.png"
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
  "arrugas-en-el-tercio-superior": makeCases("arrugas-en-el-tercio-superior", "Arrugas en el tercio superior", [
    "Caso tercio superior casal.png",
    "Caso tercio superior chiovetta.png",
    "Caso tercio superior dominguez.png",
    "caso tercio superior mazzeo.png",
    "caso tercio superior.png"
  ]),
  "relleno-de-frente": makeCases("relleno-de-frente", "Relleno de frente", [
    "Caso relleno frente casal.png",
    "Caso relleno frente dominguez.png"
  ])
};

const homeCases = [
  ...treatmentCases["blend-de-ojeras"],
  ...treatmentCases["tarsopexia"],
  ...makeCases("morpheus-8", "Morpheus 8", [
    "Caso Morpheus 8.png",
    "caso morpheus 8 campos.png",
    "caso morpheus churin.png"
  ]),
  ...treatmentCases["ultherapy-prime"]
];

const assetPath = (file) => encodeURI(`images/${file}`);

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function createCaseCarousel(sourceItems, { home = false } = {}) {
  const items = shuffle(sourceItems);

  if (!items.length) {
    return null;
  }

  const section = document.createElement("section");
  section.className = `section spada-case-section${home ? " spada-case-section--home" : " spada-case-section--treatment"}`;
  section.dataset.spadaCaseSection = "";

  const first = items[0];
  const heading = home
    ? `
      <div class="section-heading spada-case-heading" data-animate>
        <div>
          <h2>Nuestros casos clínicos</h2>
        </div>
      </div>
    `
    : "";

  const caseMedia = home
    ? `
      <button
        class="spada-case-media spada-case-media--link"
        type="button"
        data-spada-case-media
        aria-label="Ver tratamiento ${first.treatment}"
      >
        <img
          class="spada-case-image"
          data-spada-case-image
          src="${assetPath(first.file)}"
          alt="Caso clínico de ${first.treatment}"
          loading="eager"
          decoding="async"
        />
      </button>
    `
    : `
      <div class="spada-case-media" data-spada-case-media>
        <img
          class="spada-case-image"
          data-spada-case-image
          src="${assetPath(first.file)}"
          alt="Caso clínico de ${first.treatment}"
          loading="eager"
          decoding="async"
        />
      </div>
    `;

  section.innerHTML = `
    <div class="shell shell--wide">
      ${heading}
      <div class="spada-case-shell">
        <div class="spada-case-carousel" data-spada-case-carousel aria-label="Casos clínicos" tabindex="0">
          <button
            class="spada-case-arrow spada-case-arrow--prev"
            type="button"
            data-spada-case-prev
            aria-label="Ver caso anterior"
            ${items.length > 1 ? "" : "hidden"}
          >
            ${chevronLeft}
          </button>

          <div class="spada-case-stage" data-spada-case-stage>
            ${caseMedia}
          </div>

          <button
            class="spada-case-arrow spada-case-arrow--next"
            type="button"
            data-spada-case-next
            aria-label="Ver siguiente caso"
            ${items.length > 1 ? "" : "hidden"}
          >
            ${chevronRight}
          </button>
        </div>
      </div>
    </div>
  `;

  const carousel = section.querySelector("[data-spada-case-carousel]");
  const stage = section.querySelector("[data-spada-case-stage]");
  const media = section.querySelector("[data-spada-case-media]");
  const image = section.querySelector("[data-spada-case-image]");
  const prev = section.querySelector("[data-spada-case-prev]");
  const next = section.querySelector("[data-spada-case-next]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let currentIndex = 0;
  let autoplayTimer = 0;
  let loadFallbackTimer = 0;
  let isTransitioning = false;
  let pointerStartX = null;
  let suppressMediaClick = false;

  const clearAutoplay = () => {
    if (autoplayTimer) {
      window.clearTimeout(autoplayTimer);
      autoplayTimer = 0;
    }
  };

  const preload = (targetIndex) => {
    if (items.length < 2) return;
    const probe = new Image();
    probe.decoding = "async";
    probe.src = assetPath(items[targetIndex].file);
  };

  const scheduleAutoplay = () => {
    clearAutoplay();

    if (items.length < 2 || reducedMotion.matches || document.hidden) {
      return;
    }

    preload((currentIndex + 1) % items.length);
    autoplayTimer = window.setTimeout(() => {
      goTo(currentIndex + 1);
    }, AUTOPLAY_DELAY);
  };

  const syncMediaLabel = () => {
    if (!home || !media) return;
    const item = items[currentIndex];
    media.setAttribute("aria-label", `Ver tratamiento ${item.treatment}`);
  };

  const goTo = (requestedIndex) => {
    if (items.length < 2 || isTransitioning) {
      return;
    }

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
      if (committed || !imageReady || !fadeReady) {
        return;
      }

      committed = true;
      window.clearTimeout(loadFallbackTimer);
      currentIndex = nextIndex;
      image.src = nextSrc;
      image.alt = `Caso clínico de ${nextItem.treatment}`;
      syncMediaLabel();

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

  prev?.addEventListener("click", () => goTo(currentIndex - 1));
  next?.addEventListener("click", () => goTo(currentIndex + 1));

  if (home) {
    media?.addEventListener("click", () => {
      if (suppressMediaClick) {
        suppressMediaClick = false;
        return;
      }

      const item = items[currentIndex];
      window.location.href = `tratamiento.html?slug=${encodeURIComponent(item.slug)}`;
    });
  }

  carousel?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(currentIndex + 1);
    }
  });

  stage?.addEventListener("pointerdown", (event) => {
    if (event.pointerType === "touch" || event.pointerType === "pen") {
      pointerStartX = event.clientX;
    }
  });

  stage?.addEventListener("pointerup", (event) => {
    if (pointerStartX === null) return;

    const distance = event.clientX - pointerStartX;
    pointerStartX = null;

    if (Math.abs(distance) < 42) return;
    if (home) suppressMediaClick = true;
    goTo(currentIndex + (distance > 0 ? -1 : 1));
  });

  stage?.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      clearAutoplay();
    } else {
      scheduleAutoplay();
    }
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

function mountHome(app) {
  if (app.querySelector("[data-spada-case-section]")) return true;

  const treatmentsCta = app.querySelector(".home-treatments-cta");
  const treatmentsSection = treatmentsCta?.closest("section");

  if (!treatmentsSection) return false;

  app.querySelector(".home-before-after")?.remove();

  const carousel = createCaseCarousel(homeCases, { home: true });
  if (!carousel) return true;

  treatmentsSection.insertAdjacentElement("afterend", carousel);
  return true;
}

function mountTreatment(app) {
  if (app.querySelector("[data-spada-case-section]")) return true;

  const slug = new URLSearchParams(window.location.search).get("slug") || "";
  const cases = treatmentCases[slug];

  if (!cases?.length) {
    return true;
  }

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

  const page = document.body.dataset.page;
  const mounted = page === "home"
    ? mountHome(app)
    : page === "tratamiento"
      ? mountTreatment(app)
      : true;

  if (!mounted && attempt < 120) {
    window.requestAnimationFrame(() => mount(attempt + 1));
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mount(), { once: true });
} else {
  mount();
}
