document.addEventListener('DOMContentLoaded', () => {

  const STORAGE_KEY = 'site-lang';

  const en = {
    navAbout: "About",
    navStack: "Stack",
    navProjects: "Projects",
    navContact: "Contact",
    navBurgerAria: "Open menu",

    heroSubheadline: 'Where Data Meets <span class="serif-italic">Culture</span> &amp; Generative AI.',
    heroPitch: "With 3.5 years of experience in Marketing Operations & Content Strategy at Susu, I tell stories through image, video and social media, using data to frame every decision and build high-impact campaigns and brand experiences.",
    heroCta: "Explore My Projects",

    statRacineLabel: "views on RACINE",
    statRacineAnnotation: "and that's just the beginning",
    statImpressions: "impressions generated",
    statCreatown: "Creatown editions",
    statAds: "Meta & TikTok Ads campaigns",

    aboutKicker: "Foundations & Background",
    aboutTitle: 'A dual culture: <span class="serif-italic">Data Marketing</span> &amp; Creative Direction',
    genzStatement: '<span class="serif-italic">A product of the generation that grew up on social media</span>, I started early questioning how it all works: why content goes viral, how a brand builds itself online, what makes an audience connect with one story over another. That curiosity became a career: I now turn that instinct into decisions, always validated by data to make sure I make the right call.',
    menubarItems: "2 items",
    openEducationAria: "Open Education folder",
    educationLabel: "Education",
    openExperienceAria: "Open Experience folder",
    experienceLabel: "Experience",

    stackKicker: "Tools & Methods",
    stackNote: "Three pillars, one instinct: data frames the decision, image and video give it a face, storytelling brings the brand to life. Click a card to see how it plays out day to day.",
    stackCard1Desc: "Turning raw data into clear marketing decisions the whole team can share and act on.",
    toolExcel: "Excel (Pivot Tables)",
    inPractice: "In practice",
    stackCard1More: "I connect Meta Ads campaign results to business goals, build clear reporting for marketing and leadership teams, and structure the data so it stays reliable over time.",
    stackCard2Desc: "Designing custom AI assistants and automated processes that genuinely save teams time.",
    stackCard2More: "I design AI assistants for specific needs (speeding up content production, making analysis more reliable), then automate the workflows around them so they hold up over time. I also train teams so AI becomes a habit, not a gadget.",
    stackCard3Desc: "Telling a brand's story through photo, video and social media, with a clear voice that makes the complex accessible.",
    toolPhotoVideo: "Photo & Video",
    toolSocial: "Social Media",
    stackCard3More: "I design the photo and video direction for my projects (RACINE, Les Ateliers Creatown, OUI OUI B'DAY), write the content that carries the brand's voice on social media, and translate technical topics into messages that land with both B2B and B2C audiences, always with acquisition in mind.",

    projectsKicker: "Selection",
    projectsTitle: "Projects",
    searchPlaceholder: "Search a project, a tag...",
    displayAria: "Display",
    gridViewAria: "Grid view",
    listViewAria: "List view",
    episodesBadge: "3 episodes",
    racineLoc: "3 countries · Cultural Storytelling",
    bdayLoc: "20 years of B'DAY · Beyoncé",
    noResults: "No project matches your search.",

    available: "Immediately available",
    footerTitle: 'What if I were your next <span class="serif-italic">creative strategist</span>?<br>Let\'s talk',
    contactBtn: "Get in touch",
    viewCvBtn: "View my CV",
    copyright: "© 2026 Serena Mandjeck. Made with care.",

    educationApp: "Education.app",
    mscChip1: "Digital Strategy",
    mscChip2: "Digital Project Management",
    mscChip4: "Data & Digital Marketing",
    mscChip5: "Creative Process & Graphic Design",
    mscChip6: "Scoring & Predictive Marketing",
    mscChip7: "Targeting & Data Marketing",
    bachelorDesc: "Bachelor's in Digital Marketing",
    bachChip2: "E-business & Digital Marketing",
    bachChip3: "Social Media Management",

    experienceApp: "Experience.app",
    downloadCvBtn: "Download my CV (PDF)",
    chip3ans: "3 years",
    chipAlternance: "Apprenticeship",
    susuBlurb: "A healthtech company that helps the diaspora take care of their loved ones despite the distance.",
    mission1a: "Managing around thirty Meta Ads campaigns",
    mission1b: "Customer database segmentation",
    mission1c: "Managing email marketing campaigns",
    mission1d: "Creating content for social platforms (Instagram, TikTok, Facebook, LinkedIn)",
    mission1e: "Producing video ads for lead generation (Meta)",
    mission1f: "Building around ten No-Code automation workflows (Make, Notion, Typeform)",
    mission1g: "Producing around thirty posts in advance for owned content, generating over 1M impressions",
    bilan1: "<strong>Mission outcome:</strong> an end-to-end marketing value chain, built so data informs every content decision.",
    susuCddDates: "Sept 2025 — Mar 2026",
    chip6mois: "6 months",
    chipCdd: "Fixed-term contract",
    momIA: "Marketing Operations & AI",
    mission2a: "Structuring automation workflows around AI tools so they fit into daily use",
    mission2b: "Training teams on generative AI, turning it into a habit rather than a novelty",
    bilan2: "<strong>Mission outcome:</strong> several months gained on article writing and social post production, thanks to generative AI turned into a concrete operational advantage.",
    inParallel: "In parallel",
    creativeCollective: "Creative collective",
    lllkBlurb: "A young creative agency that makes creative events accessible and brings creative people together, whatever their budget.",
    mission3a: "Designing and running 3 editions of Les Ateliers Creatown (a 4th in the works), bringing together an average of fifty participants",
    mission3b: "Defining the collective's content strategy and editorial line",
    mission3c: "Creating content around events (stories, vlogs, photos) to extend the experience on social media",
    mission3d: "Producing creative content for OUI OUI B'DAY (festival), coming out in September 2026",
    bilan3: "<strong>Mission outcome:</strong> a strategic role in the creative structuring of a fast-growing collective, already with 3 editions of Les Ateliers Creatown to its name.",
    totalExp: "3.5 years of combined experience",

    racineLead: "Celebrating cultural heritage through a contemporary visual series, told across three episodes: three countries, three identities.",
    episode01: "Episode 01",
    haiti: "Haiti",
    episode02: "Episode 02",
    jamaica: "Jamaica",
    episode03: "Episode 03",
    senegal: "Senegal",
    racineIntro1: "First chapter: celebrating Haiti's cultural heritage and history through a contemporary, deeply narrative visual series.",
    racineIntro2: "Second chapter: extending the exploration of the diaspora's cultural heritage through Jamaica's history and traditions.",
    racineIntro3: "Third chapter: celebrating Senegal's cultural heritage and history through a contemporary, deeply narrative visual series.",
    viewPhotoIg: "View photo on Instagram",
    viewVideoIg: "View video on Instagram",
    racineStatLabel: "Instagram views on the latest post",
    finalOutput: "Final output",
    approach: "Approach",
    racineApproach: "Art direction built as a bridge between heritage and modernity: a color palette inspired by local textiles and landscapes, narrative photo direction, and an editorial grid designed for social-first format, carried across all three episodes.",
    role: "Role",
    racineRole: "Visual strategy, editorial direction and content production oversight, from concept to release, across all three episodes.",
    racineImpact: "A consistent visual identity that showcases each country's cultural richness for a contemporary, connected audience.",

    creatownLead: "Democratizing artistic creation in an immersive, urban setting designed to spark community engagement.",
    viewHighlightIg: "View highlight on Instagram",
    viewVideoEd3Ig: "View video (edition 3) on Instagram",
    editionsLabel: "editions completed",
    participantsLabel: "average participants",
    nextEditionLabel: "next edition in the works",
    posters: "Posters",
    eventPhotos: "Event photos",
    creatownApproach: "Designing a physical brand experience where every workshop becomes shareable: urban set design, a route built for photo/video capture, and real-time community activation.",
    creatownRole: "Designing the event experience, community-building strategy, and activating participant-generated content.",
    creatownImpact: "3 editions completed so far, bringing together an average of fifty participants, with a 4th in the works: proof of a format that has found its audience.",

    podcastLead: "Revealing the behind-the-scenes of the Parisian creative scene through a multi-format media ecosystem (long-form → short-form).",
    viewAnnouncementIg: "View announcement on Instagram",
    podcastStatus: "1st episode available, more of the series coming soon",
    bts: "Behind the scenes",
    podcastApproach: "Building an editorial engine designed for repurposing: long-form shoots reworked into a cascade of short formats adapted to each platform, a repurposing calendar, and a consistent editorial line.",
    podcastRole: "Content strategy, structuring the media production chain, and editorial oversight of multi-format repurposing.",
    podcastImpact: "A first episode that lays the groundwork for a media ecosystem built to last, with an editorial line and repurposing engine already in place for what comes next.",

    bdayLead: "Commemorating the 20th anniversary of Beyoncé's B'DAY album, in collaboration with HelloYouArtist and BeyhiveFrance.",
    viewRecapIg: "View recap on Instagram",
    bdayApproach: "A festival designed as a collective tribute, built with HelloYouArtist and BeyhiveFrance to celebrate 20 years of B'DAY at the crossroads of pop culture and fan community.",
    bdayRole: "lllk.prod was responsible for photo content creation (published) and video content, which will appear in a long-form piece coming out in September 2026.",

    closeAria: "Close",
    prevProjectAria: "Previous project",
    nextProjectAria: "Next project",
    closeImageAria: "Close image",
    prevImageAria: "Previous image",
    nextImageAria: "Next image",
  };

  const dict = { fr: {}, en };

  const captureFr = (selector, attrGetter, keyAttr) => {
    document.querySelectorAll(selector).forEach(el => {
      const key = el.getAttribute(keyAttr);
      if (dict.fr[key] === undefined) dict.fr[key] = attrGetter(el);
    });
  };

  const firstTextNode = (el) => {
    for (const node of el.childNodes) {
      if (node.nodeType === 3 && node.textContent.trim()) return node;
    }
    return null;
  };

  captureFr('[data-i18n]', (el) => {
    if (el.children.length === 0) return el.textContent;
    const node = firstTextNode(el);
    return node ? node.textContent : el.textContent;
  }, 'data-i18n');
  captureFr('[data-i18n-html]', (el) => el.innerHTML, 'data-i18n-html');
  captureFr('[data-i18n-ph]', (el) => el.getAttribute('placeholder'), 'data-i18n-ph');
  captureFr('[data-i18n-aria]', (el) => el.getAttribute('aria-label'), 'data-i18n-aria');

  const applyText = (el, value) => {
    if (el.children.length === 0) {
      el.textContent = value;
      return;
    }
    const node = firstTextNode(el);
    if (node) node.textContent = value;
    else el.textContent = value;
  };

  const setLang = (lang) => {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = dict[lang][el.getAttribute('data-i18n')];
      if (val !== undefined) applyText(el, val);
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = dict[lang][el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const val = dict[lang][el.getAttribute('data-i18n-ph')];
      if (val !== undefined) el.setAttribute('placeholder', val);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const val = dict[lang][el.getAttribute('data-i18n-aria')];
      if (val !== undefined) el.setAttribute('aria-label', val);
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = lang === 'fr' ? 'FR / EN' : 'EN / FR';
      btn.setAttribute('aria-label', lang === 'fr' ? 'Switch to English' : 'Passer en français');
    });
    localStorage.setItem(STORAGE_KEY, lang);
  };

  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.lang === 'en' ? 'en' : 'fr';
      setLang(current === 'fr' ? 'en' : 'fr');
    });
  });

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'en') setLang('en');

});
