function initMainCarousel() {
  const items = document.querySelectorAll(".carrousel-item");
  const indicators = document.querySelectorAll(".indicator");
  const leftArrow = document.querySelector(".left-arrow");
  const rightArrow = document.querySelector(".right-arrow");

  let currentIndex = 0;
  let autoSlideInterval;

  // Fonction pour afficher un élément donné
  function showItem(index) {
    // Cache tous les éléments
    items.forEach((item, i) => {
      item.style.display = i === index ? "flex" : "none";
    });

    // Met à jour les indicateurs
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  // Fonction pour démarrer l'auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      showItem(currentIndex);
    }, 5000);
  }

  // Fonction pour arrêter l'auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Gestion des clics sur les flèches
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  // Gestion des clics sur les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showItem(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Affiche le premier élément au chargement
  showItem(currentIndex);

  // Démarre l'auto-slide
  startAutoSlide();
}

function initArtCarousel() {
  const items = document.querySelectorAll(".carrousel-art-item");
  const indicators = document.querySelectorAll(".indicator-art");
  const leftArrow = document.querySelector(".left-arrow-art");
  const rightArrow = document.querySelector(".right-arrow-art");

  let currentIndex = 0;
  let autoSlideInterval;

  // Fonction pour afficher un élément donné
  function showItem(index) {
    // Cache tous les éléments
    items.forEach((item, i) => {
      item.style.display = i === index ? "flex" : "none";
    });

    // Met à jour les indicateurs
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  // Fonction pour démarrer l'auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      showItem(currentIndex);
    }, 5000);
  }

  // Fonction pour arrêter l'auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Gestion des clics sur les flèches
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  // Gestion des clics sur les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showItem(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Affiche le premier élément au chargement
  console.log("Art carousel initialized");
  showItem(currentIndex);
  console.log("Art carousel initialized");

  // Démarre l'auto-slide
  startAutoSlide();
}

function initEvtCarousel() {
  const items = document.querySelectorAll(".carrousel-evt-item");
  const indicators = document.querySelectorAll(".indicator-evt");
  const leftArrow = document.querySelector(".left-arrow-evt");
  const rightArrow = document.querySelector(".right-arrow-evt");

  let currentIndex = 0;
  let autoSlideInterval;

  // Fonction pour afficher un élément donné
  function showItem(index) {
    // Cache tous les éléments
    items.forEach((item, i) => {
      item.style.display = i === index ? "flex" : "none";
    });

    // Met à jour les indicateurs
    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === index);
    });
  }

  // Fonction pour démarrer l'auto-slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
      showItem(currentIndex);
    }, 5000);
  }

  // Fonction pour arrêter l'auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Gestion des clics sur les flèches
  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showItem(currentIndex);
    stopAutoSlide();
    startAutoSlide();
  });

  // Gestion des clics sur les indicateurs
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      currentIndex = index;
      showItem(currentIndex);
      stopAutoSlide();
      startAutoSlide();
    });
  });

  // Affiche le premier élément au chargement
  console.log("Art carousel initialized");
  showItem(currentIndex);
  console.log("Art carousel initialized");

  // Démarre l'auto-slide
  startAutoSlide();
}

// Initialisation des deux carrousels au chargement
document.addEventListener("DOMContentLoaded", function () {
  initMainCarousel();
  initArtCarousel();
  initEvtCarousel();
});