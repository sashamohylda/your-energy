const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".filters .filter").forEach(link => {
  const linkPage = link.getAttribute("href").split("/").pop();
  if (linkPage === currentPage) {
    link.classList.add("is-active");
  }
});
