<!-- src/components/home/VProjects.vue -->

<template>
    <section class="projects">
        <div class="projects__container container">
            <h2 class="projects__title">Мои <span class="projects__title--highlight">проекты</span></h2>
            <p class="projects__subtitle">
                Несколько работ, которые я реализовал с нуля
            </p>
    
            <div class="projects__grid">
                <!-- Карточка проекта 1: Coffee -->
                <div class="projects__card">
                    <div class="projects__card-image">
                        <img src="@/assets/img/Web-site-Coffee.png" alt="Coffee" />
                    </div>
                    <div class="projects__card-body">
                        <h3 class="projects__card-title">Coffee</h3>
                        <p class="projects__card-description">
                            Лендинг кофейни с адаптивом, бургер-меню и чистой архитектурой.
                        </p>
                        <div class="projects__card-tags">
                            <span class="projects__card-tag">Vue 3</span>
                            <span class="projects__card-tag">SCSS</span>
                            <span class="projects__card-tag">БЭМ</span>
                        </div>
                        <div class="projects__card-actions">
                            <a href="#"
                                class="projects__card-link projects__card-link--demo" target="_blank"
                                rel="noopener noreferrer">
                                Демо
                            </a>
                            <a href="https://github.com/molotkovanton2000-sketch/website-Coffee"
                                class="projects__card-link projects__card-link--code" target="_blank"
                                rel="noopener noreferrer">
                                Код
                            </a>
                        </div>
                    </div>
                </div>
    
                <!-- Карточка проекта 2: Astro Car -->
                <div class="projects__card">
                    <div class="projects__card-image">
                        <img src="@/assets/img/Web-site-AstroCar.png" alt="Astro Car" />
                    </div>
                    <div class="projects__card-body">
                        <h3 class="projects__card-title">Astro Car</h3>
                        <p class="projects__card-description">
                            Лендинг автомобильного бренда с кастомными эффектами и сложной сеткой.
                        </p>
                        <div class="projects__card-tags">
                            <span class="projects__card-tag">Vue 3</span>
                            <span class="projects__card-tag">SCSS</span>
                            <span class="projects__card-tag">Flexbox</span>
                        </div>
                        <div class="projects__card-actions">
                            <a href="#" 
                                class="projects__card-link projects__card-link--demo" target="_blank"
                                rel="noopener noreferrer">
                                Демо
                            </a>
                            <a href="https://github.com/molotkovanton2000-sketch/website_AstroCar"
                                class="projects__card-link projects__card-link--code" target="_blank"
                                rel="noopener noreferrer">
                                Код
                            </a>
                        </div>
                    </div>
                </div>
    
                <!-- Карточка проекта 3: Портфолио -->
                <div class="projects__card">
                    <div class="projects__card-image">
                        <img src="@/assets/img/My-web-portfolio.png" alt="Портфолио" />
                    </div>
                    <div class="projects__card-body">
                        <h3 class="projects__card-title">Портфолио</h3>
                        <p class="projects__card-description">
                            Сайт-портфолио с роутингом, песочницей и тёмной темой.
                        </p>
                        <div class="projects__card-tags">
                            <span class="projects__card-tag">Vue 3</span>
                            <span class="projects__card-tag">Pinia</span>
                            <span class="projects__card-tag">Vue Router</span>
                        </div>
                        <div class="projects__card-actions">
                            <a href="#"
                                class="projects__card-link projects__card-link--demo" target="_blank"
                                rel="noopener noreferrer">
                                Демо
                            </a>
                            <a href="https://github.com/molotkovanton2000-sketch/my-web-portfolio"
                                class="projects__card-link projects__card-link--code" target="_blank"
                                rel="noopener noreferrer">
                                Код
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>