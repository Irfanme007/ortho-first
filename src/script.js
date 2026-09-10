const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");


// Mobile navigation

menuButton?.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.contains("hidden");

  mobileMenu.classList.toggle("hidden");

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );
});


// Close mobile menu after navigation

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );
  });
});


// Header shadow

const header = document.getElementById("site-header");

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 10) {
      header.classList.add("shadow-soft");
    } else {
      header.classList.remove("shadow-soft");
    }
  },
  {
    passive: true
  }
);


// Scroll reveal

const revealElements =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

  const observer =
    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
      }
    );


  revealElements.forEach((element) => {
    observer.observe(element);
  });

} else {

  revealElements.forEach((element) => {
    element.classList.add("show");
  });

}