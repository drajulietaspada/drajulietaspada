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

const facetiteCases = makeCases("facetite", "FaceTite", [
  "Caso facetite rojas1.png",
  "Caso facetite rojas2.png"
]);

const homeCases = [
  ...facetiteCases,
  ...makeCases("blend-de-ojeras", "Blend de ojeras", [
    "Caso blend de ojeras drzeuko.png",
    "caso blend de ojeras analuz.png",
    "caso blend de ojeras bruschini.png",
    "caso blend de ojeras loewel.png",
    "caso blend de ojeras luli.png"
  ]),
  ...makeCases("tarsopexia", "Tarsopexia", [
    "caso tarsopexia quimica.png",
    "caso tarsopexia quimica (2).png",
    "caso tarsopexia quimica (3).png",
    "caso tarsopexia quimica jenaro.png",
    "caso tarsopexia quimica perez.png",
    "caso tarsopexia quimica steinhauser.png",
    "caso tarsopexia quimica ure.png"
  ]),
  ...makeCases("morpheus-8", "Morpheus 8", [
    "Caso Morpheus 8.png",
    "caso morpheus 8 campos.png",
    "caso morpheus churin.png"
  ]),
  ...makeCases("ultherapy-prime", "Ultherapy Prime", [
    "Caso ultherapy anusic.png",
    "caso ultherapy Boutto.png",
    "caso ultherapy hombre.png",
    "caso ultherapy loewel.png",
    "caso ultherapy.png",
    "caso up orteu.png",
    "caso up orteu (2).png",
    "caso up orteu (3).png",
    "caso up rodillas spada.png"
  ])
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

function getHomeItems() {
  const pinned = facetiteCases[0];
  const rest = homeCases.filter((item) => item.file !== pinned.file);
  return [pinned, ...shuffle(rest)];
}

function createHomeCarousel() {
  const items = getHomeItems();
  if (!items.length) return null;

  const first = items[0];
  const section = document.createElement("section");
  section.className = "section spada-case-section spada-case-section--home";
  section.dataset.spadaCaseSection = "";

  section.innerHTML = `
    <div class="shell shell--wide">
      <div class="section-heading spada-case-heading" data-animate>
        <div>
          <h2>Nuestros casos clínicos</h2>
        </div>
      </div>
      <div class="spada-case-shell">
        <div class="spada-case-carousel" data-spada-case-carousel aria-label="Casos clínicos" tabindex="0">
          <button
            class="spada-case-arrow spada-case-arrow--prev"
            type="button"
            data-spada-case-prev
            aria-label="Ver caso anterior"
          >
            ${chevronLeft}
          </button>

          <div class="spada-case-stage" data-spada-case-stage>
            <button
              class="spada-case-media spada-case-media--link"
              type="button"
              data-spada-case-media
              aria-label="Ver tratamiento ${first.treatment}"
            >
              <span class="spada-case-visual">
                <img
                  class="spada-case-image"
                  data-spada-case-image
                  src="${assetPath(first.file)}"
                  alt="Caso clínico de ${first.treatment}"
                  loading="eager"
                  decoding="async"
                />
                <span class="spada-case-caption" aria-hidden="true">
                  <span class="spada-case-caption__title" data-spada-case-title>${first.treatment}</span>
                  <span class="spada-case-caption__cta">
                    Ver tratamiento
                    <span class="spada-case-caption__arrow">${chevronRight}</span>
                  </span>
                </span>
              </span>
            </button>
          </div>

          <button
            class="spada-case-arrow spada-case-arrow--next"
            type="button"
            data-spada-case-next
            aria-label="Ver siguiente caso"
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
  const title = section.querySelector("[data-spada-case-title]");
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
    const probe = new Image();
    probe.decoding = "async";
    probe.src = assetPath(items[targetIndex].file);
  };

  const scheduleAutoplay = () => {
    clearAutoplay();

    if (items.length < 2 || reducedMotion.matches || document.hidden) return;

    preload((currentIndex + 1) % items.length);
    autoplayTimer = window.setTimeout(() => {
      goTo(currentIndex + 1);
    }, AUTOPLAY_DELAY);
  };

  const syncContent = () => {
    const item = items[currentIndex];
    media?.setAttribute("aria-label", `Ver tratamiento ${item.treatment}`);
    if (title) title.textContent = item.treatment;
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
      syncContent();

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

  media?.addEventListener("click", () => {
    if (suppressMediaClick) {
      suppressMediaClick = false;
      return;
    }

    const item = items[currentIndex];
    window.location.href = `tratamiento.html?slug=${encodeURIComponent(item.slug)}`;
  });

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
    suppressMediaClick = true;
    goTo(currentIndex + (distance > 0 ? -1 : 1));
  });

  stage?.addEventListener("pointercancel", () => {
    pointerStartX = null;
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearAutoplay();
    else scheduleAutoplay();
  });

  reducedMotion.addEventListener?.("change", scheduleAutoplay);
  preload(1);
  scheduleAutoplay();

  return section;
}

function mountHome(attempt = 0) {
  const app = document.getElementById("app");

  if (!app) {
    if (attempt < 120) window.requestAnimationFrame(() => mountHome(attempt + 1));
    return;
  }

  if (app.querySelector("[data-spada-case-section]")) return;

  const treatmentsCta = app.querySelector(".home-treatments-cta");
  const treatmentsSection = treatmentsCta?.closest("section");

  if (!treatmentsSection) {
    if (attempt < 120) window.requestAnimationFrame(() => mountHome(attempt + 1));
    return;
  }

  app.querySelector(".home-before-after")?.remove();

  const carousel = createHomeCarousel();
  if (!carousel) return;

  treatmentsSection.insertAdjacentElement("afterend", carousel);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => mountHome(), { once: true });
} else {
  mountHome();
}
