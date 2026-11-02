import en from './en';

// Spagnolo: per ora copre il ramo C&T Developments, che e' la parte che
// Angelo manda fuori. Tutto il resto resta in inglese finche' non si
// decide di tradurre anche il sito Tiesse Servizi.
const ct = {
  page_title: "C&T Developments | Tiesse Group",
  page_description: "C&T Developments es la rama de Tiesse Group dedicada al desarrollo inmobiliario.",
  name_strong: "C&T",
  name_accent: " DEVELOPMENTS",
  tagline: "Engineering-driven real estate development",
  branch: "Una rama de Tiesse Group",
  back: "Volver",
  nav_back: "Tiesse Group",
  nav_contact: "Contacto",

  longevity: {
    nav: "Longevity",
    page_title: "Longevity | C&T Developments",
    page_description: "Una nueva tipología de conjunto de villas en estudio: lugares del Mediterráneo donde el cuerpo se recupera, y un edificio construido para mantenerlos así.",
    hero_cap_a: "En estudio",
    hero_cap_b: "Una nueva tipología de conjunto de villas",
    title: "Longevity,",
    title_em: "by design.",
    lede: "En el Mediterráneo el lugar no es el decorado. Es el principio activo.",
    manifesto_a: "Estudiamos una nueva tipología de conjunto de villas: lugares donde el clima, el aire, la luz y el agua permiten que el cuerpo se ",
    manifesto_em: "recupere",
    manifesto_b: ", y un edificio construido para mantenerlos así.",
    heading: "La idea",
    sub: "Una nueva tipología de conjunto, en estudio.",
    body: [
      "Estudiamos una nueva tipología de conjunto de villas construida sobre una sola idea: en el Mediterráneo el lugar no es el decorado, es el principio activo. El clima, el aire, la luz, el agua y la comida son lo que permite al cuerpo recuperarse, y buscamos los lugares donde eso se ha medido. En Cerdeña vive una de las comunidades más longevas del mundo.",
      "El resto lo hace el edificio. Cada conjunto se proyecta como una clínica y se habita como una casa privada, con el spa en el centro, común o en cada casa, y alrededor una envolvente pensada para mantenerse limpia: aire filtrado, agua filtrada, materiales naturales, oscuridad real por la noche."
    ],
    claim_strong: "Aquí la tecnología no promete años de vida.",
    claim_rest: " Es lo que nos permite construir un ambiente saludable y de baja carga, y mantenerlo así, con un solo protocolo y un médico de referencia.",
    figure_caption: "El nivel longevity privado bajo una villa: sauna de infrarrojos, baño frío, luz roja, entrenamiento.",
    spa_title: "En el spa",
    spa_items: [
      "Sauna finlandesa y sauna de infrarrojos",
      "Baño frío y crioterapia",
      "Circuito de contraste frío y calor",
      "Baño de vapor y sala de sal",
      "Luz roja e infrarroja",
      "Sala de entrenamiento y recuperación",
      "Sala de valoración, con un médico de referencia"
    ],
    building_title: "En el edificio",
    building_items: [
      "Dormitorios cableados en lugar de inalámbricos, para noches más tranquilas",
      "Aire filtrado, con CO2 y humedad controlados",
      "Materiales naturales de baja emisión",
      "Agua filtrada; piscinas de bajo cloro, tratadas con ozono y UV",
      "Luz circadiana, y oscuridad real para dormir",
      "Aislamiento acústico: el silencio como especificación"
    ],
    note_strong: "Un formato, no un servicio.",
    note_rest: " El mismo estándar se aplica a cada conjunto que desarrollamos en los lugares del Mediterráneo que elegimos."
  },

  hero_eyebrow: "Visión · Futuro · Valor",
  hero_title: "Anticipamos el valor.",
  hero_title_html: "Anticipamos el <em>valor.</em>",
  manifesto_html: "Desarrollamos donde la escasez es una cuestión de <em>licencias</em>, no de suelo. Un plan maestro, los espacios comunes, la calidad del conjunto. No villas una al lado de otra, sino <em>un pequeño trozo de pueblo.</em>",
  hero_lede: "Encontramos la oportunidad, la llevamos hasta la licencia y la ejecutamos. El capital entra cuando el riesgo urbanístico ya se ha eliminado.",
  hero_intro: "C&T Developments nace de una manera de mirar un mundo que cambia: ciudades que se transforman, formas de vivir que se reescriben, lugares que vuelven a importar.",

  vision: {
    num: "01",
    eyebrow: "Visión",
    title: "Hacia dónde vamos",
    body: [
      "Desarrollamos donde la escasez es una cuestión de licencias, no de suelo: en la costa, donde el planeamiento decide qué se puede construir, y en la ciudad, donde los edificios existentes esperan una nueva vida.",
      "Llevamos la disciplina del desarrollo urbano donde casi nunca se aplica: un plan maestro, los espacios comunes, la calidad del conjunto.",
      "Nuestro horizonte es una plataforma: un equipo en el que el capital confía antes incluso de ver la operación concreta."
    ]
  },

  approach: {
    num: "02",
    eyebrow: "Método",
    title: "Cómo leemos una operación",
    steps: [
      { num: "01", title: "Buscar y estudiar", body: "Urbanismo, viabilidad técnica, costes y mercado se verifican antes de cualquier compromiso financiero." },
      { num: "02", title: "Licenciar", body: "Llevamos la operación hasta la licencia. Ahí es donde se elimina el riesgo y se crea el valor." },
      { num: "03", title: "Ejecutar", body: "Cada operación tiene su propio vehículo. La construcción se encarga a empresas seleccionadas de nuestra red: somos ingenieros, no constructores. Coste y plazo se controlan desde el primer plano hasta la entrega." }
    ]
  },

  concepts: {
    num: "03",
    eyebrow: "Concepts",
    title: "Qué estamos estudiando",
    intro: "Concepts desarrollados por nuestro equipo. Las ubicaciones y los detalles se comparten bajo confidencialidad.",
    label: "Concept",
    more: "Ver el concept",
    back: "Todos los concepts",
    region_order: ["sardinia", "corsica", "tuscany", "aeolian", "emilia"],
    region_labels: { sardinia: "Cerdeña", corsica: "Córcega", tuscany: "Toscana", aeolian: "Islas Eolias", emilia: "Emilia-Romaña" },
    region_count_one: "concept en estudio",
    region_count_many: "concepts en estudio",
    counters: ["3 concepts en estudio", "16 residencias", "1 boutique hotel"],
    items: [
      {
        key: "six-villas",
        region: "sardinia",
        title: "Seis villas",
        place: "Norte de Cerdeña, cerca de la Costa Smeralda",
        body: "Seis villas con jardín y piscina, dispuestas alrededor de un club común.",
        lede: "Seis casas, dibujadas en un solo plan.",
        facts: [
          { label: "Tipología", value: "Seis villas independientes" },
          { label: "En común", value: "Parque y lounge al aire libre" },
          { label: "Estado", value: "Concept, en estudio" }
        ],
        place_title: "El lugar",
        place_body: "Norte de Cerdeña, algo retirado de la costa y cerca de la Costa Smeralda: olivos, muros de piedra seca y vistas largas, en un tramo donde el planeamiento mantiene escaso lo construido.",
        idea_title: "La idea",
        idea_body: [
          "Seis villas, cada una con su jardín, piscina y wellness privado, dibujadas en un solo plan alrededor de espacios comunes. No seis casas una al lado de otra, sino un pequeño lugar con un centro."
        ],
        stage: "Fase de concept. Viabilidad, urbanismo y costes están en estudio. La ubicación y los detalles se comparten bajo confidencialidad.",
        hidden: false
      },
      {
        key: "hotel",
        region: "sardinia",
        title: "Boutique hotel",
        place: "Costa norte de Cerdeña",
        body: "Volúmenes existentes sobre una costa de granito, reunidos en un hotel pequeño.",
        lede: "Lo que ya está construido, reunido en un hotel pequeño.",
        facts: [
          { label: "Tipología", value: "Boutique hotel" },
          { label: "En común", value: "Restaurante, jardín, piscina" },
          { label: "Estado", value: "Concept, en estudio" }
        ],
        place_title: "El lugar",
        place_body: "La costa norte de Cerdeña, un litoral de granito bajo protección paisajística, donde lo que ya existe vale más que lo que se podría añadir.",
        idea_title: "La idea",
        idea_body: [
          "El proyecto no añade volumen. Reorganiza los edificios que ya están en un único hotel pequeño, con un restaurante, un jardín y una piscina.",
          "La arquitectura se mantiene baja y local: granito, cal, madera y plantas que pertenecen al lugar."
        ],
        stage: "Fase de concept. Viabilidad, urbanismo y costes están en estudio. La ubicación y los detalles se comparten bajo confidencialidad.",
        hidden: false
      },
      {
        key: "ten-villas",
        region: "sardinia",
        title: "Diez villas",
        place: "Norte de Cerdeña, cerca de la Costa Smeralda",
        body: "Diez villas con vistas al mar, cada una con su planta de bienestar: gimnasio y sauna abiertos al mar.",
        lede: "Diez casas en una ladera, cada una girada hacia el agua.",
        facts: [
          { label: "Tipología", value: "Diez villas independientes" },
          { label: "Nivel wellness", value: "Gimnasio, sauna, sala de frío" },
          { label: "Estado", value: "Concept, en estudio" }
        ],
        place_title: "El lugar",
        place_body: "Norte de Cerdeña, cerca de la Costa Smeralda: una ladera sobre el agua, donde el mar ocupa todo el horizonte.",
        idea_title: "La idea",
        idea_body: [
          "Diez villas, dispuestas de modo que ninguna casa mire dentro de otra. Cada una tiene un nivel inferior dedicado a la recuperación: gimnasio, sauna y sala de frío alrededor de un patio hundido, abierto al mar en las casas más bajas.",
          "Materiales, instalaciones y construcción siguen el mismo estándar que el resto de nuestros conjuntos."
        ],
        stage: "Fase de concept. Viabilidad, urbanismo y costes están en estudio. La ubicación y los detalles se comparten bajo confidencialidad.",
        hidden: false
      },
      {
        key: "sixteen-villas",
        region: "sardinia",
        title: "Dieciséis villas",
        place: "Cerdeña",
        body: "Una pequeña aldea de dieciséis villas entre olivos, con servicios compartidos.",
        lede: "Una pequeña aldea entre olivos.",
        facts: [
          { label: "Tipología", value: "Dieciséis villas" },
          { label: "En común", value: "Servicios y parque" },
          { label: "Estado", value: "Concept, en estudio" }
        ],
        place_title: "El lugar",
        place_body: "Cerdeña interior, entre olivos, sobre un terreno que ya tiene la forma de un pequeño asentamiento.",
        idea_title: "La idea",
        idea_body: [
          "Dieciséis casas planteadas como una aldea y no como una parcelación: calles cortas, servicios compartidos y el olivar dejado como está.",
          "Cada casa está pensada para vivirse todo el año, no solo en agosto."
        ],
        stage: "Fase de concept. Viabilidad, urbanismo y costes están en estudio. La ubicación y los detalles se comparten bajo confidencialidad.",
        hidden: true
      }
    ]
  },

  where: {
    num: "04",
    eyebrow: "Dónde miramos",
    title: "Dos piernas, un método.",
    blocks: [
      { title: "La costa", body: "Cerdeña, Córcega, Toscana e Islas Eolias. Donde el planeamiento hace escaso el suelo y duradero el valor." },
      { title: "La ciudad", body: "Bolonia y Emilia-Romaña. Regeneración y reutilización de lo construido, donde el riesgo es técnico y nuestra ingeniería lo valora en casa." },
      { title: "El capital", body: "Trabajamos con socios en Italia, Estados Unidos y el Golfo." }
    ],
    tiles: ["Cerdeña", "Córcega", "Toscana", "Islas Eolias", "Emilia-Romaña"]
  },

  capital: {
    num: "05",
    eyebrow: "Capital",
    title: "Cómo trabajamos con los socios financieros",
    body: [
      "Cada operación vive dentro de su propio vehículo, con el riesgo separado de las demás.",
      "Trabajamos con bancos, inversores privados, family offices y plataformas reguladas. El capital se compromete cuando el riesgo urbanístico ya se ha superado.",
      "Los dosieres técnicos se comparten bajo confidencialidad."
    ]
  },

  group: {
    num: "06",
    eyebrow: "El grupo",
    title: "Dentro de Tiesse Group",
    body: [
      "Tiesse Servizi aporta veinticinco años de proyecto, ingeniería estructural y dirección de obra. En cada operación los dos lados trabajan juntos: uno encuentra y estructura, el otro proyecta y controla.",
      "Ambos operan bajo la marca Tiesse Group."
    ],
    cta: "Ir a Tiesse Servizi"
  },

  people: {
    num: "07",
    eyebrow: "Personas",
    title: "Quién la dirige",
    items: [
      { name: "Angelo Matteo Tucci", role: "Ingeniero Civil · Senior Partner", place: "Bolonia y Los Ángeles" },
      { name: "Ignazio Celardi", role: "Ingeniero Estructural · Partner", place: "Dubái" }
    ]
  },

  closing_title: "Empecemos a hablar.",
  closing_body: "Cuéntanos qué estás mirando. Respondemos en 48 horas.",
  closing_cta: "Escríbenos",
  closing_email: "a.tucci@tiesseservizi.eu",

  footer_line: "C&T Developments es una rama de Tiesse Group.",
  legal: "Tiesse Servizi S.a.s. · CIF 02241091202 · Via Loderingo degli Andalò 5, 40124 Bolonia",
  cities: "Bolonia · Los Ángeles · Dubái"
};

const nav = { ...en.nav, projects: "Ingeniería", real_estate: "Desarrollo" };

export default { ...en, nav, ct };
