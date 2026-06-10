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

const treatmentArticleIds = {
  "Ultherapy Prime": [
    "article-1",
    "article-4",
    "article-5",
    "article-6",
    "article-7",
    "article-8",
    "article-11"
  ],
  "Morpheus 8": ["article-4", "article-7"],
  Tarsopexia: ["article-2", "article-4", "article-7"],
  "Blend de ojeras": ["article-2", "article-10"],
  "Hueco supraorbitario": ["article-2", "article-9"],
  Radiesse: ["article-6", "article-12"],
  "Radiesse + NCTFHA 135": ["article-2", "article-6", "article-12"],
  "Blend de contorno mandibular": ["article-12", "article-13"],
  Mentón: ["article-12", "article-13"],
  "Ácido hialurónico en labios": ["article-13"],
  "Surco nasogeniano": ["article-13"],
  "Surco labiomentoniano": ["article-13"],
  "Relleno de lóbulo de oreja": ["article-13"],
  Rinomodelación: ["article-13"],
  "Arrugas en el tercio superior": ["article-3"],
  "Bandas platismales": ["article-3"],
  Maseteros: ["article-3"],
  Traptox: ["article-3"]
};

export const articles = [
  {
    id: "article-1",
    slug: "microfocused-ultrasound-regenerative-aesthetics-narrative-review",
    title:
      "Microfocused Ultrasound in Regenerative Aesthetics: A Narrative Review on Mechanisms of Action and Clinical Outcomes",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39501429/"
  },
  {
    id: "article-2",
    slug: "hyaluronic-acid-diluted-hyperdiluted-calcium-hydroxylapatite-periocular",
    title:
      "Hyaluronic Acid Combined with Diluted and Hyperdiluted Calcium Hydroxylapatite to Treat the Periocular Area",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40692693/"
  },
  {
    id: "article-3",
    slug: "incobotulinumtoxina-aesthetic-treatments-latin-america",
    title:
      "IncobotulinumtoxinA for Aesthetic Treatments: Review and Recommendations From Latin America",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39196830/"
  },
  {
    id: "article-4",
    slug: "microfocused-ultrasound-visualization-skin-quality-narrative-review",
    title:
      "Microfocused Ultrasound With Visualization in Skin Quality: A Narrative Review",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40847904/"
  },
  {
    id: "article-5",
    slug: "response-methodological-rigor-mfu-v-meta-analyses-commentary",
    title:
      "Response to: Enhancing Methodological Rigor in MFU-V Meta-analyses: A Commentary on Evidence Synthesis and Interpretation",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/41061121/"
  },
  {
    id: "article-6",
    slug: "aesthetic-efficacy-safety-mfu-v-calcium-hydroxylapatite-systematic-review",
    title:
      "Aesthetic Efficacy and Safety of Combined Microfocused Ultrasound With Visualization and Calcium Hydroxylapatite Treatment: A Systematic Review of Human Evidence",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39883075/"
  },
  {
    id: "article-7",
    slug: "skin-quality-consensus-treatment-algorithm-expert-guidance",
    title:
      "How to Treat Skin Quality: A Consensus-Based Treatment Algorithm and Expert Guidance",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40847902/"
  },
  {
    id: "article-8",
    slug: "mfu-v-body-indications-abdomen-arms-global-expert-consensus",
    title:
      "Microfocused Ultrasound With Visualization for Body Indications: A Global Expert Consensus on Best Practices for Treatment of the Abdomen and Arms",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40995829/"
  },
  {
    id: "article-9",
    slug: "treating-sunken-upper-eyelid-hyaluronic-acid",
    title:
      "Treating Sunken Upper Eyelid With Hyaluronic Acid: Recommendations and Results",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/36074507/"
  },
  {
    id: "article-10",
    slug: "needle-versus-cannula-tear-trough-prospective-study",
    title:
      "Needle versus Cannula to Treat Tear Trough: A Prospective Study Comparing both Methods",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/37936826/"
  },
  {
    id: "article-11",
    slug: "mfu-v-effectiveness-safety-systematic-review-meta-analysis",
    title:
      "Microfocused Ultrasound With Visualization (MFU-V) Effectiveness and Safety: A Systematic Review and Meta-Analysis",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/39540440/"
  },
  {
    id: "article-12",
    slug: "contouring-plus-lower-third-face-calcium-hydroxylapatite-hyaluronic-acid",
    title:
      "Contouring Plus: A Comprehensive Approach of the Lower Third of the Face with Calcium Hydroxylapatite and Hyaluronic Acid",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/37041818/"
  },
  {
    id: "article-13",
    slug: "cohesive-polydensified-matrix-filler-facial-rejuvenation-latin-american-expert-group",
    title:
      "Recommendations for the use of Cohesive Polydensified Matrix filler technology for facial rejuvenation by the Latin American Expert Group",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/40393087/"
  },
  {
    id: "article-14",
    slug: "vichy-mineralizing-water-hyaluronic-acid-dermatoses-esthetic-procedures",
    title:
      "Vichy mineralizing water with hyaluronic acid is effective and well tolerated as an adjunct to the management of various dermatoses and after esthetic procedures",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/31793738/"
  },
  {
    id: "article-15",
    slug: "urticaria-pigmentosa-clinical-presentations-pediatric-patients",
    title:
      "Urticaria pigmentosa: two different clinical presentations in pediatric patients",
    category: "PubMed",
    excerpt: "Artículo científico disponible en PubMed.",
    details: ["Estudio disponible en PubMed para lectura completa."],
    externalUrl: "https://pubmed.ncbi.nlm.nih.gov/21829861/"
  }
];

export const treatments = generatedTreatments.map((item) => ({
  ...item,
  beforeAfterCases: (treatmentBeforeAfterCases[item.title] || []).map((image, index) => ({
    image,
    alt: `Antes y después de ${item.title}. Caso ${index + 1}`
  })),
  articles: (treatmentArticleIds[item.title] || [])
    .map((id) => articles.find((article) => article.id === id))
    .filter(Boolean)
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
    subtitle: "Dermatología & Estética"
  },
  contact: {
    address: "Av. Libertador y Echeverría, 1515. CABA.",
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
  title: "Dermatología y estética con una mirada personal",
  text: "Un espacio pensado para acompañar consultas dermatológicas y estéticas con información clara, seguimiento cercano y una experiencia cuidada desde el primer contacto.",
  primaryLabel: "Solicitar una consulta",
  primaryHref: "contacto.html?intent=booking",
  secondaryLabel: "Ver tratamientos",
  secondaryHref: "tratamientos.html"
};

export const showcaseItems = [
  {
    label: "Consulta personalizada",
    title: "Plan de cuidado realista",
    text: "Cada recorrido se arma según objetivos, tiempos y necesidades concretas."
  },
  {
    label: "Seguimiento",
    title: "Acompañamiento cercano",
    text: "Una experiencia simple para resolver dudas y ordenar próximos pasos."
  },
  {
    label: "Criterio médico",
    title: "Indicaciones claras",
    text: "Información accesible para que cada decisión se tome con tranquilidad."
  },
  {
    label: "Estética actual",
    title: "Resultados armónicos",
    text: "Tratamientos pensados para integrarse naturalmente a cada paciente."
  },
  {
    label: "Tecnología",
    title: "Recursos variados",
    text: "La sección de tratamientos ya queda lista para crecer con nuevo contenido."
  }
];

export const doctorProfile = {
  title: "Dra. Julieta Spada",
  summary:
    "Una presentación clara, cercana y orientada a la consulta médica. Esta sección ya queda preparada para sumar trayectoria, formación y enfoques de trabajo cuando quieras completar el contenido definitivo.",
  paragraphs: [
    "La landing prioriza una navegación simple desde el celular, pero mantiene una composición amplia y ordenada en desktop. La idea es que cada sección ayude a entender rápido qué hace el consultorio y cómo contactar.",
    "También dejé una base lista para crecer con tratamientos, artículos y recursos visuales sin tener que reescribir la estructura del sitio."
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
