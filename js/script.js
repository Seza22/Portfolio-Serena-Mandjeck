document.addEventListener('DOMContentLoaded', () => {

  /* ===== Navbar scroll state ===== */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ===== Mobile menu toggle ===== */
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');
  burger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    burger.classList.toggle('open', isOpen);
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ===== Scroll reveal ===== */
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('in-view'), i * 60);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ===== iOS Sheet Modals ===== */
  const backdrop = document.getElementById('sheetBackdrop');
  const cards = document.querySelectorAll('[data-modal]');
  let activeSheet = null;

  const openSheet = (id) => {
    const sheet = document.getElementById('modal-' + id);
    if (!sheet) return;
    activeSheet = sheet;
    document.body.classList.add('sheet-active');
    backdrop.classList.add('open');
    requestAnimationFrame(() => sheet.classList.add('open'));
  };

  const closeSheet = () => {
    if (!activeSheet) return;
    activeSheet.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.classList.remove('sheet-active');
    activeSheet = null;
  };

  cards.forEach(card => {
    card.addEventListener('click', () => openSheet(card.dataset.modal));
    if (card.getAttribute('role') === 'button') {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openSheet(card.dataset.modal);
        }
      });
    }
  });

  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', closeSheet);
  });
  backdrop.addEventListener('click', closeSheet);

  document.addEventListener('keydown', (e) => {
    if (lightboxBackdrop.classList.contains('open')) {
      if (e.key === 'Escape') closeLightbox();
      else if (e.key === 'ArrowLeft') stepLightbox(-1);
      else if (e.key === 'ArrowRight') stepLightbox(1);
      return;
    }
    if (e.key === 'Escape') closeSheet();
  });

  /* ===== Sheet prev/next navigation (Photos-app style) ===== */
  const projectOrder = ['racine', 'creatown', 'podcast', 'ouiouibday'];
  const switchSheet = (dir) => {
    if (!activeSheet) return;
    const currentId = activeSheet.id.replace('modal-', '');
    let idx = projectOrder.indexOf(currentId);
    if (idx === -1) return;
    idx = (idx + dir + projectOrder.length) % projectOrder.length;
    const nextSheet = document.getElementById('modal-' + projectOrder[idx]);
    if (!nextSheet) return;
    activeSheet.classList.remove('open');
    nextSheet.classList.add('open');
    activeSheet = nextSheet;
  };
  document.querySelectorAll('.sheet-nav').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      switchSheet(parseInt(btn.dataset.nav, 10));
    });
  });

  /* ===== Photos.app toolbar: search + view toggle ===== */
  const photosGrid = document.getElementById('photosGrid');
  const photosSearch = document.getElementById('photosSearch');
  const photosEmpty = document.getElementById('photosEmpty');
  const photoTiles = document.querySelectorAll('.photo-tile');

  if (photosSearch) {
    photosSearch.addEventListener('input', () => {
      const query = photosSearch.value.trim().toLowerCase();
      let visibleCount = 0;
      photoTiles.forEach(tile => {
        const haystack = (tile.dataset.title + ' ' + tile.dataset.tags).toLowerCase();
        const matches = haystack.includes(query);
        tile.classList.toggle('filtered-out', !matches);
        if (matches) visibleCount++;
      });
      photosEmpty.classList.toggle('show', visibleCount === 0);
    });
  }

  document.querySelectorAll('.photos-view-toggle button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.photos-view-toggle button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      photosGrid.classList.toggle('list-view', btn.dataset.view === 'list');
    });
  });

  /* ===== Stack cards: expand "En pratique" ===== */
  document.querySelectorAll('.stack-expand-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.stack-card');
      const isOpen = card.classList.toggle('expanded');
      btn.setAttribute('aria-expanded', isOpen);
    });
  });

  /* ===== RACINE episode tabs ===== */
  document.querySelectorAll('.episode-tabs').forEach(tabGroup => {
    const sheet = tabGroup.closest('.sheet');
    const tabs = tabGroup.querySelectorAll('.episode-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.episode;
        tabs.forEach(t => {
          t.classList.toggle('active', t === tab);
          t.setAttribute('aria-selected', t === tab);
        });
        sheet.querySelectorAll('.episode-panel').forEach(panel => {
          const isMatch = panel.dataset.episodePanel === target;
          panel.classList.toggle('active', isMatch);
          panel.hidden = !isMatch;
        });
      });
    });
  });

  /* ===== Lightbox (Instagram-style image zoom) ===== */
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCounter = document.getElementById('lightboxCounter');
  let lightboxImgs = [];
  let lightboxIndex = 0;

  const updateLightbox = () => {
    const img = lightboxImgs[lightboxIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightboxCounter.textContent = lightboxImgs.length > 1 ? (lightboxIndex + 1) + ' / ' + lightboxImgs.length : '';
  };

  const openLightbox = (imgs, index) => {
    lightboxImgs = imgs;
    lightboxIndex = index;
    updateLightbox();
    document.body.classList.add('lightbox-active');
    lightboxBackdrop.classList.add('open');
  };

  const closeLightbox = () => {
    lightboxBackdrop.classList.remove('open');
    document.body.classList.remove('lightbox-active');
  };

  const stepLightbox = (dir) => {
    if (lightboxImgs.length < 2) return;
    lightboxIndex = (lightboxIndex + dir + lightboxImgs.length) % lightboxImgs.length;
    updateLightbox();
  };

  document.querySelectorAll('.gallery-slot img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      const grid = img.closest('.gallery-grid');
      const imgs = [...grid.querySelectorAll('img')];
      openLightbox(imgs, imgs.indexOf(img));
    });
  });

  document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
  document.getElementById('lightboxPrev').addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(-1); });
  document.getElementById('lightboxNext').addEventListener('click', (e) => { e.stopPropagation(); stepLightbox(1); });
  lightboxBackdrop.addEventListener('click', (e) => {
    if (e.target === lightboxBackdrop) closeLightbox();
  });

  /* ===== Hero floaters: subtle mouse parallax ===== */
  const heroFloaters = document.getElementById('heroFloaters');
  if (heroFloaters && window.matchMedia('(hover: hover)').matches) {
    const floaterEls = heroFloaters.querySelectorAll('.floater');
    heroFloaters.closest('.hero').addEventListener('mousemove', (e) => {
      const rect = heroFloaters.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      floaterEls.forEach(el => {
        const depth = parseFloat(el.dataset.depth) || 12;
        el.style.setProperty('--parallax-x', (relX * depth).toFixed(1) + 'px');
        el.style.setProperty('--parallax-y', (relY * depth).toFixed(1) + 'px');
      });
    });
  }

  /* ===== Smooth anchor scroll (offset for sticky navbar) ===== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length < 2) return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

});
