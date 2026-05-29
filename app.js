import {
  aboutPageContent,
  articles,
  doctorProfile,
  getArticleBySlug,
  getHomeBeforeAfterGalleryItems,
  getFeaturedTreatments,
  getRelatedArticles,
  getRelatedTreatments,
  getTreatmentBySlug,
  getTreatmentCategories,
  heroContent,
  showcaseItems,
  treatments
} from "./site-data.js";
import {
  bindHomeBeforeAfterCarousels,
  bindTreatmentCaseCarousels,
  bindContactForms,
  bindHeaderInteractions,
  escapeHtml,
  renderBeforeAfterCarousel,
  renderButton,
  renderContactSection,
  renderDetailHero,
  renderEditorialCard,
  renderEntityCard,
  renderFooter,
  renderHeader,
  renderHomeBeforeAfterCarousel,
  renderShowcaseCard,
  renderTreatmentListCard,
  setupRevealAnimations
} from "./ui.js";

const heroDoctorImage = "assets/dra-julieta-spada-hero.png";
const aboutPageHeroImage = "images/JAB02698.png";
const homeHeroVideo = "images/videopaginaweb2.mp4";
const heroSecondaryImage = "images/secundaria.png";
const treatmentsPageHeroImageMobile = "images/JAB02417-2.png";
const treatmentsPageHeroImageDesktop = "images/JAB02417.png";
const aboutSectionHref = "acerca.html#acerca";

const page = document.body.dataset.page;
const headerRoot = document.getElementById("site-header");
const appRoot = document.getElementById("app");
const footerRoot = document.getElementById("site-footer");

headerRoot.innerHTML = renderHeader(page);
footerRoot.innerHTML = renderFooter();
bindHeaderInteractions(page);

const renderers = {
  home: renderHomePage,
  tratamientos: renderTreatmentsPage,
  tratamiento: renderTreatmentDetailPage,
  acerca: renderAboutPage,
  articulo: renderArticleDetailPage,
  contacto: renderContactPage
};

(renderers[page] || renderHomePage)();
bindHomeBeforeAfterCarousels();
bindTreatmentCaseCarousels();
bindContactForms();
setupRevealAnimations();

function normalizeSearchValue(value = "") {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function renderHomePage() {
  const homeBeforeAfterGalleryItems = getHomeBeforeAfterGalleryItems();
  const featuredTreatments = getFeaturedTreatments(4);
  const featuredArticles = articles.slice(0, 3);

  appRoot.innerHTML = `
    <section class="hero hero--fullbleed">
      <div class="hero__layout hero__layout--full">
        <div class="hero__panel hero__panel--full" data-animate>
          <div class="hero__art">
            <video
              class="hero__video"
              src="${homeHeroVideo}"
              autoplay
              muted
              loop
              playsinline
              preload="auto"
              poster="${heroSecondaryImage}"
              aria-label="Presentacion de Spada Dermatologia y Estetica"
            >
              <source src="${homeHeroVideo}" type="video/mp4" />
              Tu navegador no puede reproducir este video.
            </video>
          </div>
          <div class="hero__overlay hero__overlay--full hero__overlay--actions-only hero__overlay--video">
          </div>
        </div>
      </div>
    </section>

    <section class="shell section">
      <div class="section-heading" data-animate>
        <div>
          <p class="section-heading__eyebrow">Tratamientos</p>
          <h2>Tratamientos dermatológicos y estéticos</h2>
          <p class="section-heading__description">Conocé una selección de tratamientos faciales y corporales indicados según evaluación médica, anatomía y objetivos de cada paciente.</p>
        </div>
        ${renderButton("Ver más", "tratamientos.html", "secondary")}
      </div>
      <div class="treatment-catalog">
        ${featuredTreatments.map((item, index) => renderTreatmentListCard(item, index === 0)).join("")}
      </div>
    </section>

    ${renderHomeBeforeAfterCarousel(homeBeforeAfterGalleryItems)}

    <section class="section section--home-feature">
      <div class="home-feature-panel" data-animate>
        <div class="home-feature-panel__art">
          <img
            class="home-feature-panel__photo"
            src="images/morpheusup.png"
            alt="Tratamiento dermatológico en consultorio"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>

    <section class="shell section">
      <div class="section-heading" data-animate>
        <div>
          <p class="section-heading__eyebrow">Articulos</p>
          <h2>Artículos de dermatología y estética de la Dra. Julieta Spada</h2>
        </div>
        ${renderButton("Ver más", "acerca.html#acerca", "secondary")}
      </div>
      <div class="editorial-grid editorial-grid--compact">
        ${featuredArticles.map((item) => renderEditorialCard(item, "compact")).join("")}
      </div>
    </section>

    <section class="shell section">
      ${renderContactSection({ withMap: true })}
    </section>
  `;

  const heroVideoElement = appRoot.querySelector(".hero__video");
  if (heroVideoElement) {
    heroVideoElement.defaultMuted = true;
    heroVideoElement.muted = true;

    const playHeroVideo = () => {
      heroVideoElement.play().catch(() => {});
    };

    if (heroVideoElement.readyState >= 2) {
      playHeroVideo();
    } else {
      heroVideoElement.addEventListener("loadeddata", playHeroVideo, { once: true });
    }
  }
}

function renderTreatmentsPage() {
  const params = new URLSearchParams(window.location.search);
  const initialQuery = String(params.get("q") || "").trim();
  const requestedCategory = String(params.get("category") || "").trim();
  const categories = getTreatmentCategories();
  const activeCategoryInitial = categories.includes(requestedCategory) ? requestedCategory : "Todos";
  const heroCategory = activeCategoryInitial !== "Todos"
    ? `<p class="treatments-page__category">${escapeHtml(activeCategoryInitial)}</p>`
    : "";

  appRoot.innerHTML = `
    <section class="section treatments-page">
      <div class="treatments-page__hero">
        <div class="treatments-page__panel" data-animate>
          <picture class="treatments-page__art">
            <source media="(min-width: 720px)" srcset="${treatmentsPageHeroImageDesktop}" />
            <img
              class="treatments-page__photo"
              src="${treatmentsPageHeroImageMobile}"
              alt="Tratamientos dermatológicos y estéticos"
              loading="eager"
              decoding="async"
            />
          </picture>
          <div class="treatments-page__overlay">
            <div class="treatments-page__overlay-copy">
              <h1>Tratamientos</h1>
              ${heroCategory}
            </div>
          </div>
        </div>
      </div>
      <div class="shell shell--wide treatments-page__content">
        <div class="treatment-catalog" id="listado"></div>
        <div class="treatments-cta" data-animate>
          <p class="treatments-cta__note">Si no sabés qué tratamiento es el indicado, podemos orientarte durante la consulta de evaluación.</p>
          <div class="treatments-cta__actions">
            ${renderButton("Agendar turno", "contacto.html?intent=booking")}
          </div>
        </div>
      </div>
    </section>
  `;

  const listingRoot = document.getElementById("listado");
  const searchInputs = document.querySelectorAll(".header-search__input");
  let activeCategory = activeCategoryInitial;
  let activeQuery = initialQuery;

  const syncList = () => {
    const normalizedQuery = normalizeSearchValue(activeQuery);
    const filtered = treatments.filter((item) => {
      const categoriesToMatch = [item.category, ...(item.categoryAliases || [])];
      const matchesCategory = activeCategory === "Todos" || categoriesToMatch.includes(activeCategory);
      const haystack = normalizeSearchValue(`${item.title} ${categoriesToMatch.join(" ")} ${item.excerpt}`);
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    listingRoot.innerHTML = filtered.length
      ? filtered.map((item, index) => renderTreatmentListCard(item, index === 0)).join("")
      : `<div class="empty-state"><h2>No encontramos coincidencias</h2><p>Prueba con otra categoría o revisa todas las opciones.</p></div>`;

    setupRevealAnimations();
  };

  searchInputs.forEach((input) => {
    input.value = activeQuery;

    input.addEventListener("input", (event) => {
      activeQuery = event.target.value.trim();

      const nextUrl = new URL(window.location.href);

      if (activeQuery) {
        nextUrl.searchParams.set("q", activeQuery);
      } else {
        nextUrl.searchParams.delete("q");
      }

      if (activeCategory !== "Todos") {
        nextUrl.searchParams.set("category", activeCategory);
      } else {
        nextUrl.searchParams.delete("category");
      }

      window.history.replaceState({}, "", nextUrl);
      syncList();
    });
  });

  syncList();
}

function renderTreatmentDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const treatment = getTreatmentBySlug(params.get("slug") || "");

  if (!treatment) {
    appRoot.innerHTML = renderMissingState("tratamiento");
    return;
  }

  const related = getRelatedTreatments(treatment.slug, 4);

  appRoot.innerHTML = `
    <section class="section section--detail section--detail-treatment">
      <div class="detail-treatment__intro">
        <div class="detail-header detail-header--treatment" data-animate>
          <p class="detail-header__eyebrow detail-header__eyebrow--treatment">${escapeHtml(treatment.category || "Tratamiento")}</p>
          <h1>${escapeHtml(treatment.title)}</h1>
        </div>
        ${renderDetailHero(treatment, "treatment")}
      </div>
      ${renderBeforeAfterCarousel(treatment)}
      <div class="section-heading" data-animate>
        <div>
          <p class="section-heading__eyebrow">Relacionados</p>
          <h2>Mas tratamientos para explorar</h2>
        </div>
      </div>
      <div class="treatment-catalog">
        ${related.map((item, index) => renderTreatmentListCard(item, index === 0)).join("")}
      </div>
    </section>
  `;
}

function renderAboutPage() {
  const publishedArticles = articles;
  const aboutSections = aboutPageContent.sections
    .map((section) => {
      const intro = section.intro
        ? `<p class="about-page__section-intro">${escapeHtml(section.intro)}</p>`
        : "";
      const paragraphs = (section.paragraphs || [])
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
      const items = section.items
        ? `
          <ul class="about-page__section-list">
            ${section.items
              .map(
                (item) => `
                  <li>
                    <strong>${escapeHtml(item.label)}</strong>
                    <span>${escapeHtml(item.text)}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        `
        : "";

      return `
        <article class="about-page__section" data-animate>
          <h2 class="about-page__section-title">${escapeHtml(section.title)}</h2>
          <div class="about-page__section-body">
            ${intro}
            ${paragraphs}
            ${items}
          </div>
        </article>
      `;
    })
    .join("");

  appRoot.innerHTML = `
    <section class="section about-page" id="acerca">
      <div class="about-page__hero">
        <div class="about-page__panel" data-animate>
          <div class="about-page__art">
            <img
              class="about-page__photo"
              src="${aboutPageHeroImage}"
              alt="Dra. Julieta Spada"
              loading="eager"
              decoding="async"
            />
          </div>
          <div class="about-page__overlay">
            <div class="about-page__overlay-copy">
              <h1>${escapeHtml(aboutPageContent.hero.title)}</h1>
              <p>${escapeHtml(aboutPageContent.hero.text)}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="shell shell--wide about-page__content">
        <div class="about-page__cards">
          <article class="about-page__card" data-animate>
            ${aboutSections}
          </article>
        </div>
      </div>
    </section>

    <section class="shell shell--wide section about-page__publications">
      <div class="about-page__publications-heading" data-animate>
        <p class="about-page__publications-eyebrow">${escapeHtml(aboutPageContent.publications.eyebrow)}</p>
        <h2>${escapeHtml(aboutPageContent.publications.title)}</h2>
      </div>
      <div class="editorial-grid editorial-grid--compact">
        ${publishedArticles.map((item) => renderEditorialCard(item, "compact")).join("")}
      </div>
    </section>
  `;
}

function renderArticleDetailPage() {
  const params = new URLSearchParams(window.location.search);
  const article = getArticleBySlug(params.get("slug") || "");

  if (!article) {
    appRoot.innerHTML = renderMissingState("articulo");
    return;
  }

  const related = getRelatedArticles(article.slug);

  appRoot.innerHTML = `
    <section class="shell section section--detail">
      <div class="detail-header" data-animate>
        <p class="eyebrow">Articulo</p>
        <h1>${escapeHtml(article.title)}</h1>
      </div>
      ${renderDetailHero(article, "article")}
      <div class="section-heading" data-animate>
        <div>
          <p class="section-heading__eyebrow">Mas lectura</p>
          <h2>Otros articulos para continuar recorriendo</h2>
        </div>
      </div>
      <div class="card-grid">
        ${related.map((item) => renderEntityCard(item, "article")).join("")}
      </div>
    </section>
  `;
}

function renderContactPage() {
  appRoot.innerHTML = `
    <section class="shell section">
      ${renderContactSection({ withMap: true })}
    </section>
  `;
}

function renderMissingState(kind) {
  return `
    <section class="shell section">
      <div class="empty-state">
        <h1>No encontramos ese ${escapeHtml(kind)}</h1>
        <p>Revisa el listado principal o vuelve al inicio para seguir navegando.</p>
        <div class="empty-state__actions">
          ${renderButton("Volver al inicio", "index.html")}
          ${renderButton("Ver tratamientos", "tratamientos.html", "secondary")}
        </div>
      </div>
    </section>
  `;
}
