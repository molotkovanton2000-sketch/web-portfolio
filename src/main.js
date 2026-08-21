import "./assets/style/style.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// ===== Бургер-меню =====
const burgerBtn = document.querySelector("#burgerBtn");
const overlay = document.querySelector("#mobileOverlay");
const closeBtn = document.querySelector("#closeBtn");
const mobileLinks = document.querySelectorAll(".header__mobile-link");

function openMenu() {
  overlay?.classList.add("opened");
  document.querySelector("html")?.classList.add("hidden");
}

function closeMenu() {
  overlay?.classList.remove("opened");
  document.querySelector("html")?.classList.remove("hidden");
}

if (burgerBtn) burgerBtn.addEventListener("click", openMenu);
if (closeBtn) closeBtn.addEventListener("click", closeMenu);

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Закрытие по клику на оверлей (не на панель)
overlay?.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeMenu();
  }
});