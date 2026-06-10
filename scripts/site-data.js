import { treatments as generatedTreatments } from "./generated-treatments.js";

const treatmentBeforeAfterCases = {
  "Ultherapy Prime": [
    "images/caso Morpheus 8 Ultherapy Prime.png",
    "images/caso Ultherapy Prime (2).png",
    "images/caso Ultherapy Prime blend de ojeras.png",
    "images/caso Ultherapy Prime.png"
  ],
  "Morpheus 8": [
    "images/caso aft morpheus up.png",
    "images/caso Blend de radiesse con meso y morpheus 8.png",
    "images/caso morpheus 8 (2).png",
    "images/caso Morpheus 8 Ultherapy Prime.png",
    "images/caso morpheus 8.png",
    "images/caso morpheus altube sonia.png",
    "images/caso morpheus diehl.png",
    "images/caso Tarsopexia morpheus 8.png"
  ],
  "Harmony AFT 540–950": [
    "images/caso aft salto.png",
    "images/caso aft morpheus up.png",
    "images/caso HARMONY AFT.png"
  ],
  "Arrugas en el tercio superior": ["images/caso tercio superior.png"],
  "Bandas platismales": ["images/caso bandas.png"],
  Maseteros: ["images/caso maseteros.png"],
  Traptox: [
    "images/caso traptox bevilaquia.png",
    "images/caso traptox bevilaquia(1).png"
  ],
  Tarsopexia: [
    "images/caso Tarsopexia morpheus 8 (2).png",
    "images/caso Tarsopexia.png"
  ],
  Radiesse: ["images/caso Radiesse.png"],
  "Radiesse + NCTFHA 135": [
    "images/caso Blend de radiesse con meso y morpheus 8.png",
    "images/caso radiesse + meso.png"
  ],
  Mentón: ["images/caso menton.png"],
  "Ácido hialurónico en labios": [
    "images/caso Labios (2).png",
    "images/caso Labios.png"
  ],
  Rinomodelación: [
    "images/caso rino (2).png",
    "images/caso rino px angel.png",
    "images/caso rino.png"
  ],
  "Blend de ojeras": [
    "images/caso ojeras mariana.png",
    "images/caso Ojeras.png"
  ],
  "Blend de contorno mandibular": ["images/caso Contorno mandibular.png"],
  "Hueco supraorbitario": [
    "images/caso hueco supra.png",
    "images/caso Hueco supraorbitario.png"
  ],
  "Surco nasogeniano": ["images/caso surco nasogeniano.png"],
  "Surco labiomentoniano": ["images/caso surco labiomentoniano drzeuko.png"],
  "Relleno de lóbulo de oreja": [
    "images/caso oreja brillantino 2 .png",
    "images/caso orejas brillantino.png"
  ],
  "PRP (Plasma Rico en Plaquetas) capilar": ["images/caso capilar julio miranda.png"]
};

export const treatments = generatedTreatments.map((item) => ({
  ...item,
  beforeAfterCases: (treatmentBeforeAfterCases[item.title] || []).map((image, index) => ({
    image,
    alt: `Antes y después de ${item.title}. Caso ${index + 1}`
  }))
}));

export function getHomeBeforeAfterGalleryItems() {
  const itemsByImage = new Map();

  treatments.forEach((treatment) => {
    treatment.beforeAfterCases.forEach((entry) => {
      const href = `tratamiento.html?slug=${treatment.slug}`;
      const existingEntry = itemsByImage.get(entry.image);

      if (!existingEntry) {
        itemsByImage.set(entry.image, {
          image: entry.image,
          alt: "Caso de antes y después",
          hrefs: [href]
        });
        return;
      }

      if (!existingEntry.hrefs.includes(href)) {
        existingEntry.hrefs.push(href);
      }
    });
  });

  return Array.from(itemsByImage.values());
}

export const siteConfig = {
  brand: {
    title: "SPADA",
    subtitle: "Dermatologia & Estetica"
  },
  contact: {
    address: "Av. Libertador y Echeverria, 1515. CABA.",
    email: "consultoriodraspada@gmail.com",
    bookingWhatsApp: "5491160186972",
    commercialWhatsApp: "5491135116233"
  }
};

export const navigation = [
  { label: "Home", href: "index.html", page: "home" },
  { label: "Tratamientos", href: "tratamientos.html", page: "tratamientos" },
  { label: "Dra. Julieta Spada", href: "acerca.html", page: "acerca" },
  { label: "Contacto", href: "contacto.html", page: "contacto" }
];

export const heroContent = {
  title: "Dermatologia y estetica con una mirada personal",
  text: "Un espacio pensado para acompanar consultas dermatologicas y esteticas con informacion clara, seguimiento cercano y una experiencia cuidada desde el primer contacto.",
  primaryLabel: "Solicitar una consulta",
  primaryHref: "contacto.html?intent=booking",
  secondaryLabel: "Ver tratamientos",
  secondaryHref: "tratamientos.html"
};

export const showcaseItems = [
  {
    label: "Consulta personalizada",
    title: "Plan de cuidado realista",
    text: "Cada recorrido se arma segun objetivos, tiempos y necesidades concretas."
  },
  {
    label: "Seguimiento",
    title: "Acompanamiento cercano",
    text: "Una experiencia simple para resolver dudas y ordenar proximos pasos."
  },
  {
    label: "Criterio medico",
    title: "Indicaciones claras",
    text: "Informacion accesible para que cada decision se tome con tranquilidad."
  },
  {
    label: "Estetica actual",
    title: "Resultados armonicos",
    text: "Tratamientos pensados para integrarse naturalmente a cada paciente."
  },
  {
    label: "Tecnologia",
    title: "Recursos variados",
    text: "La seccion de tratamientos ya queda lista para crecer con nuevo contenido."
  }
];

export const doctorProfile = {
  title: "Dra. Julieta Spada",
  summary:
    "Una presentacion clara, cercana y orientada a la consulta medica. Esta seccion ya queda preparada para sumar trayectoria, formacion y enfoques de trabajo cuando quieras completar el contenido definitivo.",
  paragraphs: [
    "La landing prioriza una navegacion simple desde el celular, pero mantiene una composicion amplia y ordenada en desktop. La idea es que cada seccion ayude a entender rapido que hace el consultorio y como contactar.",
    "Tambien deje una base lista para crecer con tratamientos, articulos y recursos visuales sin tener que reescribir la estructura del sitio."
  ]
};

export const aboutPageContent = {
  hero: {
    title: "Dra. Julieta Spada",
    text:
      "Dermatología estética y rejuvenecimiento facial con enfoque médico, precisión anatómica y tecnología avanzada."
  },
  sections: [
    {
      title: "Trayectoria",
      intro: "Trayectoria de la Dra. Julieta Spada",
      paragraphs: [
        "La Dra. Julieta Spada es médica dermatóloga especializada en dermatología estética, clínica y quirúrgica. Egresada de la Universidad de Buenos Aires (UBA), desarrolló una trayectoria que integra dermatología clínica, medicina estética y conocimiento anatómico avanzado, siempre con un enfoque médico, riguroso y personalizado.",
        "Su perfil combina atención clínica, docencia, investigación y participación activa en congresos internacionales de referencia. Fue profesora adjunta en la Universidad de Buenos Aires (UBA), es Global Speaker de Merz Aesthetics, forma parte del cuerpo docente de UMA Institute en Ámsterdam y ha sido disertante en encuentros como AMWC Mónaco, IMCAS París, MCS Miami, MEXS LATAM y BAAS.",
        "Como Directora Médica de su clínica y de Spada Beauty Lab, lidera una visión del rejuvenecimiento facial que combina ciencia, precisión y resultados naturales, marcando un nuevo estándar en Argentina."
      ]
    },
    {
      title: "Formación",
      intro: "Formación médica y especializaciones",
      items: [
        {
          label: "Médica",
          text: "Universidad de Buenos Aires (UBA), 2004."
        },
        {
          label: "Especialista en Dermatología",
          text: "Universidad de Buenos Aires (UBA) y Sociedad Argentina de Dermatología."
        },
        {
          label: "Especialista en Medicina Interna",
          text: "Universidad de Buenos Aires (UBA)."
        },
        {
          label: "Especialista en Medicina Estética",
          text: "Asociación Médica Argentina."
        },
        {
          label: "Profesora de Anatomía Aplicada",
          text: "Formación en el uso de toxina botulínica y fillers en cadáveres en la UBA."
        },
        {
          label: "Ex Profesora Adjunta de la UBA",
          text: "Actividad docente universitaria en el área de dermatología."
        },
        {
          label: "Formación continua internacional",
          text: "Participación constante en cursos, congresos y espacios de actualización científica en Argentina, Latinoamérica, Europa y Estados Unidos."
        }
      ]
    },
    {
      title: "Experiencia",
      intro: "Experiencia en dermatología estética y rejuvenecimiento facial",
      paragraphs: [
        "Con más de una década al frente de su clínica, la Dra. Julieta Spada se desempeña actualmente como Directora Médica de Spada Dermatología y Estética / Spada Beauty Lab, donde realiza consultas, procedimientos dermatológicos y tratamientos estéticos con un abordaje integral y personalizado.",
        "Su experiencia incluye el trabajo con tecnologías y tratamientos como láseres, IPL, ultrasonido microfocalizado, toxina botulínica, fillers, bioestimuladores e hilos tensores, siempre dentro de un enfoque orientado a la seguridad, la armonía facial y los resultados naturales.",
        "Previamente trabajó como dermatóloga en el Centro Chouela / Centro de Investigaciones Dermatológicas y también fue directora médica de un centro de medicina estética. Su recorrido comenzó con una sólida experiencia hospitalaria y clínica en medicina interna, incluyendo residencia completa en el Hospital General de Agudos Parmenio Piñero y actividad médica en Sanatorio Mater Dei.",
        "A su práctica asistencial se suma una fuerte actividad académica y científica: es autora y coautora de publicaciones en revistas internacionales, investigadora en dermatología cosmética e inyectables, y referente en temas como rejuvenecimiento facial, zona periocular, ultrasonido microfocalizado, toxina botulínica y rellenos dérmicos."
      ]
    }
  ],
  publications: {
    eyebrow: "Artículos",
    title: "Publicaciones"
  }
};

export const articles = [
  {
    id: "article-1",
    slug: "eficacia-estetica-seguridad-mfuv-hidroxiapatita-calcio",
    title: "Eficacia estética y seguridad del tratamiento combinado con ultrasonido microfocalizado con visualización e hidroxiapatita de calcio: una revisión sistemática de la evidencia en humanos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39883075/"
  },
  {
    id: "article-2",
    slug: "ultrasonido-microfocalizado-estetica-regenerativa-revision-narrativa",
    title: "Ultrasonido microfocalizado en estética regenerativa: una revisión narrativa sobre los mecanismos de acción y los resultados clínicos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39501429/"
  },
  {
    id: "article-3",
    slug: "eficacia-seguridad-mfu-v-revision-sistematica-metaanalisis",
    title: "Eficacia y seguridad del ultrasonido microfocalizado con visualización (MFU-V): una revisión sistemática y metaanálisis",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39540440/"
  },
  {
    id: "article-4",
    slug: "recomendaciones-matriz-cohesiva-polidensificada-rejuvenecimiento-facial",
    title: "Recomendaciones para el uso de la tecnología de relleno de matriz cohesiva polidensificada para el rejuvenecimiento facial por el Grupo de Expertos Latinoamericanos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40393087/"
  },
  {
    id: "article-5",
    slug: "mfu-v-calidad-piel-revision-narrativa",
    title: "Ultrasonido microfocalizado con visualización en la calidad de la piel: una revisión narrativa",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40847904/"
  },
  {
    id: "article-6",
    slug: "incobotulinumtoxin-aa-tratamientos-esteticos-america-latina",
    title: "IncobotulinumtoxinaA para tratamientos estéticos: revisión y recomendaciones desde América Latina",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39196830/"
  },
  {
    id: "article-7",
    slug: "contouring-plus-tercio-inferior-hidroxiapatita-acido-hialuronico",
    title: "Contouring Plus: un enfoque integral del tercio inferior del rostro con hidroxiapatita de calcio y ácido hialurónico",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/37041818/"
  },
  {
    id: "article-8",
    slug: "aguja-versus-canula-surco-lagrimal",
    title: "Aguja versus cánula para tratar el surco lagrimal: un estudio prospectivo que compara ambos métodos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/37936826/"
  },
  {
    id: "article-9",
    slug: "parpado-superior-hundido-acido-hialuronico",
    title: "Tratamiento del párpado superior hundido con ácido hialurónico: recomendaciones y resultados",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/36074507/"
  },
  {
    id: "article-10",
    slug: "agua-mineralizante-vichy-acido-hialuronico-dermatosis-procedimientos",
    title: "El agua mineralizante de Vichy con ácido hialurónico es eficaz y bien tolerada como coadyuvante en el manejo de diversas dermatosis y después de procedimientos estéticos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/31793738/"
  },
  {
    id: "article-11",
    slug: "urticaria-pigmentosa-presentaciones-clinicas-pediatricas",
    title: "Urticaria pigmentosa: dos presentaciones clínicas diferentes en pacientes pediátricos",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/21829861/"
  }
];

export function getFeaturedTreatments(limit = 6) {
  return treatments.filter((item) => item.featured).slice(0, limit);
}

export function getTreatmentBySlug(slug) {
  return treatments.find((item) => item.slug === slug);
}

export function getArticleBySlug(slug) {
  return articles.find((item) => item.slug === slug);
}

export function getRelatedTreatments(slug, limit = 3) {
  return treatments.filter((item) => item.slug !== slug).slice(0, limit);
}

export function getRelatedArticles(slug, limit = 3) {
  return articles.filter((item) => item.slug !== slug).slice(0, limit);
}

export function getTreatmentCategories() {
  return ["Todos", ...new Set(treatments.map((item) => item.category))];
}
