const treatmentEntries = [
  {
    category: "Consulta dermatológica y estética",
    title: "Consulta dermatológica y estética",
    excerpt:
      "Una consulta médica personalizada para evaluar la piel, ordenar prioridades y definir un plan dermatológico y estético acorde a cada caso.",
    details: [
      "Permite revisar antecedentes, motivo de consulta, necesidades de tratamiento y objetivos reales para construir una indicación clara y segura.",
      "Está indicada en pacientes que desean una primera evaluación médica, resolver dudas sobre procedimientos o recibir una estrategia personalizada según su piel y su momento."
    ],
    image: "images/JAB02625.png",
    imagePosition: "center 16%"
  },
  {
    category: "Tecnologías y aparatología facial y corporal",
    title: "Ultherapy Prime",
    excerpt:
      "Ultherapy Prime es una tecnología de ultrasonido microfocalizado con visualización que trabaja en planos profundos de la piel sin cirugía.",
    details: [
      "Se utiliza para mejorar la flacidez leve a moderada y redefinir zonas como cejas, cuello, submentón y, según evaluación, determinadas áreas corporales.",
      "Está indicado en pacientes que buscan tensado progresivo, prevención estructural o una mejora natural de la firmeza sin tiempo de recuperación prolongado."
    ],
    image: "images/ultherapy.png"
  },
  {
    category: "Tecnologías y aparatología facial y corporal",
    title: "Morpheus 8",
    excerpt:
      "Morpheus 8 combina microagujas con radiofrecuencia fraccionada para actuar sobre la piel y el tejido subdérmico de forma mínimamente invasiva.",
    details: [
      "Ayuda a mejorar flacidez, textura, poros, marcas de acné y calidad general de la piel en rostro y cuerpo.",
      "Suele indicarse en pacientes con pérdida de firmeza, cicatrices, poros dilatados o piel engrosada que necesitan remodelación cutánea y una mejor definición del contorno."
    ],
    image: "images/JAB02559.png",
    imagePosition: "center 18%"
  },
  {
    category: "Tecnologías y aparatología facial y corporal",
    title: "Harmony AFT 540–950",
    excerpt:
      "Harmony AFT 540–950 es una tecnología lumínica de amplio espectro, una evolución de la luz pulsada intensa, diseñada para tratar diferentes alteraciones de color y textura.",
    details: [
      "Se utiliza para mejorar manchas, tono desparejo, daño solar y ciertas lesiones vasculares superficiales.",
      "Está indicada en pieles con fotodaño, rojeces, discromías o falta de luminosidad, siempre según fototipo y diagnóstico dermatológico."
    ],
    image: "images/JAB02584.png",
    imagePosition: "center 18%"
  },
  {
    category: "Tecnologías y aparatología facial y corporal",
    title: "Harmony Nd:YAG Q-Switched",
    excerpt:
      "Es un láser Q-Switched Nd:YAG que trabaja sobre el pigmento con alta precisión y mínima agresión del tejido circundante.",
    details: [
      "Se usa para tratar manchas, melasma en casos seleccionados, tatuajes, poros visibles y rejuvenecimiento no ablativo.",
      "Se indica en pacientes con lesiones pigmentarias, fotodaño o necesidad de aclarar determinados pigmentos cutáneos, siempre con evaluación médica previa."
    ],
    image: "images/JAB02607.png",
    imagePosition: "center 18%"
  },
  {
    category: "Tecnologías y aparatología facial y corporal",
    title: "Harmony Pixel Erbium",
    excerpt:
      "Harmony Pixel Erbium es un láser fraccionado de erbio orientado al resurfacing cutáneo y la renovación de la superficie de la piel.",
    details: [
      "Mejora arrugas finas, textura irregular, cicatrices, poros y signos de fotodaño.",
      "Está indicado en pacientes con piel fotoenvejecida, marcas de acné, líneas finas o necesidad de una renovación cutánea más intensa y controlada."
    ],
    image: "images/JAB02616.png",
    imagePosition: "center 18%"
  },
  {
    category: "Toxina botulínica",
    title: "Arrugas en el tercio superior",
    excerpt:
      "Es la aplicación de toxina botulínica en los músculos responsables de las arrugas dinámicas de frente, entrecejo y patas de gallo.",
    details: [
      "Sirve para suavizar líneas de expresión y prevenir que esas arrugas se profundicen con el tiempo, manteniendo movimiento y naturalidad cuando la indicación es correcta.",
      "Está indicado en pacientes con arrugas dinámicas, gesticulación marcada o interés en prevención médica del envejecimiento del tercio superior."
    ],
    image: "images/terciosuperior.png",
    imagePosition: "center center"
  },
  {
    category: "Toxina botulínica",
    title: "Bandas platismales",
    excerpt:
      "Es el uso de toxina botulínica en el músculo platisma para modular su tracción en cuello y borde mandibular.",
    details: [
      "Ayuda a suavizar las bandas verticales del cuello y puede acompañar una mejor definición del tercio inferior en pacientes seleccionados.",
      "Está indicado en pacientes con bandas platismales visibles, tensión muscular en cuello o descenso del tercio inferior asociado a hiperactividad muscular."
    ],
    image: "images/bandas.png",
    imagePosition: "center center"
  },
  {
    category: "Toxina botulínica",
    title: "Sonrisa gingival",
    excerpt:
      "Es un tratamiento con toxina botulínica dirigido a los músculos que elevan en exceso el labio superior al sonreír.",
    details: [
      "Permite reducir la exposición gingival y lograr una sonrisa más armónica, sin perder naturalidad.",
      "Se indica en pacientes con sonrisa gingival de origen muscular o dinámico, tras una evaluación médica de labios, encía y proporciones faciales."
    ],
    image: "images/sonrisa.png",
    imagePosition: "center center"
  },
  {
    category: "Toxina botulínica",
    title: "Maseteros",
    excerpt:
      "Es la aplicación de toxina botulínica en el músculo masetero para modular su fuerza y su volumen.",
    details: [
      "Puede afinar el tercio inferior en pacientes con hipertrofia maseterina y, además, acompañar el manejo de la tensión mandibular en casos seleccionados.",
      "Se indica cuando existe ensanchamiento facial por hipertrofia muscular, bruxismo asociado o necesidad de armonizar el contorno mandibular."
    ],
    image: "images/maseteros.png",
    imagePosition: "center center"
  },
  {
    category: "Toxina botulínica",
    title: "Traptox",
    excerpt:
      "Traptox es la aplicación de toxina botulínica en el músculo trapecio para modular su hiperactividad o hipertrofia.",
    details: [
      "Puede suavizar el volumen del trapecio, estilizar la transición cuello-hombro y disminuir tensión muscular en pacientes seleccionados.",
      "Está indicado en personas con trapecio muy desarrollado, tensión cervical persistente o búsqueda de un contorno cervical más liviano."
    ],
    image: "images/traptox.png",
    imagePosition: "center center"
  },
  {
    category: "Toxina botulínica",
    title: "Tarsopexia",
    excerpt:
      "Es un abordaje periocular con toxina botulínica en puntos seleccionados para modular la dinámica muscular y equilibrar la mirada.",
    details: [
      "Puede acompañar la corrección de asimetrías leves y mejorar la armonía periocular en casos puntuales, sin cirugía.",
      "Se indica tras una evaluación anatómica precisa de párpado, ceja y sonrisa ocular, especialmente cuando el componente a tratar es dinámico."
    ],
    image: "images/parpados.png",
    imagePosition: "center 30%"
  },
  {
    category: "Toxina botulínica",
    title: "Calvestox",
    excerpt:
      "Es la aplicación de toxina botulínica en pantorrillas para modular el volumen muscular en pacientes seleccionados.",
    details: [
      "Puede ayudar a suavizar el contorno de la pierna cuando el aumento de volumen depende principalmente de hipertrofia muscular.",
      "Se indica en pacientes con gemelos muy desarrollados por patrón muscular y que buscan una silueta más estilizada, siempre con criterio médico y funcional."
    ],
    image: "images/pantorrillas.png",
    imagePosition: "center 6%"
  },
  {
    category: "Bioestimuladores",
    title: "Radiesse",
    excerpt:
      "Radiesse es un bioestimulador a base de hidroxiapatita de calcio que aporta soporte y estimula colágeno.",
    details: [
      "Se utiliza para mejorar flacidez, pérdida de estructura, definición mandibular y calidad de piel según la técnica empleada.",
      "Está indicado en pacientes con pérdida de sostén, necesidad de redefinir contornos o búsqueda de rejuvenecimiento progresivo con resultados naturales."
    ],
    image: "images/radiesse.png",
    imagePosition: "center center"
  },
  {
    category: "Bioestimuladores",
    title: "Glow blend",
    excerpt:
      "Glow blend es un protocolo inyectable orientado a mejorar luminosidad, hidratación y calidad global de la piel con un enfoque de revitalización médica.",
    details: [
      "Se utiliza para acompañar pieles opacas, deshidratadas o con signos tempranos de envejecimiento, buscando una piel más fresca, uniforme y saludable.",
      "Está indicado en pacientes que priorizan glow, textura y calidad cutánea dentro de un plan médico personalizado."
    ],
    image: "images/glowblend.png",
    imagePosition: "center center"
  },
  {
    category: "Bioestimuladores",
    title: "Radiesse + NCTFHA 135",
    excerpt:
      "Es un abordaje combinado que integra bioestimulación con revitalización inyectable para trabajar soporte, densidad e hidratación de forma complementaria.",
    details: [
      "Puede utilizarse para mejorar firmeza, calidad de piel, luminosidad y textura en pacientes que necesitan una estrategia más integral.",
      "Se indica en casos seleccionados con pérdida de sostén y signos de desvitalización cutánea, siempre según evaluación médica y plan personalizado."
    ],
    image: "images/radiessemesoterapia.png",
    imagePosition: "center center"
  },
  {
    category: "Bioestimuladores",
    title: "Sculptra",
    excerpt:
      "Sculptra es un bioestimulador a base de ácido poli-L-láctico que trabaja estimulando colágeno de forma progresiva.",
    details: [
      "Se utiliza para mejorar pérdida de volumen, flacidez y calidad de piel con un efecto gradual y sostenido.",
      "Está indicado en pacientes con envejecimiento estructural, pérdida de soporte o necesidad de rejuvenecimiento global sin cambios bruscos."
    ],
    image: "images/sculptra.png",
    imagePosition: "center center"
  },
  {
    category: "Bioestimuladores",
    title: "NCTFHA 135",
    excerpt:
      "NCTFHA 135 es un tratamiento de revitalización inyectable con ácido hialurónico no reticulado y complejos revitalizantes.",
    details: [
      "Sirve para mejorar hidratación, luminosidad, tono, textura y signos tempranos de envejecimiento.",
      "Se indica en pieles cansadas, deshidratadas, opacas o con líneas finas que necesitan un plan de biorevitalización médica."
    ],
    image: "images/mesoterapia.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Rinomodelación",
    excerpt:
      "La rinomodelación es un tratamiento médico con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y el objetivo del tratamiento.",
    details: [
      "Permite mejorar ópticamente ciertos ángulos y relieves de la nariz sin cirugía, como una giba leve, pequeñas irregularidades del dorso o la proyección de la punta en casos seleccionados.",
      "Se indica en pacientes que buscan correcciones sutiles, reversibles y médicamente planificadas, con una evaluación anatómica estricta."
    ],
    image: "images/rino.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Revive",
    excerpt:
      "Revive es un tratamiento inyectable con ácido hialurónico orientado a mejorar hidratación profunda, elasticidad y calidad de piel sin aportar volumen estructural.",
    details: [
      "Ayuda a tratar piel apagada, deshidratación, textura irregular y signos iniciales de envejecimiento con un enfoque de skin quality.",
      "Está indicado en pacientes que buscan una piel más luminosa, elástica y uniforme dentro de un plan de rejuvenecimiento médico."
    ],
    image: "images/revive.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Ácido hialurónico en labios",
    excerpt:
      "Es la aplicación de ácido hialurónico, seleccionando el producto adecuado según el área anatómica y las necesidades de cada paciente.",
    details: [
      "Sirve para hidratar, perfilar o dar volumen a los labios de forma personalizada, respetando proporciones y naturalidad.",
      "Está indicado en labios finos, deshidratados, asimétricos o con pérdida de definición asociada al envejecimiento."
    ],
    image: "images/labiosha.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Mentón",
    excerpt:
      "Es el uso de ácido hialurónico, seleccionando el producto adecuado según el área anatómica y el soporte requerido.",
    details: [
      "Mejora la proporción facial, el perfil y la continuidad entre labio inferior, mentón y cuello.",
      "Se indica en pacientes con mentón retraído, poco definido o con desbalance del tercio inferior."
    ],
    image: "images/menton.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Blend de ojeras",
    excerpt:
      "Es un abordaje combinado de la región periocular con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y el diagnóstico de la zona.",
    details: [
      "Ayuda a mejorar la transición párpado-mejilla y el aspecto cansado cuando la anatomía lo permite y el diagnóstico es correcto.",
      "Está indicado en pacientes cuidadosamente seleccionados con ojera estructural, pérdida de soporte mediofacial o desbalance periocular."
    ],
    categoryAliases: ["Bioestimuladores"],
    image: "images/blend.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Blend de contorno mandibular",
    excerpt:
      "Es un tratamiento combinado con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y el objetivo del tratamiento.",
    details: [
      "Sirve para mejorar el contorno, la definición y la transición entre mandíbula, mentón y cuello.",
      "Se indica en pacientes con pérdida de definición mandibular, pre-jowls o necesidad de una armonización estructural del tercio inferior."
    ],
    image: "images/mandibula.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Fosa temporal",
    excerpt:
      "Es la reposición de volumen en la región temporal con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la necesidad de soporte.",
    details: [
      "Ayuda a recuperar continuidad entre frente, sien y pómulo, mejorando el marco superior del rostro.",
      "Se indica en pacientes con hundimiento temporal, pérdida de soporte lateral o envejecimiento del tercio superior."
    ],
    image: "images/fosatemporal.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Hueco supraorbitario",
    excerpt:
      "Es un tratamiento avanzado con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y las características del tejido.",
    details: [
      "Busca mejorar la transición entre ceja, frente y mirada cuando existe pérdida de soporte en esa zona.",
      "Está indicado en pacientes con vaciamiento superior orbital o desbalance del marco periocular, siempre bajo criterio anatómico estricto."
    ],
    image: "images/huecosupra.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Relleno de frente",
    excerpt:
      "Es una técnica de armonización con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la necesidad de corrección.",
    details: [
      "Sirve para suavizar irregularidades, mejorar proporciones del tercio superior y acompañar una armonización global.",
      "Se indica en pacientes con frente plana, irregular o con pérdida de volumen, siempre con evaluación anatómica muy cuidadosa."
    ],
    image: "images/frente.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Fosa piriforme",
    excerpt:
      "Es la aplicación de ácido hialurónico en la base nasal lateral, seleccionando el producto adecuado según el área anatómica y la necesidad de soporte estructural.",
    details: [
      "Puede mejorar la transición entre nariz, labio y surco nasogeniano cuando existe falta de sostén estructural.",
      "Está indicada en pacientes con retracción perinasal, sombra perialar o surco marcado por soporte insuficiente."
    ],
    image: "images/fosapiriforme.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Surco nasogeniano",
    excerpt:
      "Es el tratamiento del pliegue que va desde la base de la nariz hacia la comisura labial con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la profundidad del surco.",
    details: [
      "Suaviza el surco y mejora el aspecto de cansancio o caída cuando el diagnóstico contempla no solo el pliegue, sino también el soporte del tercio medio.",
      "Se indica en pacientes con surco marcado por pérdida de volumen, descenso de tejidos o combinación de ambos factores."
    ],
    image: "images/surconaso.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Marionetas",
    excerpt:
      "Es la corrección de las líneas que descienden desde la comisura hacia el mentón mediante ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la calidad del tejido.",
    details: [
      "Ayuda a suavizar la expresión de tristeza y a mejorar la transición del tercio inferior.",
      "Se indica en pacientes con pérdida de soporte mandibular, descenso comisural o pliegues marcados en la zona peribucal."
    ],
    image: "images/marioneta.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Surco labiomentoniano",
    excerpt:
      "Es el tratamiento del pliegue entre labio inferior y mentón con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y el objetivo del tratamiento.",
    details: [
      "Permite suavizar sombras, pliegues y quiebres que endurecen el gesto.",
      "Está indicado en pacientes con hiperactividad mentoniana, pérdida de soporte o retracción del mentón asociada al envejecimiento."
    ],
    image: "images/labiomentoniano.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Blanching peribucal",
    excerpt:
      "Es una técnica de microdepósitos muy superficiales con ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la calidad de la piel.",
    details: [
      "Sirve para suavizar arrugas finas alrededor de la boca y mejorar la textura peribucal de forma sutil.",
      "Se indica en pacientes con líneas peribucales marcadas, código de barras o arrugas finas de la región perioral."
    ],
    image: "images/peribucal.png",
    imagePosition: "center center"
  },
  {
    category: "Armonización facial con rellenos",
    title: "Relleno de lóbulo de oreja",
    excerpt:
      "Es la aplicación de ácido hialurónico, seleccionando el producto adecuado según el área anatómica y la necesidad de soporte del tejido.",
    details: [
      "Permite rejuvenecer lóbulos afinados, arrugados o elongados por edad o uso de aros pesados.",
      "Está indicado en pacientes con pérdida de volumen, arrugas del lóbulo o adelgazamiento del tejido."
    ],
    image: "images/oreja.png",
    imagePosition: "center center"
  },
  {
    category: "Enzimas faciales y corporales",
    title: "PBSerum de primera y segunda generación",
    excerpt:
      "PBSerum es una línea de tratamientos enzimáticos médicos con distintas formulaciones orientadas a fibrosis, remodelación tisular y calidad de piel.",
    details: [
      "Puede utilizarse para abordar fibrosis, secuelas de procedimientos, irregularidades del tejido, determinadas complicaciones con ácido hialurónico y algunas indicaciones faciales o corporales seleccionadas.",
      "Se indica según diagnóstico médico en pacientes con fibrosis postsurgical, cicatrices, alteraciones del tejido o necesidad de mejorar estructura y apariencia cutánea."
    ],
    image: "images/pbserum.png",
    imagePosition: "center center"
  },
  {
    category: "Medicina regenerativa",
    title: "PRP (Plasma Rico en Plaquetas) facial",
    excerpt:
      "El PRP facial es un tratamiento regenerativo que utiliza una fracción de plasma obtenida de la propia sangre del paciente y rica en factores de crecimiento.",
    details: [
      "Se emplea para mejorar calidad de piel, luminosidad, reparación tisular y acompañar protocolos de rejuvenecimiento.",
      "Está indicado en pacientes con piel apagada, signos iniciales de envejecimiento, secuelas leves o necesidad de potenciar procesos de regeneración cutánea."
    ],
    image: "images/prpfacial.png",
    imagePosition: "center center"
  },
  {
    category: "Medicina regenerativa",
    title: "PRP (Plasma Rico en Plaquetas) capilar",
    excerpt:
      "El PRP capilar es un tratamiento autólogo que concentra plaquetas y factores de crecimiento para aplicarlos en cuero cabelludo.",
    details: [
      "Ayuda a disminuir caída, mejorar calidad del cabello y estimular folículos en determinados tipos de afinamiento capilar.",
      "Se indica en pacientes con caída difusa, efluvio o alopecia androgenética en evaluación dermatológica, muchas veces como parte de un plan combinado."
    ],
    image: "images/prppelo.png",
    imagePosition: "center center"
  }
];

const featuredTitles = new Set([
  "Ultherapy Prime",
  "Morpheus 8",
  "Arrugas en el tercio superior",
  "Radiesse",
  "Rinomodelación",
  "PRP (Plasma Rico en Plaquetas) facial"
]);

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const treatments = treatmentEntries.map((item) => ({
  id: `treatment-${slugify(item.title)}`,
  slug: slugify(item.title),
  title: item.title,
  badge: "",
  category: item.category,
  categoryAliases: item.categoryAliases || [],
  excerpt: item.excerpt,
  details: item.details,
  image: item.image || "",
  imagePosition: item.imagePosition || "",
  featured: featuredTitles.has(item.title)
}));
