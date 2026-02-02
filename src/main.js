
const menu = document.querySelector('[data-menu]');
const openBtn = document.querySelector('[data-menu-open]');
const closeBtn = document.querySelector('[data-menu-close]');

if (menu && openBtn && closeBtn) {
  function toggleMenu() {
    menu.classList.toggle('is-hidden');
    document.body.style.overflow = menu.classList.contains('is-hidden') ? '' : 'hidden';
  }

  openBtn.addEventListener('click', toggleMenu);
  closeBtn.addEventListener('click', toggleMenu);

  menu.addEventListener('click', (e) => {
    if (e.target === menu) toggleMenu();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.classList.contains('is-hidden')) {
      toggleMenu();
    }
  });
}


const pager = document.querySelector('.pager');
if (pager) {
  const buttons = pager.querySelectorAll('.pager__btn');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => {
        b.classList.remove('is-active');
        b.removeAttribute('aria-current');
      });

      btn.classList.add('is-active');
      btn.setAttribute('aria-current', 'page');
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const favorites = document.querySelector('.favorites');
  if (!favorites) return;

  const list = favorites.querySelector('.bp-list');
  const empty = favorites.querySelector('[data-favorites-empty]');
  const content = favorites.querySelector('[data-favorites-content]');
  const topLayout = favorites.querySelector('.favorites-layout');

  if (!list || !empty || !content) return;

  function updateFavoritesView() {
    const hasCards = list.querySelector('.bp-card');

    if (hasCards) {
      empty.classList.add('is-hidden');
      content.classList.remove('is-hidden');
      if (topLayout) topLayout.style.display = '';
    } else {
      empty.classList.remove('is-hidden');
      content.classList.add('is-hidden');
      if (topLayout) topLayout.style.display = 'none';
    }
  }

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('.bp-delete');
    if (!btn) return;

    const card = btn.closest('.bp-card');
    if (!card) return;

    card.remove();
    updateFavoritesView();
  });

  updateFavoritesView();
});
document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    const textEl = document.querySelector('.favorites-empty__text');
    if (!textEl) return;

    textEl.innerHTML = `
      <span class="empty-line">
        It appears that you haven't added any exercises to your favorites yet.
      </span>
      <span class="empty-line">
        To get started, you can add exercises that you like to your
      </span>
      <span class="empty-line">
        favorites for easier access in the future.
      </span>
    `;
  }
});