// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
}

// FAQ Accordion Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// Close mobile menu when clicking a link
const navLinkElements = document.querySelectorAll('.nav-link');
navLinkElements.forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    }
  });
});

// ====== CAR SEARCH AND FILTER FUNCTIONALITY ======
const searchBtn = document.getElementById('search-btn');
const searchInput = document.getElementById('search-input');
const applyFiltersBtn = document.getElementById('apply-filters');
const brandFilter = document.getElementById('brand-filter');
const priceFilter = document.getElementById('price-filter');
const typeFilter = document.getElementById('type-filter');
const conditionFilter = document.getElementById('condition-filter');
const carsGrid = document.getElementById('cars-grid');

function filterCars() {
  if (!carsGrid) return;
  
  const searchText = searchInput?.value?.toLowerCase() || '';
  const selectedBrand = brandFilter?.value || '';
  const selectedType = typeFilter?.value || '';
  const selectedCondition = conditionFilter?.value || '';
  const carCards = carsGrid.querySelectorAll('.car-card');
  
  carCards.forEach(card => {
    const brand = card.getAttribute('data-brand')?.toLowerCase() || '';
    const type = card.getAttribute('data-type')?.toLowerCase() || '';
    const condition = card.getAttribute('data-condition')?.toLowerCase() || '';
    const carName = card.textContent?.toLowerCase() || '';
    
    const matchesSearch = carName.includes(searchText) || searchText === '';
    const matchesBrand = brand.includes(selectedBrand?.toLowerCase()) || selectedBrand === '';
    const matchesType = type.includes(selectedType?.toLowerCase()) || selectedType === '';
    const matchesCondition = condition.includes(selectedCondition?.toLowerCase()) || selectedCondition === '';
    
    if (matchesSearch && matchesBrand && matchesType && matchesCondition) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Add event listeners for search and filters
if (searchBtn) {
  searchBtn.addEventListener('click', filterCars);
}

if (searchInput) {
  searchInput.addEventListener('keyup', filterCars);
}

if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', filterCars);
}

if (brandFilter) {
  brandFilter.addEventListener('change', filterCars);
}

if (typeFilter) {
  typeFilter.addEventListener('change', filterCars);
}

if (conditionFilter) {
  conditionFilter.addEventListener('change', filterCars);
}

// ====== ADVANCED FILTERS ======
const applyAdvancedFiltersBtn = document.getElementById('apply-advanced-filters');
const yearFilter = document.getElementById('year-filter');
const mileageFilter = document.getElementById('mileage-filter');
const transmissionFilter = document.getElementById('transmission-filter');
const fuelFilter = document.getElementById('fuel-filter');

function applyAdvancedFilters() {
  if (!carsGrid) return;
  
  const selectedYear = yearFilter?.value || '';
  const selectedMileage = mileageFilter?.value || '';
  const selectedTransmission = transmissionFilter?.value || '';
  const selectedFuel = fuelFilter?.value || '';
  const carCards = carsGrid.querySelectorAll('.car-card');
  
  carCards.forEach(card => {
    const year = card.getAttribute('data-year')?.toLowerCase() || '';
    const mileage = card.getAttribute('data-mileage')?.toLowerCase() || '';
    const transmission = card.getAttribute('data-transmission')?.toLowerCase() || '';
    const fuel = card.getAttribute('data-fuel')?.toLowerCase() || '';
    
    const matchesYear = year.includes(selectedYear?.toLowerCase()) || selectedYear === '';
    const matchesMileage = mileage.includes(selectedMileage?.toLowerCase()) || selectedMileage === '';
    const matchesTransmission = transmission.includes(selectedTransmission?.toLowerCase()) || selectedTransmission === '';
    const matchesFuel = fuel.includes(selectedFuel?.toLowerCase()) || selectedFuel === '';
    
    if (matchesYear && matchesMileage && matchesTransmission && matchesFuel) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

if (applyAdvancedFiltersBtn) {
  applyAdvancedFiltersBtn.addEventListener('click', applyAdvancedFilters);
}

if (yearFilter) {
  yearFilter.addEventListener('change', applyAdvancedFilters);
}

if (mileageFilter) {
  mileageFilter.addEventListener('change', applyAdvancedFilters);
}

if (transmissionFilter) {
  transmissionFilter.addEventListener('change', applyAdvancedFilters);
}

if (fuelFilter) {
  fuelFilter.addEventListener('change', applyAdvancedFilters);
}

// ====== CONTACT FORM VALIDATION AND FEEDBACK ======
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nameInput = this.querySelector('input[name="name"]');
    const emailInput = this.querySelector('input[name="email"]');
    const phoneInput = this.querySelector('input[name="phone"]');
    const messageInput = this.querySelector('textarea[name="message"]');
    const submitBtn = this.querySelector('button[type="submit"]');
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!nameInput.value.trim()) {
      alert('Please enter your name');
      nameInput.focus();
      return;
    }
    
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address');
      emailInput.focus();
      return;
    }
    
    if (!phoneInput.value.trim()) {
      alert('Please enter your phone number');
      phoneInput.focus();
      return;
    }
    
    if (!messageInput.value.trim()) {
      alert('Please enter a message');
      messageInput.focus();
      return;
    }
    
    // Show success message
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Message Sent! ✓';
    submitBtn.style.backgroundColor = '#27ae60';
    submitBtn.style.cursor = 'not-allowed';
    submitBtn.disabled = true;
    
    // Reset form
    this.reset();
    
    // Restore button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.backgroundColor = '';
      submitBtn.style.cursor = 'pointer';
      submitBtn.disabled = false;
    }, 3000);
  });
}