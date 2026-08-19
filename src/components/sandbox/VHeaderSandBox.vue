<!--В данный момент не используется-->

<template>
    <header class="sandbox-header">
        <div class="sandbox-header__container container">
            <nav class="sandbox-header__nav">
                <ul class="sandbox-header__list">
                    <li class="sandbox-header__item">
                        <router-link to="/sandbox" class="sandbox-header__link">Counter</router-link>
                    </li>
                    <li class="sandbox-header__item">
                        <router-link to="/sandbox/todolist" class="sandbox-header__link">Todo List</router-link>
                    </li>
                    <li class="sandbox-header__item">
                        <router-link to="/sandbox/posts" class="sandbox-header__link">Посты</router-link>
                    </li>
                    <li class="sandbox-header__item">
                        <router-link to="/sandbox/users" class="sandbox-header__link">Пользователи</router-link>
                    </li>
                    <li class="sandbox-header__item">
                        <router-link to="/sandbox/add-post" class="sandbox-header__link">➕ Добавить пост</router-link>
                    </li>
                </ul>
    
                <div class="sandbox-header__actions">
                    <button class="sandbox-header__burger-menu" id="burgerBtn">
                        <img src="@/assets/img/List.png" alt="Menu" class="icon_menu-open" />
                    </button>
                </div>
            </nav>
        </div>
    
        <!-- Мобильное меню (такое же, как в VHeader) -->
        <div class="sandbox-header__mobile-overlay" id="mobileOverlay">
            <div class="sandbox-header__mobile-panel">
                <div class="sandbox-header__mobile-header">
                    <a href="/" class="sandbox-header__mobile-logo">Antonio.</a>
                    <button class="sandbox-header__mobile-close" id="closeBtn">
                        <img src="@/assets/img/menu-close.svg" alt="Закрыть" />
                    </button>
                </div>
                <ul class="sandbox-header__mobile-list">
                    <li class="sandbox-header__mobile-item">
                        <router-link to="/sandbox" class="sandbox-header__mobile-link">Counter</router-link>
                    </li>
                    <li class="sandbox-header__mobile-item">
                        <router-link to="/sandbox/todolist" class="sandbox-header__mobile-link">Todo List</router-link>
                    </li>
                    <li class="sandbox-header__mobile-item">
                        <router-link to="/sandbox/posts" class="sandbox-header__mobile-link">Посты</router-link>
                    </li>
                    <li class="sandbox-header__mobile-item">
                        <router-link to="/sandbox/users" class="sandbox-header__mobile-link">Пользователи</router-link>
                    </li>
                    <li class="sandbox-header__mobile-item">
                        <router-link to="/sandbox/add-post" class="sandbox-header__mobile-link">➕ Добавить
                            пост</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>