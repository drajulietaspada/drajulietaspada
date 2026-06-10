import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const sourcePath = fileURLToPath(new URL("../Precios Marzo 2026 - Staff.csv", import.meta.url));
const outputPath = fileURLToPath(new URL("./generated-treatments.js", import.meta.url));

const source = await readFile(sourcePath, "utf8");
const lines = source.split(/\r?\n/).filter(Boolean);

function parseCsvLine(line) {
  const columns = [];
  let current = "";
  let inQuotes = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && inQuotes && next === '"') {
      current += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (char === "," && !inQuotes) {
      columns.push(current);
      current = "";
      continue;
    }

    current += char;
  }

  columns.push(current);
  return columns.map((value) => value.trim());
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function inferCategory(title, badge) {
  const normalized = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  if (badge === "PROMO" || badge === "PACKS" || normalized.includes("pack")) {
    return "Packs y promociones";
  }

  if (normalized.includes("consulta") || normalized.includes("biopsia") || normalized.includes("electrocoagulacion") || normalized.includes("ecg")) {
    return "Consultas y procedimientos";
  }

  if (normalized.includes("erbium") || normalized.includes("harmony") || normalized.includes("q switched") || normalized.includes("laser") || normalized.includes("aft")) {
    return "Láser y tecnología";
  }

  if (normalized.includes("toxina") || normalized.includes("hialur") || normalized.includes("radiesse") || normalized.includes("rinomodel") || normalized.includes("sculptra") || normalized.includes("profhilo") || normalized.includes("sunekos") || normalized.includes("revive") || normalized.includes("relleno") || normalized.includes("long lasting")) {
    return "Inyectables y armonización";
  }

  if (normalized.includes("morpheus") || normalized.includes("exilis")) {
    return "Tecnología facial y corporal";
  }

  if (normalized.includes("prp") || normalized.includes("meso") || normalized.includes("dermapen") || normalized.includes("peeling") || normalized.includes("exosomas") || normalized.includes("skinbooster") || normalized.includes("enzimas")) {
    return "Regeneración y renovación";
  }

  if (normalized.includes("capilar")) {
    return "Salud capilar";
  }

  return "Tratamientos estéticos";
}

function buildExcerpt(title, category, badge) {
  if (badge === "PROMO") {
    return `Opción promocional vinculada a ${category.toLowerCase()}, pensada para conversar objetivos y disponibilidad en consulta.`;
  }

  if (badge === "PACKS") {
    return `Propuesta en formato pack dentro de ${category.toLowerCase()}, ideal para planificar un seguimiento personalizado.`;
  }

  return `${title} forma parte del área de ${category.toLowerCase()} y se adapta a la evaluación individual de cada paciente.`;
}

function buildDetails(title, category, badge) {
  const closingLine =
    badge === "PROMO" || badge === "PACKS"
      ? "Esta variante se presenta como modalidad especial y se confirma de manera personalizada durante la consulta."
      : "Los alcances, frecuencia, indicaciones y cuidados se revisan siempre en consulta para acompañar cada caso con criterio médico.";

  return [
    `${title} integra la propuesta de ${category.toLowerCase()} del consultorio. El abordaje se define de forma personalizada a partir del motivo de consulta, los antecedentes y el resultado que se quiere trabajar.`,
    closingLine,
    "Mientras completes el contenido definitivo, esta página ya queda preparada para sumar imágenes, preguntas frecuentes, indicaciones previas y recomendaciones de seguimiento."
  ];
}

const treatments = lines
  .map(parseCsvLine)
  .filter((row) => row[1] && row[1].toUpperCase() !== "TRATAMIENTO")
  .map((row, index) => {
    const badge = row[0] || "";
    const title = row[1];
    const category = inferCategory(title, badge);

    return {
      id: `treatment-${index + 1}`,
      slug: slugify(title),
      title,
      badge,
      category,
      excerpt: buildExcerpt(title, category, badge),
      details: buildDetails(title, category, badge),
      image: "",
      featured: !badge && index < 8
    };
  });

const fileContents = `export const treatments = ${JSON.stringify(treatments, null, 2)};\n`;

await writeFile(outputPath, fileContents, "utf8");
console.log(`Generated ${treatments.length} treatments in scripts/generated-treatments.js`);
