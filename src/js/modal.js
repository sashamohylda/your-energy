const backdrop = document.querySelector('.js-modal');
const closeBtn = document.querySelector('.js-close-modal');

const openButtons = document.querySelectorAll('.bp-start');



if (!backdrop || !closeBtn) {
  console.error('Modal elements not found: .js-modal or .js-close-modal');
}

function openModal() {
  backdrop.classList.add('is-open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden'; 
  window.addEventListener('keydown', onEscClose);
}

function closeModal() {
  backdrop.classList.remove('is-open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscClose);
}

function onEscClose(e) {
  if (e.key === 'Escape') closeModal();
}

openButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault(); 
    openModal();
  });
});

closeBtn.addEventListener('click', closeModal);

backdrop.addEventListener('click', e => {
  if (e.target === backdrop) closeModal();
});
const exerciseModal = document.querySelector('.js-modal'); 
const ratingModal = document.querySelector('.js-rating-modal');

const btnOpenRating = document.querySelector('.modal-btn--dark'); 
const btnCloseRating = document.querySelector('.js-close-rating');

const ratingStars = document.querySelectorAll('.js-rate-star');
const ratingValueEl = document.querySelector('.js-rating-value');
const ratingForm = document.querySelector('.js-rating-form');

let currentRating = 0;

// helpers
function openRatingModal() {
  ratingModal.classList.add('is-open');
  ratingModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeRatingModal() {
  ratingModal.classList.remove('is-open');
  ratingModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function closeExerciseModal() {
  exerciseModal.classList.remove('is-open');
  exerciseModal.setAttribute('aria-hidden', 'true');
}

function paintStars(value) {
  ratingStars.forEach(star => {
    const v = Number(star.dataset.value);
    star.classList.toggle('is-active', v <= value);
  });
  ratingValueEl.textContent = `${value.toFixed(1)}`;
}

if (btnOpenRating) {
  btnOpenRating.addEventListener('click', () => {
    closeExerciseModal();
    openRatingModal();
  });
}

btnCloseRating.addEventListener('click', closeRatingModal);

ratingModal.addEventListener('click', e => {
  if (e.target === ratingModal) closeRatingModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && ratingModal.classList.contains('is-open')) {
    closeRatingModal();
  }
});

ratingStars.forEach(star => {
  star.addEventListener('click', () => {
    currentRating = Number(star.dataset.value);
    paintStars(currentRating);
  });
});

ratingForm.addEventListener('submit', e => {
  e.preventDefault();


  closeRatingModal();

  exerciseModal.classList.add('is-open');
  exerciseModal.setAttribute('aria-hidden', 'false');
});
function initFavoritesEmptyState() {
    const favoritesSection = document.querySelector(".favorites");
    if (!favoritesSection) return; 

    const emptyEl = favoritesSection.querySelector("[data-favorites-empty]");
    const contentEl = favoritesSection.querySelector("[data-favorites-content]");
    const listEl = favoritesSection.querySelector(".bp-list");
    const pagerEl = favoritesSection.querySelector(".pager");

    const cardsCount = listEl ? listEl.querySelectorAll(".bp-card").length : 0;

    const hasFavorites = cardsCount > 0;
}