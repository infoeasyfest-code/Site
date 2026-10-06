const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("#main-menu");
const totalValue = document.querySelector("#total-value");
const demoButton = document.querySelector(".play-button");
const toast = document.querySelector(".toast");
const year = document.querySelector("#year");

if (year) year.textContent = new Date().getFullYear();

menuToggle?.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

let demoTotal = 1248.5;
demoButton?.addEventListener("click", () => {
  demoTotal += 18.5;
  totalValue.textContent = demoTotal.toLocaleString("it-IT", {
    style: "currency",
    currency: "EUR",
  });
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
