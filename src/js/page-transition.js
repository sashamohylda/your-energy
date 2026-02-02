document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("page-visible");

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (
      href.startsWith("http") ||
      href.startsWith("#") ||
      link.hasAttribute("target")
    ) {
      return;
    }

    link.addEventListener("click", e => {
      e.preventDefault();

      document.body.classList.remove("page-visible");

      setTimeout(() => {
        window.location.href = href;
      }, 300);
    });
  });
});