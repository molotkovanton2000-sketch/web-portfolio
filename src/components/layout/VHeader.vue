<template>
    <header class="header">
        <div class="header__container container">
            <!-- Десктопная навигация -->
            <nav class="header__nav">
                <!-- Логотип -->
                <a href="/" class="header__logo">
                    <h1 class="header__logo-text">Antonio.</h1>
                </a>
    
                <ul class="header__list">
                    <li class="header__item">
                        <router-link to="/" class="header__link">Обо мне</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/projects" class="header__link">Проекты</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/sandbox" class="header__link">Песочница</router-link>
                    </li>
                    <li class="header__item">
                        <router-link to="/about" class="header__link">О проекте</router-link>
                    </li>
                </ul>
    
                <!-- Действия: кнопка открытия бургер-меню -->
                <div class="header__actions">
                    <button class="header__burger-menu" id="burgerBtn">
                        <img src="@/assets/img/List.png" alt="Menu" class="icon_menu-open" />
                    </button>
                </div>
            </nav>
        </div>
    
        <!-- Мобильное меню (оверлей + выезжающая панель) -->
        <div class="header__mobile-overlay" id="mobileOverlay">
            <div class="header__mobile-panel">
                <div class="header__mobile-header">
                    <a href="/" class="header__mobile-logo">Antonio.</a>
                    <button class="header__mobile-close" id="closeBtn">
                        <img src="@/assets/img/menu-close.svg" alt="Закрыть" />
                    </button>
                </div>
                <ul class="header__mobile-list">
                    <li class="header__mobile-item">
                        <router-link to="/" class="header__mobile-link">Обо мне</router-link>
                    </li>
                    <li class="header__mobile-item">
                        <router-link to="/projects" class="header__mobile-link">Проекты</router-link>
                    </li>
                    <li class="header__mobile-item">
                        <router-link to="/sandbox" class="header__mobile-link">Песочница</router-link>
                    </li>
                    <li class="header__mobile-item">
                        <router-link to="/about" class="header__mobile-link">О проекте</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>