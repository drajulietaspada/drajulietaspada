import { getTreatmentCategories, navigation, siteConfig } from "./site-data.js";

const icons = {
  menu: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/>
    </svg>
  `,
  search: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/>
      <path d="m16 16 4 4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.8 4.5c.4-.4 1-.6 1.6-.5l2 .4c.8.2 1.3.8 1.3 1.6v1.6c0 .5-.2 1-.6 1.4l-1.3 1.3a14 14 0 0 0 4.5 4.5l1.3-1.3c.4-.4.9-.6 1.4-.6H19c.8 0 1.4.5 1.6 1.3l.4 2c.1.6-.1 1.2-.5 1.6l-1 1c-.8.8-2 1.2-3.1 1-3-.5-5.8-2-8.2-4.5C5.8 12.9 4.3 10 3.8 7c-.2-1.1.2-2.3 1-3.1l1-1Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"/>
    </svg>
  `,
  pin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.7 6-11a6 6 0 1 0-12 0c0 5.3 6 11 6 11Z" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16v10H4z" fill="none" stroke="currentColor" stroke-width="1.6"/>
      <path d="m4 8 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6"/>
    </svg>
  `,
  arrow: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9 6 6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  chevronLeft: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m14.5 5.5-6 6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  chevronRight: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.5 5.5 6 6-6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>
    </svg>
  `,
  close: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/>
    </svg>
  `
};

const contactConcernOptions = [
  "Rostro",
  "Frente",
  "Ojeras",
  "Párpados",
  "Labios",
  "Papada",
  "Cuello",
  "Escote",
  "Manos",
  "Abdomen",
  "Piernas",
  "Otros"
];

const googleMapsLink = "https://maps.app.goo.gl/byQnsHB4kRLvxqi28";
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.contact.address)}&z=16&output=embed`;

export function escapeHtml(value = "") {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderBrandMark(inverse = false) {
  if (!inverse) {
    return `
      <a class="brand-mark brand-mark--image" href="index.html" aria-label="${siteConfig.brand.title}">
        <img class="brand-mark__image" src="images/imagecortada.png" alt="" loading="eager" decoding="async" />
      </a>
    `;
  }

  return `
    <a class="brand-mark brand-mark--inverse" href="index.html" aria-label="${siteConfig.brand.title}">
      <span class="brand-mark__title">${siteConfig.brand.title}</span>
      <span class="brand-mark__subtitle">${siteConfig.brand.subtitle}</span>
    </a>
  `;
}

function buildTreatmentCategoryHref(category) {
  if (!category || category === "Todos") {
    return "tratamientos.html#listado";
  }

  const params = new URLSearchParams();
  params.set("category", category);
  return `tratamientos.html?${params.toString()}#listado`;
}

export function renderHeader(currentPage) {
  const treatmentCategories = getTreatmentCategories().filter((category) => category !== "Todos");
  const links = navigation
    .map((item) => {
      if (item.page === "tratamientos") {
        const activeClass = currentPage === item.page ? " nav-link--active" : "";
        const categoryLinks = treatmentCategories
          .map(
            (category) => `
              <a class="submenu-link" href="${buildTreatmentCategoryHref(category)}">
                ${escapeHtml(category)}
              </a>
            `
          )
          .join("");

        return `
          <div class="nav-item nav-item--has-submenu" data-submenu-item>
            <button class="nav-link nav-link--button${activeClass}" type="button" data-submenu-toggle aria-expanded="false" aria-controls="desktop-treatments-submenu">
              ${item.label}
            </button>
            <div class="nav-submenu" id="desktop-treatments-submenu" aria-label="Categorías de tratamientos">
              <a class="submenu-link submenu-link--overview" href="${buildTreatmentCategoryHref("Todos")}">Ver todos</a>
              ${categoryLinks}
            </div>
          </div>
        `;
      }

      const activeClass = currentPage === item.page ? " nav-link--active" : "";
      return `<a class="nav-link${activeClass}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  const mobileLinks = navigation
    .map((item) => {
      if (item.page === "tratamientos") {
        const categoryLinks = treatmentCategories
          .map(
            (category) => `
              <a class="mobile-submenu__link" href="${buildTreatmentCategoryHref(category)}">${escapeHtml(category)}</a>
            `
          )
          .join("");

        return `
          <div class="mobile-submenu">
            <button
              class="nav-link nav-link--button${currentPage === item.page ? " nav-link--active" : ""}"
              type="button"
              data-mobile-submenu-toggle
              aria-expanded="false"
              aria-controls="mobile-treatments-submenu"
            >
              ${item.label}
            </button>
            <div class="mobile-submenu__links" id="mobile-treatments-submenu" hidden>
              <a class="mobile-submenu__link mobile-submenu__link--overview" href="${buildTreatmentCategoryHref("Todos")}">Ver todos</a>
              ${categoryLinks}
            </div>
          </div>
        `;
      }

      const activeClass = currentPage === item.page ? " nav-link--active" : "";
      return `<a class="nav-link${activeClass}" href="${item.href}">${item.label}</a>`;
    })
    .join("");

  return `
    <header class="site-header">
      <div class="shell shell--header">
        <div class="site-header__bar">
          ${renderBrandMark()}
          <nav class="site-nav site-nav--desktop" aria-label="Principal">
            ${links}
          </nav>
          <div class="site-header__actions">
            <form class="header-search header-search--desktop" data-search-form>
              <span class="icon-chip icon-chip--static" aria-hidden="true">${icons.search}</span>
              <input class="header-search__input" type="search" name="q" placeholder="Buscar tratamientos" autocomplete="off" />
            </form>
            <button class="icon-chip site-header__menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu" aria-label="Abrir menú">
              ${icons.menu}
            </button>
          </div>
        </div>
        <div class="mobile-menu" id="mobile-menu" data-mobile-menu hidden>
          <nav class="mobile-menu__panel" aria-label="Menú móvil">
            ${mobileLinks}
          </nav>
        </div>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const footerLinks = navigation
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <footer class="site-footer">
      <div class="shell site-footer__inner">
        <div class="site-footer__brand">
          ${renderBrandMark(true)}
          <p class="site-footer__copy">Tratamientos dermatológicos estéticos con enfoque médico y resultados naturales, indicados tras evaluación.</p>
        </div>
        <div class="site-footer__grid">
          <div class="site-footer__column">
            <p class="site-footer__title">Menú</p>
            <nav class="site-footer__links" aria-label="Footer">
              ${footerLinks}
            </nav>
          </div>
          <div class="site-footer__column site-footer__column--wide">
            <p class="site-footer__title">Sede principal</p>
            <p class="site-footer__text">${siteConfig.contact.address}</p>
            <p class="site-footer__title site-footer__title--sub">Contacto</p>
            <div class="site-footer__contact">
              <a href="${buildWhatsAppLink(siteConfig.contact.bookingWhatsApp, "Hola, quiero agendar una consulta.")}" target="_blank" rel="noreferrer">WhatsApp</a>
              <span>Correo</span>
              <a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a>
            </div>
          </div>
          <div class="site-footer__column">
            <p class="site-footer__title">Redes</p>
            <div class="site-footer__links">
              <a href="https://www.instagram.com/dra_julieta_spada/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61588488404844" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.tiktok.com/@dra.julietaspada" target="_blank" rel="noreferrer">TikTok</a>
            </div>
          </div>
        </div>
        <div class="site-footer__legal">
          <p>Política de privacidad <span>|</span> Términos y condiciones</p>
          <p>&copy; 2026 SPADA Dermatología &amp; Estética</p>
          <p>Los tratamientos son indicados luego de evaluación médica personalizada.</p>
        </div>
      </div>
    </footer>
  `;
}

export function renderButton(label, href, variant = "primary") {
  const safeLabel = escapeHtml(label);
  const className = variant === "secondary" ? "button button--secondary" : "button";

  if (href) {
    return `<a class="${className}" href="${href}">${safeLabel}</a>`;
  }

  return `<button class="${className}" type="button">${safeLabel}</button>`;
}

function renderContactMapCard() {
  return `
    <article class="contact-map" data-animate>
      <div class="contact-map__header">
        <p class="section-heading__eyebrow">Ubicación</p>
        <h2>Visitá el consultorio</h2>
        <p class="contact-map__address">${escapeHtml(siteConfig.contact.address)}</p>
      </div>
      <div class="contact-map__frame">
        <iframe
          src="${googleMapsEmbedUrl}"
          title="Mapa del consultorio"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          allowfullscreen
        ></iframe>
      </div>
      <a class="button button--secondary contact-map__button" href="${googleMapsLink}" target="_blank" rel="noreferrer">Abrir en Google Maps</a>
    </article>
  `;
}

function renderConcernSelect() {
  return `
    <div class="field field--survey form-select-field" data-form-select>
      <span>¿Qué te gustaría consultar?</span>
      <input type="hidden" name="concern" />
      <button
        class="form-select__trigger"
        type="button"
        data-form-select-trigger
        aria-expanded="false"
        aria-controls="contact-concern-options"
      >
        <span class="form-select__label" data-form-select-label>Seleccioná una opción</span>
      </button>
      <div class="form-select__menu" id="contact-concern-options" data-form-select-menu hidden>
        ${contactConcernOptions
          .map(
            (option) => `
              <button class="submenu-link form-select__option" type="button" data-form-select-option value="${escapeHtml(option)}">
                ${escapeHtml(option)}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderShowcaseCard(item, isActive = false) {
  return `
    <article class="showcase-card${isActive ? " showcase-card--active" : ""}" data-animate>
      <div class="showcase-card__media">
        <span class="showcase-card__index">${escapeHtml(item.label)}</span>
      </div>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(item.text)}</p>
    </article>
  `;
}

export function renderEntityCard(item, type = "treatment", featured = false) {
  const href = type === "article" ? `articulo.html?slug=${item.slug}` : `tratamiento.html?slug=${item.slug}`;
  const badge = item.badge ? `<span class="entity-card__badge">${escapeHtml(item.badge)}</span>` : "";
  const category = item.category ? `<p class="entity-card__eyebrow">${escapeHtml(item.category)}</p>` : "";

  return `
    <article class="entity-card${featured ? " entity-card--featured" : ""}" data-animate>
      <a class="entity-card__link" href="${href}">
        <div class="entity-card__media">
          <div class="entity-card__art">
            <span>${escapeHtml(type === "article" ? "ART" : "TRAT")}</span>
          </div>
        </div>
        <div class="entity-card__body">
          ${badge}
          ${category}
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.excerpt)}</p>
          <span class="entity-card__cta">Ver detalle ${icons.arrow}</span>
        </div>
      </a>
    </article>
  `;
}

export function renderTreatmentListCard(item, featured = false) {
  const hasImage = Boolean(item.image);
  const imageStyle = item.imagePosition
    ? ` style="object-position: ${escapeHtml(item.imagePosition)};"`
    : "";
  const category = item.category && !hasImage ? `<p class="treatment-list-card__eyebrow">${escapeHtml(item.category)}</p>` : "";
  const media = hasImage
    ? `<div class="treatment-list-card__media" aria-hidden="true">
        <img class="treatment-list-card__image" src="${escapeHtml(item.image)}" alt="" loading="lazy" decoding="async"${imageStyle} />
      </div>`
    : "";

  return `
    <article class="treatment-list-card${featured ? " treatment-list-card--featured" : ""}${hasImage ? " treatment-list-card--with-image" : ""}" data-animate>
      <a class="treatment-list-card__link" href="tratamiento.html?slug=${item.slug}">
        ${media}
        <div class="treatment-list-card__body${hasImage ? " treatment-list-card__body--image" : ""}">
          ${category}
          <h3>${escapeHtml(item.title)}</h3>
          <span class="treatment-list-card__cta">Saber más ${icons.arrow}</span>
        </div>
      </a>
    </article>
  `;
}

export function renderEditorialCard(item, variant = "default") {
  const compactClass = variant === "compact" ? " editorial-card--compact" : "";
  const eyebrow = item.category ? escapeHtml(item.category) : "PubMed";
  const href = item.externalUrl ? escapeHtml(item.externalUrl) : `articulo.html?slug=${escapeHtml(item.slug)}`;
  const targetAttrs = item.externalUrl ? ' target="_blank" rel="noreferrer"' : "";

  return `
    <article class="editorial-card${compactClass}" data-animate>
      <a class="editorial-card__link" href="${href}"${targetAttrs}>
        <div class="editorial-card__body">
          <div class="editorial-card__meta">
            <p class="editorial-card__eyebrow">${eyebrow}</p>
            <p class="editorial-card__type">Artículo científico</p>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="editorial-card__support">Disponible en PubMed</p>
        </div>
      </a>
    </article>
  `;
}

export function renderScientificSupport(articles = []) {
  if (!articles.length) {
    return "";
  }

  return `
    <section class="shell section" data-animate>
      <div class="section-heading">
        <div>
          <p class="section-heading__eyebrow">Literatura científica</p>
          <h2>Respaldo científico</h2>
        </div>
      </div>
      <div class="editorial-grid editorial-grid--compact">
        ${articles.map((article) => renderEditorialCard(article, "compact")).join("")}
      </div>
    </section>
  `;
}

export function renderDetailHero(item, type = "treatment") {
  const buttonLabel = type === "article" ? "Hablar por WhatsApp" : "Agendar una consulta";
  const intent = type === "article" ? "contacto.html?intent=commercial" : `contacto.html?intent=booking&topic=${item.slug}`;
  const safeExcerpt = escapeHtml(item.excerpt);

  if (type === "treatment") {
    const [purposeText, indicationText] = item.details;
    const consultationNote = "Si no sabés qué tratamiento es el indicado, podemos orientarte durante la consulta de evaluación.";
    const categoryLabel = item.category || "Tratamiento";
    const imageStyle = item.imagePosition
      ? ` style="object-position: ${escapeHtml(item.imagePosition)};"`
      : "";
    const media = item.image
      ? `
        <figure class="detail-hero__editorial-media">
          <img
            class="detail-hero__editorial-image"
            src="${escapeHtml(item.image)}"
            alt="${escapeHtml(item.title)}"
            loading="eager"
            decoding="async"${imageStyle}
          />
        </figure>
      `
      : "";
    const featureBlock = media
      ? `
        <div class="detail-hero__editorial-feature">
          ${media}
          <section class="detail-hero__feature-card">
            <p class="detail-hero__feature-eyebrow">¿Qué es?</p>
            <p class="detail-hero__feature-text">${escapeHtml(item.excerpt)}</p>
          </section>
        </div>
      `
      : `
        <section class="detail-hero__feature-card detail-hero__feature-card--standalone">
          <p class="detail-hero__feature-eyebrow">¿Qué es?</p>
          <p class="detail-hero__feature-text">${escapeHtml(item.excerpt)}</p>
        </section>
      `;
    const editorialClass = media ? "detail-hero__editorial detail-hero__editorial--with-media" : "detail-hero__editorial";
    const sections = [
      { title: "Para qué sirve", text: purposeText || item.excerpt },
      { title: "Indicaciones", text: indicationText || purposeText || item.excerpt }
    ];

    return `
      <section class="detail-hero detail-hero--treatment" data-animate>
        <div class="detail-hero__body detail-hero__body--treatment">
          <div class="${editorialClass}">
            ${featureBlock}
            <div class="detail-hero__editorial-copy">
            ${sections
              .map(
                (section, index) => `
                  <section class="detail-hero__editorial-section${index === 0 ? " detail-hero__editorial-section--lead" : ""}">
                    <span class="detail-hero__section-index" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>
                    <div class="detail-hero__section-content">
                      <h2 class="detail-hero__section-title detail-hero__section-title--treatment">${escapeHtml(section.title)}</h2>
                      <p class="detail-hero__section-text detail-hero__section-text--treatment">${escapeHtml(section.text)}</p>
                    </div>
                  </section>
                `
              )
              .join("")}
              <aside class="detail-hero__consultation">
                <p class="detail-hero__consultation-note">${escapeHtml(consultationNote)}</p>
                <div class="detail-hero__cta-row">
                  ${renderButton(buttonLabel, intent)}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <section class="detail-hero" data-animate>
      <div class="detail-hero__media">
        <div class="detail-hero__art">
          <span>${escapeHtml(type === "article" ? "ARTICULO" : item.category || "SPADA")}</span>
        </div>
        <div class="detail-hero__overlay">
          <p>${safeExcerpt}</p>
          ${renderButton(buttonLabel, intent)}
        </div>
      </div>
      <div class="detail-hero__body">
        ${item.details.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </div>
    </section>
  `;
}

export function renderBeforeAfterCarousel(item) {
  const cases = Array.isArray(item.beforeAfterCases) ? item.beforeAfterCases : [];

  if (!cases.length) {
    return "";
  }

  const hasMultipleCases = cases.length > 1;
  const slides = cases
    .map(
      (entry, index) => `
        <figure
          class="before-after-carousel__slide${index === 0 ? " is-active" : index === 1 ? " is-next" : " is-hidden"}"
          data-before-after-slide
          aria-hidden="${index === 0 ? "false" : "true"}"
        >
          <button
            class="before-after-carousel__zoom"
            type="button"
            data-before-after-open
            data-before-after-image="${escapeHtml(entry.image)}"
            data-before-after-alt="${escapeHtml(entry.alt)}"
            aria-label="Ampliar imagen del caso"
            ${index === 0 ? "" : 'tabindex="-1"'}
          >
            <img
              class="before-after-carousel__image"
              src="${escapeHtml(entry.image)}"
              alt="${escapeHtml(entry.alt)}"
              loading="lazy"
              decoding="async"
            />
          </button>
        </figure>
      `
    )
    .join("");

  return `
    <section class="before-after-block" data-animate>
      <div
        class="before-after-carousel${hasMultipleCases ? "" : " before-after-carousel--single"}"
        data-before-after-carousel
        ${hasMultipleCases ? 'tabindex="0"' : ""}
      >
        <div class="before-after-carousel__stage">
          ${slides}
        </div>
        <button
          class="before-after-carousel__button before-after-carousel__button--prev"
          type="button"
          aria-label="Ver caso anterior"
          data-before-after-action="prev"
          ${hasMultipleCases ? "" : "hidden"}
        >
          ${icons.chevronLeft}
        </button>
        <button
          class="before-after-carousel__button before-after-carousel__button--next"
          type="button"
          aria-label="Ver siguiente caso"
          data-before-after-action="next"
          ${hasMultipleCases ? "" : "hidden"}
        >
          ${icons.chevronRight}
        </button>
      </div>
    </section>
  `;
}

let beforeAfterViewerElements = null;

function ensureBeforeAfterViewer() {
  if (beforeAfterViewerElements) {
    return beforeAfterViewerElements;
  }

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <div class="before-after-viewer" data-before-after-viewer hidden aria-hidden="true" role="dialog" aria-modal="true" aria-label="Visualización ampliada del caso">
        <button class="before-after-viewer__close" type="button" data-before-after-viewer-close aria-label="Cerrar visualización ampliada">
          ${icons.close}
        </button>
        <div class="before-after-viewer__frame">
          <img class="before-after-viewer__image" data-before-after-viewer-image alt="" decoding="async" />
        </div>
      </div>
    `
  );

  const root = document.querySelector("[data-before-after-viewer]");
  const image = root?.querySelector("[data-before-after-viewer-image]");
  const closeButton = root?.querySelector("[data-before-after-viewer-close]");
  let lastFocusedElement = null;

  const close = () => {
    if (!root || root.hidden) {
      return;
    }

    root.hidden = true;
    root.setAttribute("aria-hidden", "true");

    if (image) {
      image.removeAttribute("src");
      image.alt = "";
    }

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    lastFocusedElement?.focus?.();
  };

  const open = (src, alt) => {
    if (!root || !image) {
      return;
    }

    lastFocusedElement = document.activeElement;
    image.src = src;
    image.alt = alt || "Caso clínico ampliado";
    root.hidden = false;
    root.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    closeButton?.focus();
  };

  root?.addEventListener("click", (event) => {
    if (event.target === root || event.target.closest("[data-before-after-viewer-close]")) {
      close();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      close();
    }
  });

  beforeAfterViewerElements = { open, close, root, image, closeButton };
  return beforeAfterViewerElements;
}

export function renderHomeBeforeAfterCarousel(items = []) {
  if (!items.length) {
    return "";
  }

  const slides = items
    .map((item, index) => {
      const actionLabel = item.hrefs.length > 1
        ? "Abrir tratamientos relacionados"
        : "Abrir tratamiento relacionado";

      return `
        <div class="home-before-after__slide" data-home-before-after-slide>
          <button
            class="home-before-after__card"
            type="button"
            data-home-before-after-open='${escapeHtml(JSON.stringify(item.hrefs))}'
            aria-label="${escapeHtml(actionLabel)}"
          >
            <img
              class="home-before-after__image"
              src="${escapeHtml(item.image)}"
              alt="${escapeHtml(item.alt || `Caso de antes y después ${index + 1}`)}"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      `;
    })
    .join("");

  return `
    <section class="section home-before-after">
      <div class="shell shell--wide">
        <div class="home-before-after__carousel" data-home-before-after-carousel aria-label="Casos clínicos antes y después">
          <button
            class="before-after-carousel__button before-after-carousel__button--prev home-before-after__button home-before-after__button--prev"
            type="button"
            aria-label="Ver casos anteriores"
            data-home-before-after-action="prev"
          >
            ${icons.chevronLeft}
          </button>
          <div class="home-before-after__viewport">
            <div class="home-before-after__track" data-home-before-after-track>
              ${slides}
            </div>
          </div>
          <button
            class="before-after-carousel__button before-after-carousel__button--next home-before-after__button home-before-after__button--next"
            type="button"
            aria-label="Ver siguientes casos"
            data-home-before-after-action="next"
          >
            ${icons.chevronRight}
          </button>
        </div>
      </div>
    </section>
  `;
}

export function renderContactSection({ compact = false, withMap = false } = {}) {
  const shellClass = compact
    ? "contact-block contact-block--compact"
    : `contact-block contact-block--survey-layout${withMap ? " contact-block--with-map" : ""}`;

  const mapCard = withMap && !compact ? renderContactMapCard() : "";

  if (compact) {
    return `
      <section class="${shellClass}" id="contacto">
        <div class="contact-card" data-animate>
          <div class="section-heading">
            <span class="section-heading__icon">${icons.phone}</span>
            <div>
              <p class="section-heading__eyebrow">Contacto</p>
              <h2>Conversemos por el canal que te resulte más cómodo</h2>
            </div>
          </div>
          <div class="contact-card__info">
            <p><span>${icons.pin}</span>${escapeHtml(siteConfig.contact.address)}</p>
            <p><span>${icons.mail}</span><a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a></p>
          </div>
          <div class="contact-card__actions">
            <a class="button" href="${buildWhatsAppLink(siteConfig.contact.bookingWhatsApp, "Hola, quiero agendar una consulta.")}" target="_blank" rel="noreferrer">Agendar una consulta</a>
            <a class="button button--secondary" href="${buildWhatsAppLink(siteConfig.contact.commercialWhatsApp, "Hola, quiero recibir asesoramiento comercial.")}" target="_blank" rel="noreferrer">Asesoría comercial</a>
          </div>
        </div>
        <form class="contact-form" data-contact-form data-animate>
          <div class="section-heading section-heading--small">
            <div>
              <p class="section-heading__eyebrow">Formulario</p>
              <h2>Deja tu mensaje y lo enviamos a WhatsApp</h2>
            </div>
          </div>
          <div class="form-grid">
            <label class="field">
              <span>Nombre y apellido</span>
              <input type="text" name="name" placeholder="Escribí tu nombre y apellido" required />
            </label>
            <label class="field">
              <span>Documento / DNI / Pasaporte</span>
              <input type="text" name="document" placeholder="Escribí tu documento" required />
            </label>
          </div>
          <fieldset class="field-group">
            <legend>Que accion deseas realizar</legend>
            <label class="choice-pill">
              <input type="radio" name="intent" value="booking" checked />
              <span>Agendar turno</span>
            </label>
            <label class="choice-pill">
              <input type="radio" name="intent" value="commercial" />
              <span>Asesoría comercial</span>
            </label>
          </fieldset>
          <fieldset class="field-group" data-modality-group>
            <legend>Modalidad</legend>
            <label class="choice-inline">
              <input type="radio" name="modality" value="Presencial" checked />
              <span>Presencial</span>
            </label>
            <label class="choice-inline">
              <input type="radio" name="modality" value="Virtual" />
              <span>Virtual</span>
            </label>
          </fieldset>
          <label class="field">
            <span>Disponibilidad</span>
            <textarea name="availability" rows="3" placeholder="Escribí días y horarios de preferencia." required></textarea>
          </label>
          <label class="field">
            <span>Consulta</span>
            <textarea name="message" rows="4" placeholder="Escribí tu consulta." required></textarea>
          </label>
          <input type="hidden" name="topic" />
          <button class="button contact-form__submit" type="submit">Enviar por WhatsApp</button>
          <p class="contact-form__note">Puedes cambiar facilmente los numeros de destino en <code>scripts/site-data.js</code>.</p>
        </form>
      </section>
    `;
  }

  return `
    <section class="${shellClass}" id="contacto">
      <div class="contact-card contact-card--survey" data-animate>
        <div class="contact-card__header">
          <span class="contact-card__headline">${icons.phone} Contacto</span>
        </div>
        <div class="contact-card__info contact-card__info--survey">
          <p><span>${icons.pin}</span><strong>Dirección:</strong></p>
          <p class="contact-card__detail">${escapeHtml(siteConfig.contact.address)}</p>
          <p><span>${icons.phone}</span><strong>Escribinos por WhatsApp</strong></p>
          <a class="button contact-card__button" href="${buildWhatsAppLink(siteConfig.contact.bookingWhatsApp, "Hola, quiero agendar una consulta.")}" target="_blank" rel="noreferrer">WhatsApp</a>
          <p><span>${icons.mail}</span><strong>E-mail:</strong></p>
          <p class="contact-card__detail"><a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a></p>
        </div>
        <p class="contact-card__intro">Contanos qué tratamiento te interesa o qué te gustaría mejorar, y nuestro equipo te orientará según tu caso.</p>
      </div>
      <form class="contact-form contact-form--survey" data-contact-form data-animate>
        <div class="contact-form__panel">
          <p class="contact-form__title">Tus datos para contactarte</p>
          <label class="field field--survey">
            <span>Nombre y Apellido</span>
            <input type="text" name="name" placeholder="Escribí tu nombre y apellido" required />
          </label>
          <label class="field field--survey">
            <span>WhatsApp o medio de contacto</span>
            <input type="text" name="contact" placeholder="Escribí tu número de contacto" required />
          </label>
          ${renderConcernSelect()}
          <label class="field field--survey" data-concern-other hidden>
            <span>Contanos qué te gustaría consultar.</span>
            <textarea name="concern_other" rows="4" placeholder="Escribí tu consulta"></textarea>
          </label>
          <fieldset class="field-group field-group--survey">
            <legend>Día de preferencia (elegí una o más opciones)</legend>
            <div class="survey-check-grid">
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Indistinto" /><span>Indistinto</span></label>
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Lunes" /><span>Lunes</span></label>
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Martes" /><span>Martes</span></label>
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Miércoles" /><span>Miércoles</span></label>
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Jueves" /><span>Jueves</span></label>
              <label class="choice-inline choice-inline--survey"><input type="checkbox" name="preferred_day" value="Viernes" /><span>Viernes</span></label>
            </div>
          </fieldset>
          <p class="contact-form__note contact-form__note--survey">Si no sabés qué tratamiento es el indicado, podemos orientarte durante la consulta de evaluación.</p>
          <p class="contact-form__note contact-form__note--survey">Nuestro equipo revisará tu solicitud y se pondrá en contacto con vos para coordinar la consulta.</p>
          <button class="button contact-form__submit contact-form__submit--survey" type="submit">Enviar</button>
        </div>
        <input type="hidden" name="topic" />
      </form>
      ${mapCard}
    </section>
  `;
}

export function bindHeaderInteractions(currentPage) {
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  const searchForms = document.querySelectorAll("[data-search-form]");
  const desktopSubmenuItems = document.querySelectorAll("[data-submenu-item]");
  const desktopSubmenuToggles = document.querySelectorAll("[data-submenu-toggle]");
  const mobileSubmenuToggles = document.querySelectorAll("[data-mobile-submenu-toggle]");

  const closeDesktopSubmenus = () => {
    desktopSubmenuItems.forEach((item) => item.classList.remove("nav-item--open"));
    desktopSubmenuToggles.forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
  };

  menuToggle?.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;

    if (isOpen) {
      mobileSubmenuToggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });
      document.querySelectorAll(".mobile-submenu__links").forEach((panel) => {
        panel.hidden = true;
      });
    }
  });

  desktopSubmenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", (event) => {
      event.preventDefault();
      const item = toggle.closest("[data-submenu-item]");
      const isOpen = item?.classList.contains("nav-item--open");

      closeDesktopSubmenus();

      if (!isOpen && item) {
        item.classList.add("nav-item--open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });

  mobileSubmenuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const panel = document.getElementById(toggle.getAttribute("aria-controls") || "");
      const isOpen = toggle.getAttribute("aria-expanded") === "true";

      toggle.setAttribute("aria-expanded", String(!isOpen));

      if (panel) {
        panel.hidden = isOpen;
      }
    });
  });

  searchForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const query = String(formData.get("q") || "").trim();
      const target = new URL("tratamientos.html", window.location.href);

      if (query) {
        target.searchParams.set("q", query);
      }

      if (currentPage === "tratamientos" && query) {
        target.hash = "listado";
      }

      window.location.href = target.toString();
    });
  });

  const queryParam = new URLSearchParams(window.location.search).get("q");

  if (queryParam) {
    document.querySelectorAll('.header-search__input').forEach((input) => {
      input.value = queryParam;
    });
  }

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-submenu-item]")) {
      closeDesktopSubmenus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDesktopSubmenus();

      mobileSubmenuToggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
      });
      document.querySelectorAll(".mobile-submenu__links").forEach((panel) => {
        panel.hidden = true;
      });
    }
  });
}

export function bindContactForms() {
  document.querySelectorAll("[data-contact-form]").forEach((form) => {
    const topicField = form.querySelector('input[name="topic"]');
    const concernField = form.querySelector('input[name="concern"]');
    const concernOtherField = form.querySelector("[data-concern-other]");
    const concernOtherInput = form.querySelector('[name="concern_other"]');
    const concernSelect = form.querySelector("[data-form-select]");
    const concernTrigger = form.querySelector("[data-form-select-trigger]");
    const concernLabel = form.querySelector("[data-form-select-label]");
    const concernMenu = form.querySelector("[data-form-select-menu]");
    const concernOptions = form.querySelectorAll("[data-form-select-option]");
    const params = new URLSearchParams(window.location.search);
    const presetTopic = params.get("topic");

    if (presetTopic) {
      topicField.value = presetTopic;
    }

    const syncConcernOther = () => {
      const isOther = concernField?.value === "Otros";

      if (concernOtherField && concernOtherInput) {
        concernOtherField.hidden = !isOther;
        concernOtherInput.required = isOther;

        if (!isOther) {
          concernOtherInput.value = "";
        }
      }
    };

    const closeConcernMenu = () => {
      if (!concernSelect || !concernTrigger || !concernMenu) {
        return;
      }

      concernSelect.classList.remove("form-select-field--open");
      concernTrigger.setAttribute("aria-expanded", "false");
      concernMenu.hidden = true;
    };

    const openConcernMenu = () => {
      if (!concernSelect || !concernTrigger || !concernMenu) {
        return;
      }

      concernSelect.classList.add("form-select-field--open");
      concernTrigger.setAttribute("aria-expanded", "true");
      concernMenu.hidden = false;
    };

    concernTrigger?.addEventListener("click", () => {
      const isOpen = concernTrigger.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeConcernMenu();
      } else {
        openConcernMenu();
      }
    });

    concernOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const nextValue = option.getAttribute("value") || option.textContent?.trim() || "";

        if (concernField) {
          concernField.value = nextValue;
        }

        if (concernLabel) {
          concernLabel.textContent = nextValue;
          concernLabel.dataset.selected = "true";
        }

        syncConcernOther();
        closeConcernMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (concernSelect && !event.target.closest("[data-form-select]")) {
        closeConcernMenu();
      }
    });

    syncConcernOther();

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const contact = String(formData.get("contact") || "").trim();
      const concern = String(formData.get("concern") || "").trim();
      const concernOther = String(formData.get("concern_other") || "").trim();
      const topic = String(formData.get("topic") || "").trim();
      const preferredDays = formData.getAll("preferred_day").map((value) => String(value).trim()).filter(Boolean);
      const destination = siteConfig.contact.bookingWhatsApp;
      const concernText = concern === "Otros" && concernOther ? `Otros - ${concernOther}` : concern;

      if (!name || !contact || !concernText) {
        return;
      }

      const lines = [
        "Hola, me gustaría recibir información desde la web del consultorio.",
        "",
        `Nombre: ${name}`,
        contact ? `Contacto: ${contact}` : "",
        topic ? `Tratamiento de interes: ${topic}` : "",
        concernText ? `¿Qué te gustaría mejorar o consultar?: ${concernText}` : "",
        preferredDays.length ? `Dias de preferencia: ${preferredDays.join(", ")}` : ""
      ].filter(Boolean);

      window.open(buildWhatsAppLink(destination, lines.join("\n")), "_blank", "noopener,noreferrer");
    });
  });
}

export function bindHomeBeforeAfterCarousels() {
  document.querySelectorAll("[data-home-before-after-carousel]").forEach((carousel) => {
    if (carousel.dataset.homeBeforeAfterReady === "true") {
      return;
    }

    const track = carousel.querySelector("[data-home-before-after-track]");
    const prevButton = carousel.querySelector('[data-home-before-after-action="prev"]');
    const nextButton = carousel.querySelector('[data-home-before-after-action="next"]');
    const originalSlides = Array.from(track?.querySelectorAll("[data-home-before-after-slide]") || []);

    if (!track || !originalSlides.length) {
      return;
    }

    carousel.dataset.homeBeforeAfterReady = "true";

    if (originalSlides.length === 1) {
      prevButton?.setAttribute("hidden", "");
      nextButton?.setAttribute("hidden", "");
    }

    const buildClone = (slide) => {
      const clone = slide.cloneNode(true);
      clone.dataset.homeBeforeAfterClone = "true";
      clone.setAttribute("aria-hidden", "true");
      clone.querySelectorAll("button, a").forEach((element) => {
        element.tabIndex = -1;
      });
      return clone;
    };

    const prependFragment = document.createDocumentFragment();
    const appendFragment = document.createDocumentFragment();

    originalSlides.forEach((slide) => {
      prependFragment.appendChild(buildClone(slide));
      appendFragment.appendChild(buildClone(slide));
    });

    track.insertBefore(prependFragment, track.firstChild);
    track.appendChild(appendFragment);

    const originalsCount = originalSlides.length;
    let currentSetSpan = 0;
    let offset = 0;
    let manualShiftRemaining = 0;
    let animationFrameId = 0;
    let lastFrameTime = 0;
    let isFocusPaused = false;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const autoSpeed = 18;

    const getSlideStep = () => {
      const firstSlide = originalSlides[0];
      const trackStyles = window.getComputedStyle(track);
      const gapValue = parseFloat(trackStyles.columnGap || trackStyles.gap || "0");

      if (!firstSlide) {
        return 0;
      }

      return firstSlide.getBoundingClientRect().width + gapValue;
    };

    const getSetSpan = () => getSlideStep() * originalsCount;

    const normalizeOffset = () => {
      if (!currentSetSpan) {
        return;
      }

      while (offset >= currentSetSpan * 2) {
        offset -= currentSetSpan;
      }

      while (offset < currentSetSpan) {
        offset += currentSetSpan;
      }
    };

    const renderTrack = () => {
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;
    };

    const syncMetrics = (preserveProgress = true) => {
      const previousSetSpan = currentSetSpan || getSetSpan();
      const progressWithinSet = preserveProgress && previousSetSpan
        ? (offset - previousSetSpan) / previousSetSpan
        : 0;

      currentSetSpan = getSetSpan();

      if (!currentSetSpan) {
        offset = 0;
        renderTrack();
        return;
      }

      offset = currentSetSpan + (progressWithinSet * currentSetSpan);
      normalizeOffset();
      renderTrack();
    };

    const tick = (timestamp) => {
      if (!lastFrameTime) {
        lastFrameTime = timestamp;
      }

      const deltaTime = Math.min((timestamp - lastFrameTime) / 1000, 0.05);
      lastFrameTime = timestamp;
      let shouldRender = false;

      if (!document.hidden && !isFocusPaused && originalsCount > 1 && !reducedMotionQuery.matches) {
        offset += autoSpeed * deltaTime;
        shouldRender = true;
      }

      if (Math.abs(manualShiftRemaining) > 0.15) {
        const smoothing = 1 - Math.exp(-deltaTime * 10);
        const manualDelta = manualShiftRemaining * smoothing;
        offset += manualDelta;
        manualShiftRemaining -= manualDelta;
        shouldRender = true;
      } else if (manualShiftRemaining !== 0) {
        offset += manualShiftRemaining;
        manualShiftRemaining = 0;
        shouldRender = true;
      }

      if (shouldRender) {
        normalizeOffset();
        renderTrack();
      }

      animationFrameId = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (animationFrameId) {
        return;
      }

      lastFrameTime = 0;
      animationFrameId = window.requestAnimationFrame(tick);
    };

    const move = (direction) => {
      const slideStep = getSlideStep();

      if (!slideStep || originalsCount < 2) {
        return;
      }

      manualShiftRemaining += slideStep * direction;
    };

    const syncOnResize = () => {
      syncMetrics(true);
    };

    prevButton?.addEventListener("click", () => {
      move(-1);
    });

    nextButton?.addEventListener("click", () => {
      move(1);
    });

    carousel.addEventListener("click", (event) => {
      const card = event.target.closest("[data-home-before-after-open]");

      if (!card) {
        return;
      }

      const urls = JSON.parse(card.getAttribute("data-home-before-after-open") || "[]");

      if (!urls.length) {
        return;
      }

      if (urls.length === 1) {
        window.location.href = urls[0];
        return;
      }

      urls.forEach((url) => {
        window.open(url, "_blank", "noopener,noreferrer");
      });
    });

    carousel.addEventListener("focusin", () => {
      if (carousel.contains(document.activeElement)) {
        isFocusPaused = true;
      }
    });

    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) {
        isFocusPaused = false;
      }
    });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        lastFrameTime = 0;
      }
    });

    if ("ResizeObserver" in window) {
      const resizeObserver = new ResizeObserver(() => {
        syncOnResize();
      });

      resizeObserver.observe(carousel);
    } else {
      window.addEventListener("resize", syncOnResize);
    }

    reducedMotionQuery.addEventListener?.("change", () => {
      lastFrameTime = 0;
    });

    syncMetrics(false);
    startLoop();
  });
}

export function bindTreatmentCaseCarousels() {
  document.querySelectorAll("[data-before-after-carousel]").forEach((carousel) => {
    if (carousel.dataset.beforeAfterReady === "true") {
      return;
    }

    const viewer = ensureBeforeAfterViewer();
    const slides = Array.from(carousel.querySelectorAll("[data-before-after-slide]"));
    const prevButton = carousel.querySelector('[data-before-after-action="prev"]');
    const nextButton = carousel.querySelector('[data-before-after-action="next"]');

    if (!slides.length) {
      return;
    }

    carousel.dataset.beforeAfterReady = "true";

    if (slides.length === 1) {
      slides[0].classList.add("is-active");
      slides[0].setAttribute("aria-hidden", "false");
      slides[0].querySelector("[data-before-after-open]")?.setAttribute("tabindex", "0");
      prevButton?.setAttribute("hidden", "");
      nextButton?.setAttribute("hidden", "");
      return;
    }

    let currentIndex = 0;

    const syncSlides = () => {
      const previousIndex = (currentIndex - 1 + slides.length) % slides.length;
      const nextIndex = (currentIndex + 1) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const zoomButton = slide.querySelector("[data-before-after-open]");
        slide.classList.remove("is-active", "is-prev", "is-next", "is-hidden");
        slide.setAttribute("aria-hidden", "true");
        zoomButton?.setAttribute("tabindex", "-1");

        if (slideIndex === currentIndex) {
          slide.classList.add("is-active");
          slide.setAttribute("aria-hidden", "false");
          zoomButton?.setAttribute("tabindex", "0");
          return;
        }

        if (slideIndex === previousIndex) {
          slide.classList.add("is-prev");
          return;
        }

        if (slideIndex === nextIndex) {
          slide.classList.add("is-next");
          return;
        }

        slide.classList.add("is-hidden");
      });
    };

    const move = (direction) => {
      currentIndex = (currentIndex + direction + slides.length) % slides.length;
      syncSlides();
    };

    prevButton?.addEventListener("click", () => move(-1));
    nextButton?.addEventListener("click", () => move(1));

    carousel.addEventListener("click", (event) => {
      const zoomButton = event.target.closest("[data-before-after-open]");

      if (!zoomButton) {
        return;
      }

      viewer.open(
        zoomButton.getAttribute("data-before-after-image") || "",
        zoomButton.getAttribute("data-before-after-alt") || ""
      );
    });

    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    });

    syncSlides();
  });
}

export function buildWhatsAppLink(number, text) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function setupRevealAnimations() {
  const animatedNodes = document.querySelectorAll("[data-animate]");

  if (!("IntersectionObserver" in window)) {
    animatedNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.15
    }
  );

  animatedNodes.forEach((node) => observer.observe(node));
}
