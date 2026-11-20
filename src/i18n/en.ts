export default {
  site_title: "Tiesse Servizi | Engineering since 2001 · Tiesse Group",
  nav: {
    home: "Home",
    about: "About",
    projects: "Engineering",
    real_estate: "Development",
    news: "News",
    contact: "Contact"
  },
  hero: {
    eyebrow: "Engineering · Design · Construction supervision",
    subtitle: "We build value.",
    body: "Since 2001, design, structural engineering and construction supervision for residential, healthcare and public projects. The technical foundation behind every Tiesse Group project.",
    trust: "Independent. Technical. Accountable.",
    description: "Engineering since 2001: design, structural engineering, construction supervision and site safety for residential, healthcare and public buildings.",
    cta_text: "Explore projects"
  },
  key_facts: {
    items: [
      { value: "2001", label: "Established" },
      { value: "25+", label: "Years of engineering" },
      { value: "5", label: "Sectors" },
      // senza value: niente numero sopra le citta', la frase si legge da sola
      { value: "", label: "Based in Bologna, with our people on the ground in Los Angeles and Dubai." }
    ]
  },
  home_sections: {
    about_eyebrow: "About",
    about_title: "We think like engineers.",
    about_body: [
      "Design, structural engineering and construction supervision, with full technical control from the first drawing to handover.",
      "Every decision is driven by feasibility, cost discipline and time."
    ],
    about_closing: "No assumptions. No surprises. Just controlled execution.",
    technical_eyebrow: "Method · Engineering",
    technical_title: "Technical expertise drives every project.",
    technical_body: "Engineering expertise applied to complex environments.<br><br>From healthcare to residential and public sector, our projects are driven by technical control, design integration and BIM-based processes.<br><br><span class=\"tracking-[0.2em] uppercase text-xs text-gray-500\">Design · Engineering · BIM · Execution</span>",
    technical_cta: "Explore engineering",
    ct_banner_eyebrow: "Development",
    ct_banner_title: "Development within the group: C&T Developments.",
    ct_banner_body: "Where the group finds opportunities, takes them through entitlement and delivers them. The engineering is ours.",
    ct_banner_cta: "Go to C&T Developments"
  },
  founder: {
    eyebrow: "Tiesse Group",
    name: "Angelo Matteo Tucci",
    title: "Civil Engineer · Senior Partner, Tiesse Group",
    bio: [
      "Civil engineer with a Master's degree from the Università di Bologna. Co-owner of Tiesse Servizi since 2001 and Senior Partner of Tiesse Group.",
      "I approach real estate with an engineer's discipline: technical feasibility first, financial commitment second. My background spans structural design and construction supervision across complex commercial and residential developments in Central and Northern Italy.",
      "Today that foundation is what Tiesse Group brings to every project: the engineering stays in-house, from the first study to handover."
    ],
    linkedin: "https://www.linkedin.com/in/angelo-matteo-tucci-330380192/",
    linkedin_label: "Connect on LinkedIn",
    team_eyebrow: "Team",
    team: [
      { name: "Piero Giusti", title: "Senior Advisor · Institutional Relations & Business Development", linkedin: "" },
      { name: "Ignazio Celardi", title: "Structural Engineer · Partner, C&T Developments · Dubai", linkedin: "https://www.linkedin.com/in/ignazio-celardi-gistructe-8525a4209/" },
      { name: "Arturo Tucci", title: "Public Tenders & Cost Management", linkedin: "https://www.linkedin.com/in/arturo-tucci-81687b47/" },
      { name: "Andrea Calidori", title: "Structural Engineer · External Consultant", linkedin: "" }
    ]
  },
  servizi_tecnici: {
    eyebrow: "Technical services",
    title: "A single point of contact for the entire project cycle.",
    description: "We deliver structured project management through fully integrated technical services.",
    items: [
      "Technical-economic feasibility study",
      "Construction site planning and logistics",
      "Structural and architectural technical design",
      "Safety coordination and construction supervision",
      "Supplier, contractor, and specification management",
      "Work accounting, progress reports, and cost monitoring",
      "Public and private tenders",
      "Payment planning and document management"
    ],
    closing: "A single point of contact to manage all operational phases."
  },
  news: {
    eyebrow: "Insights",
    title: "Latest insights.",
    subtitle: "Projects, construction sites and market thinking, straight from the field.",
    linkedin_cta: "Follow on LinkedIn",
    linkedin_url: "https://www.linkedin.com/company/tiesse-group/",
    items: [
      {
        date: "11/2026",
        category: "Group",
        title: "C&T Developments, development within the group",
        description: "We find the opportunity, take it through entitlement and deliver it. Capital comes in once the planning risk is off the table.",
        href: "/ct-developments"
      },
      {
        date: "01/2026",
        category: "Project",
        title: "Premium residential projects in Sardinia",
        description: "High-end residential development in the Italian Mediterranean, structured with engineering control from feasibility to handover. Details under confidentiality.",
        href: "https://www.linkedin.com/company/tiesse-group/"
      },
      {
        date: "12/2025",
        category: "Group",
        title: "Tiesse Group: engineering and development under one brand",
        description: "The group brings engineering and real-estate development together under one brand.",
        href: "https://www.linkedin.com/company/tiesse-group/"
      },
      {
        date: "11/2025",
        category: "Vision",
        title: "Real Estate with an engineering mindset",
        description: "From feasibility to execution: a structured approach for tight control over quality, cost and schedule.",
        href: "https://www.linkedin.com/company/tiesse-group/"
      }
    ]
  },
  partners: {
    eyebrow: "Partners",
    title: "Selected partners.",
    body: "We work with selected construction firms, specialist trades and real-estate networks.",
    // Three pillars of every operation. Partner logos live inside the right
    // pillar. To add a partner: drop the logo file in public/partners/ and add
    // a line to that group's "logos" array. url is optional (partner website).
    // Without src (logo not received yet) the name is written out instead.
    groups: [
      {
        title: "Member of",
        // caption: il nome si legge scritto sotto il logo
        logos: [
          { name: "Italy-America Chamber of Commerce West", src: "/partners/iaccw-west.png", url: "https://www.iaccw.net/", caption: true },
        ]
      },
      {
        title: "Our Construction Partners",
        description: "Selected construction firms and specialist trades that deliver the projects with us.",
        logos: [
          { name: "Falco Costruzioni S.r.l.", src: "/partners/falco-costruzioni.png", h: 46 },
          { name: "EPM Costruzione e Servizi S.r.l.", src: "/partners/epm.png", h: 42 },
          { name: "AEC Costruzioni S.r.l.", src: "/partners/aec-costruzioni.svg", h: 30, url: "https://aeccostruzioni.com/" },
          { name: "Fargo S.r.l.", src: "/partners/fargo.png", h: 36, url: "https://fargoservizi.eu/" },
          { name: "SIDEL S.p.A.", src: "/partners/sidel.png", h: 40 },
          { name: "Edilizia Gio S.r.l.", src: "/partners/edilizia-gio.png", h: 38 },
        ]
      },
      {
        title: "Real-Estate Networks",
        description: "International brokerage and distribution channels for commercialization.",
        logos: [
          { name: "Desiderata Domus", src: "/partners/desiderata-domus.png", h: 44, url: "https://desideratadomus.it/" },
        ]
      }
    ]
  },
  contatti: {
    eyebrow: "Contact",
    title: "Start a conversation about your next project.",
    subtitle: "Every project begins with a conversation. Share your goals and timeline, we'll respond within 48 hours.",
    form: {
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send Message"
    }
  },
  footer: {
    copyright: "All rights reserved.",
    // Section headings
    company_info_title: "Company Information",
    contacts_title: "Contacts",
    // Labels
    email_label: "Email",
    pec_label: "PEC",
    partita_iva_label: "VAT Number",
    sede_label: "Headquarters",
    sede_us_label: "Los Angeles",
    // Values
    email_value: "info@tiesseservizi.eu",
    pec_value: "postmaster@pec.tiesseservizi.eu",
    partita_iva_value: "02241091202",
    sede_value: "Via Loderingo degli Andalò 5, 40124 Bologna",
    sede_us_value: "468 N Camden Dr, Beverly Hills, CA 90210",
    group_line: "Operating under the Tiesse Group brand",
    established: "Established 2001"
  },
  projects: {
    page_title: "Engineering, delivered with precision and control.",
    hero_eyebrow: "Selected Projects · Engineering Experience Since 2001",
    subtitle: "Selected projects demonstrating our approach to engineering, design integration and technical control across complex environments.",
    hero_tag: "Design · Engineering · BIM · Execution",
    categories_eyebrow: "Portfolio",
    categories_title: "Project sectors",
    categories_subtitle: "Engineering expertise applied across different sectors.",
    category_work_single: "project",
    category_work_plural: "projects",
    category_back: "All sectors",
    stats_eyebrow: "Track record",
    stats: [
      { value: "2001", label: "Founded" },
      { value: "25+", label: "Years of activity" },
      { value: "5", label: "Key sectors" },
      { value: "IT", label: "Operating region" }
    ],
    technical_eyebrow: "Track Record",
    technical_title: "Realized work, by sector.",
    technical_subtitle: "Every commission is a technical file: client, year, site, role, outcome. Grouped by sector so the depth of technical experience reads at a glance.",
    sectors: {
      healthcare: { label: "Healthcare", description: "Design and delivery of high-complexity healthcare facilities, ensuring regulatory compliance, precision and operational continuity." },
      "historic-renovation": { label: "Heritage renovation", description: "Structural and architectural interventions on existing and heritage buildings, integrating technical upgrades with functional transformation." },
      "energy-retrofit": { label: "Energy efficiency", description: "Targeted technical interventions to improve building performance through energy and systems optimization." },
      "residential-development": { label: "Residential", description: "Architectural and structural design of residential buildings, from concept development to construction." },
      "public-sector": { label: "Public sector", description: "Delivery of projects within regulated environments, managing technical complexity and administrative requirements." }
    },
    no_projects: "No projects available at the moment.",
    back_to_projects: "All work",
    detail_brief: "Brief",
    detail_approach: "Approach",
    detail_outcome: "Outcome",
    detail_gallery: "Gallery",
    detail_facts: "Technical file",
    specs_area: "Area",
    specs_budget: "Budget",
    specs_duration: "Duration",
    specs_client: "Client",
    specs_features: "Features",
    specs_year: "Year",
    specs_location: "Location",
    specs_category: "Sector"
  },
  gateway: {
    page_title: "Tiesse Group | Real Estate Development, Built on Engineering",
    page_description: "Tiesse Group brings together Tiesse Servizi, engineering since 2001, and C&T Developments, a platform for real estate across the Mediterranean.",
    eyebrow: "Tiesse Group",
    tagline: "Real Estate Development, Built on Engineering",
    title_html: "Real estate development,<br/><em>built on engineering.</em>",
    lede: "Two sides, one method: the engineers who study a project are the ones who see it built.",
    left_door: "Engineering, design and construction supervision. Since 2001.",
    right_door: "Development: we find the opportunity, entitle it and deliver it.",
    left: {
      name_strong: "TIESSE",
      name_accent: "SERVIZI",
      sub: "Operating under the Tiesse Group brand",
      line: "Engineering",
      meta: "Since 2001",
      cta: "Enter"
    },
    right: {
      alt: "C&T Developments",
      tagline: "Engineering-driven real estate development",
      cta: "Discover"
    },
    cities: "Bologna (Italy) · Los Angeles (USA) · Dubai (UAE)",
    lang_label: "IT"
  },
  ct: {
    page_title: "C&T Developments | Tiesse Group",
    page_description: "C&T Developments, a platform for real estate across the Mediterranean.",
    name_strong: "C&T",
    name_accent: " DEVELOPMENTS",
    tagline: "Engineering-driven real estate development",
    branch: "Part of Tiesse Group",
    back: "Back",
    nav_back: "Tiesse Group",

    nav_contact: "Contact",

    longevity: {
      nav: "Longevity",
      link: "Longevity concept",
      page_title: "Longevity | C&T Developments",
      page_description: "A new type of villa compound under study: Mediterranean places where the body recovers, and a building engineered to keep it that way.",
      hero_cap_a: "Under study",
      hero_cap_b: "A new type of villa compound",
      title: "Longevity,",
      title_em: "by design.",
      lede: "In the Mediterranean the setting is not scenery. It is the active ingredient.",
      manifesto_a: "We are studying a new type of villa compound: places where climate, air, light and water let the body ",
      manifesto_em: "recover",
      manifesto_b: ", and a building engineered to keep it that way.",
      heading: "The idea",
      sub: "A new type of compound, under study.",
      body: [
        "We are studying a new type of villa compound built on one idea: in the Mediterranean the setting is not scenery, it is the active ingredient. Climate, air, light, water and food are what let the body recover, and we look for the places where that has been measured. Sardinia is home to one of the world's longest-lived communities.",
        "The building does the rest. Each compound is engineered like a clinic and lived in like a private house, with a spa at its heart, shared or in each house, and around it an envelope designed to stay clean: filtered air, filtered water, natural materials, real darkness at night."
      ],
      claim_strong: "Technology here is not a promise of years.",
      claim_rest: " It is what lets us build a healthy, low-load environment and keep it that way, under one protocol, with a reference physician.",
      figure_caption: "A private longevity level beneath a villa: infrared sauna, cold plunge, red light, training.",
      spa_title: "In the spa",
      spa_items: [
        "Finnish sauna and infrared sauna",
        "Cold plunge and cryotherapy",
        "Hot and cold contrast circuit",
        "Steam room and salt room",
        "Red and near-infrared light therapy",
        "Training and recovery room",
        "Hyperbaric chamber, under medical supervision",
        "Assessment room, with a reference physician"
      ],
      building_title: "In the building",
      building_items: [
        "Bedrooms wired rather than wireless, for quieter nights",
        "Filtered air, with CO2 and humidity under control",
        "Low-emission natural materials",
        "Filtered water; low-chlorine pools treated with ozone and UV",
        "Circadian lighting, and real darkness for sleep",
        "Acoustic insulation: silence as a specification"
      ],
      note_strong: "A format, not a service.",
      note_rest: " The same standard applies to every compound we develop in the Mediterranean places we select."
    },

    hero_eyebrow: "Vision · Future · Value",
    hero_title: "Exclusive places, one platform.",
    hero_title_html: "Exclusive places, <em>one platform.</em>",
    manifesto_html: "Villas and compounds built around longevity, with a spa and a hyperbaric chamber under medical supervision. <em>A place built for living well.</em>",
    hero_lede: "We find the opportunity, take it through entitlement and deliver it. Capital comes in once the planning risk is off the table.",
    hero_intro: "C&T Developments selects real estate projects in Italy and across the Mediterranean, in places where nature lets people live long and well. Sardinia is one of the world's five original Blue Zones.",
    based: "Based in Bologna, with our people on the ground in Los Angeles and Dubai.",

    value: {
      eyebrow: "Value",
      title: "Value that lasts",
      body: [
        "We choose every project twice: for the place, and for the value it can hold. Value is created at entitlement, in places where planning limits supply, and kept by the quality of what we deliver."
      ]
    },

    approach: {
      num: "02",
      eyebrow: "Approach",
      title: "How we work",
      steps: [
        { num: "01", title: "Find and study", body: "Planning, technical feasibility, costs and market are verified before any financial commitment." },
        { num: "02", title: "Entitle", body: "We take the project through entitlement. That is where the biggest risk, planning, comes off the table, and where value is created." },
        { num: "03", title: "Deliver", body: "Each project sits in its own dedicated vehicle. We know construction from the inside: design, cost planning, tendering, construction supervision and site safety have been our work for twenty-five years. The works are carried out by selected contractors from our network, with price and schedule set by contract; we control cost and quality ourselves, from the first drawing to handover." }
      ]
    },

    concepts: {
      num: "03",
      eyebrow: "Concepts",
      title: "What we are studying",
      intro: "Concepts developed by our team. Locations and details are shared under confidentiality.",
      label: "Concept",
      more: "View concept",
      back: "All concepts",
      region_order: ["sardinia", "corsica", "tuscany", "aeolian", "emilia"],
      region_labels: { sardinia: "Sardinia", corsica: "Corsica", tuscany: "Tuscany", aeolian: "Sicily", emilia: "Emilia-Romagna" },
      region_count_one: "concept in study",
      region_count_many: "concepts in study",
      counters: ["5 concepts in study", "4 villa compounds", "1 boutique residence"],
      // hidden: true tiene la scheda fuori dalla pagina finche' non arriva l'ok.
      items: [
        {
          key: "six-villas",
          region: "sardinia",
          title: "Six villas",
          place: "Northern Sardinia, near the Costa Smeralda",
          body: "Six villas with gardens and pools, set around shared grounds.",
          lede: "Six houses, drawn as one masterplan.",
          facts: [
            { label: "Typology", value: "Six detached villas" },
            { label: "Shared", value: "Grounds and outdoor lounge" },
            { label: "Stage", value: "Concept, under study" }
          ],
          place_title: "The place",
          place_body: "Northern Sardinia, set back from the coast and within reach of the Costa Smeralda: olive trees, dry-stone walls and long views, in a stretch where planning rules keep building rare.",
          idea_title: "The idea",
          idea_body: [
            "Six villas, each with its own garden, pool and private wellness, drawn as one masterplan around shared grounds. Not six houses side by side, but a small place with a centre."
          ],
          stage: "Concept stage. Feasibility, planning and costs are under study. Location and details are shared under confidentiality.",
          hidden: false
        },
        {
          key: "four-villas",
          region: "sardinia",
          title: "Four villas",
          place: "Northern Sardinia, near the Costa Smeralda",
          body: "Four villas, each with its own pool, garden, private spa and gym.",
          lede: "Four houses, each with its own spa.",
          facts: [
            { label: "Typology", value: "Four two-storey villas" },
            { label: "Wellness", value: "Private spa and gym" },
            { label: "Stage", value: "Concept, under study" }
          ],
          place_title: "The place",
          place_body: "Northern Sardinia, on the doorstep of the Costa Smeralda: olive trees, dry-stone walls and open country, in a stretch where planning rules keep building rare.",
          idea_title: "The idea",
          idea_body: [
            "Four two-storey villas, each in its own garden with a pool and a pergola, and a lower floor given over to recovery: a private spa with sauna, infrared and cold plunge, and a gym.",
            "Fewer houses, more land around each one."
          ],
          stage: "Concept stage. Feasibility, planning and costs are under study. Location and details are shared under confidentiality.",
          hidden: false
        },
        {
          key: "ten-villas",
          region: "sardinia",
          title: "Ten villas",
          place: "Northern Sardinia, near the Costa Smeralda",
          body: "Ten sea-view villas, each with its own wellness level: gym, sauna and cold room.",
          lede: "Ten houses on a slope, each one facing the water.",
          facts: [
            { label: "Typology", value: "Ten detached villas" },
            { label: "Wellness level", value: "Gym, sauna, cold room" },
            { label: "Stage", value: "Concept, under study" }
          ],
          place_title: "The place",
          place_body: "Northern Sardinia, within reach of the Costa Smeralda: a slope above the water, where the sea takes the whole horizon.",
          idea_title: "The idea",
          idea_body: [
            "Ten villas, placed so that no house looks onto another. Each has a lower level given over to recovery: gym, sauna and cold room around a sunken courtyard, open to the sea in the lower houses.",
            "Materials, services and construction follow the same standard as the rest of our compounds."
          ],
          stage: "Concept stage. Feasibility, planning and costs are under study. Location and details are shared under confidentiality.",
          hidden: false
        },
        {
          key: "compound",
          region: "sardinia",
          title: "Compound with spa",
          place: "Northern Sardinia, south of the Costa Smeralda",
          body: "Nine single-storey villas among the olive trees, each in its own garden with a loggia and a pool, and a shared spa at the entrance.",
          lede: "Nine villas among the olive trees, and a spa.",
          facts: [
            { label: "Typology", value: "Nine single-storey villas" },
            { label: "Shared", value: "Spa and gym" },
            { label: "Stage", value: "Concept, under study" }
          ],
          place_title: "The place",
          place_body: "Northern Sardinia, inland and south of the Costa Smeralda: an olive grove on gently sloping ground, with the hills on the horizon.",
          idea_title: "The idea",
          idea_body: [
            "Nine single-storey villas laid out among the olive trees, each in its own garden with a loggia and a pool. Living room, kitchen and bedrooms open onto the garden; the olive grove stays as it is.",
            "At the entrance, a shared spa set into the ground under a planted roof: gym, sauna, infrared, cold plunge and a hyperbaric chamber under medical supervision."
          ],
          stage: "Concept stage. Feasibility, planning and costs are under study. Location and details are shared under confidentiality.",
          hidden: false
        },
        {
          key: "boutique-residence",
          region: "sardinia",
          title: "Boutique residence",
          place: "North coast of Sardinia",
          body: "Eleven residences and a lounge with a restaurant, in place of an existing building on a granite coast.",
          lede: "An existing building, rebuilt as eleven residences and a restaurant.",
          facts: [
            { label: "Typology", value: "Eleven residences" },
            { label: "Shared", value: "Lounge, restaurant, spa" },
            { label: "Stage", value: "Concept, under study" }
          ],
          place_title: "The place",
          place_body: "The north coast of Sardinia, a granite shore under landscape protection, where what already exists is worth more than what could be added.",
          idea_title: "The idea",
          idea_body: [
            "The existing building is taken down and rebuilt as eleven residences, each with a terrace or a garden.",
            "Around them, a lounge with a restaurant open to the public, a garden with a pool, and a small spa with a gym. The architecture stays low and local: granite, lime, timber, and planting that belongs to the place."
          ],
          stage: "Concept stage. Feasibility, planning and costs are under study. Location and details are shared under confidentiality.",
          hidden: false
        }
      ]
    },

    where: {
      num: "04",
      eyebrow: "Where we look",
      title: "The Mediterranean first, then the city.",
      blocks: [
        { title: "The Mediterranean", body: "Sardinia, Corsica, Tuscany and Sicily. Where planning rules make land scarce and value durable." },
        { title: "The city", body: "Bologna and Emilia-Romagna. Regeneration and reuse of existing buildings, where the risk is technical and our engineering prices it in-house." }
      ],
      tiles: ["Sardinia", "Corsica", "Tuscany", "Sicily", "Emilia-Romagna"]
    },

    capital: {
      num: "05",
      eyebrow: "Capital",
      title: "How we work with capital partners",
      body: [
        "Every project sits in its own vehicle, with its risk ring-fenced from the others.",
        "We structure projects for banks, private investors, family offices and regulated platforms. Capital commits once the planning risk is off the table.",
        "We underwrite every project conservatively and test it against lower prices and higher costs before any capital commits. Figures are shared on request, one to one; names and locations under a confidentiality agreement."
      ]
    },

    group: {
      num: "06",
      eyebrow: "The group",
      title: "Inside Tiesse Group",
      body: [
        "Tiesse Servizi brings twenty-five years of design, structural engineering and construction supervision. On every project the two sides work together: one finds and structures, the other designs and controls.",
        "Both operate under the Tiesse Group brand."
      ],
      cta: "Go to Tiesse Servizi"
    },

    people: {
      num: "07",
      eyebrow: "People",
      title: "Who runs it",
      items: [
        { name: "Angelo Matteo Tucci", role: "Civil Engineer · Senior Partner", place: "Bologna and Los Angeles", linkedin: "https://www.linkedin.com/in/angelo-matteo-tucci-330380192/" },
        { name: "Ignazio Celardi", role: "Structural Engineer · Partner", place: "Dubai", linkedin: "https://www.linkedin.com/in/ignazio-celardi-gistructe-8525a4209/" }
      ]
    },

    closing_title: "Start a conversation.",
    closing_body: "Tell us what you are looking at. We reply within 48 hours.",
    closing_cta: "Write to us",
    closing_email: "a.tucci@tiesseservizi.eu",

    footer_line: "C&T Developments is part of Tiesse Group.",
    legal: "Tiesse Servizi S.a.s. · VAT 02241091202 · Via Loderingo degli Andalò 5, 40124 Bologna",
    disclaimer: "Concepts are illustrative and under study. Nothing on this website is an offer or solicitation to buy or sell any security or interest in any project.",
    cities: "Bologna · Los Angeles · Dubai"
  }
};
