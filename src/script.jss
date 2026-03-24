.cars img:hover{

transform:scale(1.05);
transition:0.4s;

}// ====== FAQ ACCORDION FUNCTIONALITY ======
const faqButtons = document.querySelectorAll('.faq-question');

faqButtons.forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

// ====== HAMBURGER MENU ======
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

// ====== SIDE PANEL TOGGLE ======
const panelToggle = document.querySelector('.panel-toggle');
const sidePanel = document.querySelector('.side-panel');
const closeBtn = document.querySelector('.close-btn');

if (panelToggle && sidePanel) {
  panelToggle.addEventListener('click', () => {
    sidePanel.classList.toggle('open');
  });
}

if (closeBtn && sidePanel) {
  closeBtn.addEventListener('click', () => {
    sidePanel.classList.remove('open');
  });
}

// Close side panel when clicking outside
document.addEventListener('click', (e) => {
  if (sidePanel && !sidePanel.contains(e.target) && !panelToggle.contains(e.target)) {
    sidePanel.classList.remove('open');
  }
});

// ====== BUY PAGE FILTERING ======
const searchInput = document.getElementById('search-input');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const typeFilter = document.getElementById('type-filter');
const applyFiltersBtn = document.getElementById('apply-filters');
const carCards = document.querySelectorAll('.car-card');

function filterCars() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
  const selectedBrand = brandFilter ? brandFilter.value : '';
  const selectedPrice = priceFilter ? priceFilter.value : '';
  const selectedType = typeFilter ? typeFilter.value : '';

  carCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const desc = card.querySelector('.car-desc').textContent.toLowerCase();
    const brand = card.dataset.brand;
    const price = parseInt(card.dataset.price);
    const type = card.dataset.type;

    let showCard = true;

    // Search filter
    if (searchTerm && !title.includes(searchTerm) && !desc.includes(searchTerm)) {
      showCard = false;
    }

    // Brand filter
    if (selectedBrand && brand !== selectedBrand) {
      showCard = false;
    }

    // Price filter
    if (selectedPrice) {
      if (selectedPrice === 'under-20000' && price >= 20000) showCard = false;
      else if (selectedPrice === '20000-40000' && (price < 20000 || price > 40000)) showCard = false;
      else if (selectedPrice === '40000-60000' && (price < 40000 || price > 60000)) showCard = false;
      else if (selectedPrice === 'over-60000' && price <= 60000) showCard = false;
    }

    // Type filter
    if (selectedType && type !== selectedType) {
      showCard = false;
    }

    card.style.display = showCard ? 'block' : 'none';
  });
}

if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', filterCars);
}

if (searchInput) {
  searchInput.addEventListener('input', filterCars);
}