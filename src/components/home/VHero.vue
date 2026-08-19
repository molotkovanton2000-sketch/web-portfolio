<template>
    <section class="hero">
        <div class="hero__container container">
            <div class="hero__content">
                <h2 class="hero__title">
                    Пишу чистый код,<br />
                    <span class="hero__title--highlight">продумываю интерфейсы</span>
                </h2>
    
                <h5 class="hero__subtitle">
                    Frontend-разработчик. Создаю адаптивные и поддерживаемые проекты.<br />
                    В приоритете — БЭМ, SCSS, Vue 3 и удобство пользователя.
                </h5>

                <h5 class="hero__about">
                    Начинал с вёрстки, пришёл к осознанному построению компонентов на Vue 3.<br/>
                    В коде ценю чистоту, поддерживаемость и масштабируемость.<br/>
                    Не пишу «чтобы работало» — пишу так, чтобы через полгода самому было понятно.
                </h5>
                
                <!-- Единый блок: принципы + статистика -->
                <div class="hero__values">
                    <!-- Принципы -->
                    <div class="hero__values-column">
                        <h3 class="hero__values-subtitle">Принципы работы:</h3>
                        <ul class="hero__values-list">
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                Чистая архитектура без дублирования
                            </li>
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                Адаптив с самого начала
                            </li>
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                Осознанный подход к каждому компоненту
                            </li>
                        </ul>
                    </div>

                    <!-- Статистика (в стиле принципов) -->
                    <div class="hero__values-column">
                        <h3 class="hero__values-subtitle">Статистика:</h3>
                        <ul class="hero__values-list">
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                4 реализованных проекта
                            </li>
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                2 года коммерческой разработки(lie)
                            </li>
                            <li class="hero__value-item">
                                <span class="hero__value-icon">▸</span>
                                100% адаптивная верстка
                            </li>
                        </ul>
                    </div>
                </div>
    
                <div class="hero__skills">
                    <span class="hero__skill">Vue 3</span>
                    <span class="hero__skill">SCSS</span>
                    <span class="hero__skill">БЭМ</span>
                    <span class="hero__skill">Vite</span>
                    <span class="hero__skill">Pinia</span>
                    <span class="hero__skill">Git</span>
                </div>
            </div>
        </div>
    </section>
</template>