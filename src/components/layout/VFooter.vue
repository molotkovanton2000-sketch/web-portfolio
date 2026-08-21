<!-- src/components/layout/VFooter.vue -->

<template>
  <footer class="footer">
    <div class="footer__container container">
      <div class="footer__content">
        <!-- Левая часть: логотип и копирайт -->
        <div class="footer__brand">
          <a href="/" class="footer__logo">
            <h4 class="footer__logo-text">Antonio.</h4>
          </a>
          <p class="footer__copy">
            © {{ new Date().getFullYear() }} Все права защищены
          </p>
        </div>

        <!-- Правая часть: социальные ссылки -->
        <div class="footer__socials">
          <a
            href="https://github.com/molotkovanton2000-sketch"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-github.png" alt="GitHub" class="footer__social-icon" />
          </a>
          <a
            href="t.me/YourWinnerous"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-телеграм.png" alt="Telegram" class="footer__social-icon" />
          </a>
          <a
            href="#"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-вконтакте.png" alt="VK" class="footer__social-icon" />
          </a>
          <a
            href="mailto:molotkovanton2000@gmail.com"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-email.png" alt="Email" class="footer__social-icon" />
          </a>
          <a
            href="#"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-тикток.png" alt="Email" class="footer__social-icon" />
          </a>
          <a
            href="#"
            class="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/img/icons-instagram.png" alt="Email" class="footer__social-icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>