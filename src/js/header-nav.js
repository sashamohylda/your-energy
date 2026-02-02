alert('JS LOADED');
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.header-nav');
  const pill = document.querySelector('.header-nav__pill');
  const links = document.querySelectorAll('.header-nav__link');
  const page = document.body.dataset.page;

  if (!nav || !pill || !links.length || !page) return;

  function movePillTo(link) {
    const navRect = nav.getBoundingClientRect();
    const linkRect = link.getBoundingClientRect();

    pill.style.width = `${linkRect.width}px`;
    pill.style.transform =
      `translateX(${linkRect.left - navRect.left}px)`;

    links.forEach(l => l.classList.remove('is-active'));
    link.classList.add('is-active');
  }

  const activeLink =
    [...links].find(link => link.dataset.page === page) ||
    links[0];

  requestAnimationFrame(() => {
    movePillTo(activeLink);
  });

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      movePillTo(link);

      setTimeout(() => {
        window.location.href = link.href;
      }, 150);
    });
  });
});