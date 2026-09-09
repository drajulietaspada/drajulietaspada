import { treatments } from "./site-data.js";
import { renderTreatmentListCard, setupRevealAnimations } from "./ui.js";

const RELATED_LIMIT = 4;
const SESSION_SEED_KEY = "spada-related-treatment-seed";
const LAST_SET_KEY = "spada-related-treatment-last-set";

function hashString(value = "") {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function getSessionSeed() {
  const stored = window.sessionStorage.getItem(SESSION_SEED_KEY);
  if (stored) return Number(stored) >>> 0;

  let seed = Date.now() >>> 0;

  if (window.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    seed = values[0] >>> 0;
  }

  window.sessionStorage.setItem(SESSION_SEED_KEY, String(seed));
  return seed;
}

function seededRandom(seed) {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffleForTreatment(items, slug) {
  const random = seededRandom(hashString(slug) ^ getSessionSeed());
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }

  return shuffled;
}

function findRelatedCatalog(app) {
  const heading = Array.from(app.querySelectorAll(".section-heading h2")).find(
    (node) => node.textContent.trim().toLowerCase() === "más tratamientos para explorar"
  );

  if (!heading) return null;

  const sectionHeading = heading.closest(".section-heading");
  let sibling = sectionHeading?.nextElementSibling || null;

  while (sibling && !sibling.classList.contains("treatment-catalog")) {
    sibling = sibling.nextElementSibling;
  }

  return sibling;
}

function chooseRelatedTreatments(currentSlug) {
  const candidates = treatments.filter((item) => item.slug !== currentSlug);
  let selected = shuffleForTreatment(candidates, currentSlug).slice(0, RELATED_LIMIT);

  const signature = selected.map((item) => item.slug).sort().join("|");
  const previousSignature = window.sessionStorage.getItem(LAST_SET_KEY) || "";

  if (signature === previousSignature && candidates.length > RELATED_LIMIT) {
    const replacement = shuffleForTreatment(candidates, `${currentSlug}-alternate`)
      .find((item) => !selected.some((selectedItem) => selectedItem.slug === item.slug));

    if (replacement) {
      selected = [...selected.slice(0, RELATED_LIMIT - 1), replacement];
    }
  }

  window.sessionStorage.setItem(
    LAST_SET_KEY,
    selected.map((item) => item.slug).sort().join("|")
  );

  return selected;
}

function randomizeRelatedTreatments() {
  const app = document.getElementById("app");
  if (!app) return;

  const currentSlug = new URLSearchParams(window.location.search).get("slug") || "";
  if (!currentSlug) return;

  const catalog = findRelatedCatalog(app);
  if (!catalog) return;

  const related = chooseRelatedTreatments(currentSlug);
  catalog.innerHTML = related
    .map((item, index) => renderTreatmentListCard(item, index === 0))
    .join("");

  setupRevealAnimations();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", randomizeRelatedTreatments, { once: true });
} else {
  randomizeRelatedTreatments();
}
