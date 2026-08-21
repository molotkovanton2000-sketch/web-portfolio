<script setup>
const projectStartDate = 'Апрель 2026'
const lastUpdated = new Date().toLocaleDateString('ru-RU')

const techStack = [
  'Vue 3',
  'Vue Router',
  'Pinia',
  'SCSS',
  'Vite',
  'JSONPlaceholder API',
  'БЭМ',
  'Git'
]

const components = [
  { name: 'Hero', description: 'Главный блок с информацией обо мне', date: 'Август 2026' },
  { name: 'Projects', description: 'Секция с карточками проектов', date: 'Август 2026' },
  { name: 'AboutView', description: 'Страница о проекте (эта)', date: 'Август 2026' },
  { name: 'SandBoxView', description: 'Песочница с навигацией по разделам', date: 'Август 2026' },
  { name: 'Counter', description: 'Счётчик с кнопками', date: 'Август 2026' },
  { name: 'TodoList', description: 'Список задач с фильтрацией', date: 'Август 2026' },
  { name: 'PostsListView', description: 'Список постов с API (GET)', date: 'Август 2026' },
  { name: 'PostDetailView', description: 'Страница поста с комментариями', date: 'Август 2026' },
  { name: 'UsersListView', description: 'Список пользователей с API (GET)', date: 'Август 2026' },
  { name: 'UserDetailView', description: 'Страница пользователя с его постами', date: 'Август 2026' },
  { name: 'AddPostView', description: 'Форма добавления поста (POST)', date: 'Август 2026' },
  { name: 'VHeader', description: 'Шапка с навигацией и бургер-меню', date: 'Август 2026' },
  { name: 'VFooter', description: 'Подвал с соцсетями', date: 'Август 2026' }
]
</script>

<template>
  <div class="about-container">
    <h1 class="page-title">📖 О проекте</h1>

    <section class="about-section">
      <h2>Описание</h2>
      <p>
        Это моё обновлённое портфолио, созданное на Vue 3. В нём я использовал
        компонентный подход, БЭМ-именование, адаптивную вёрстку и работу с API.
        Проект демонстрирует навыки фронтенд-разработки, включая:
      </p>
      <ul>
        <li>маршрутизацию (Vue Router);</li>
        <li>глобальное состояние (Pinia);</li>
        <li>работа с REST API (JSONPlaceholder);</li>
        <li>адаптивный дизайн с медиазапросами;</li>
        <li>чистый SCSS с переменными и миксинами.</li>
      </ul>
      <p>
        Все данные для постов и пользователей загружаются с
        <a href="https://jsonplaceholder.typicode.com" target="_blank">JSONPlaceholder</a>.
      </p>
    </section>

    <section class="about-section">
      <h2>🛠 Технологии</h2>
      <ul class="tech-list">
        <li v-for="tech in techStack" :key="tech">{{ tech }}</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>📅 История проекта</h2>
      <p><strong>Начало работы:</strong> {{ projectStartDate }}</p>
      <p><strong>Последнее обновление:</strong> {{ lastUpdated }}</p>
      <table class="components-table">
        <thead>
          <tr>
            <th>Компонент</th>
            <th>Описание</th>
            <th>Дата</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="comp in components" :key="comp.name">
            <td><code>{{ comp.name }}</code></td>
            <td>{{ comp.description }}</td>
            <td>{{ comp.date }}</td>
          </tr>
        </tbody>
      </table>
    </section>

    <section class="about-section">
      <h2>✨ Что реализовано</h2>
      <ul>
        <li>🎲 Случайное число – кнопка Random в счётчике</li>
        <li>📅 Живые дата и время – обновляются каждую секунду</li>
        <li>✨ Случайная задача – добавляет случайную задачу в тудулист</li>
        <li>📝 Работа с API (GET, POST, динамические маршруты)</li>
        <li>🌙 Тёмная тема (Pinia + localStorage) – в разработке</li>
        <li>📱 Адаптивная вёрстка для всех устройств</li>
        <li>🧩 Переиспользуемые компоненты и БЭМ-именование</li>
      </ul>
    </section>

    <section class="about-section">
      <h2>🔗 Ссылки</h2>
      <ul>
        <li>
          <a href="https://github.com/molotkovanton2000-sketch/my-web-portfolio" target="_blank">
            GitHub репозиторий
          </a>
        </li>
        <li>
          <a href="https://web-portfolio-nine-navy.vercel.app/" target="_blank">
            Живой сайт (это портфолио)
          </a>
        </li>
        <li>
          <a href="https://website-coffee-eta.vercel.app/" target="_blank">
            Coffee – адаптивный лендинг
          </a>
        </li>
        <li>
          <a href="https://website-astro-car.vercel.app/" target="_blank">
            Astro Car – лендинг автомобиля
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.about-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.page-title {
  font-family: $font-secondary;
  color: $color-brown;
  text-align: center;
  margin-bottom: 30px;
}

.about-section {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid $color-light;

  h2 {
    color: $color-brown;
    margin-bottom: 12px;
    font-size: 24px;
  }

  p, li {
    color: $color-dark;
    line-height: 1.6;
  }

  ul {
    padding-left: 20px;
    list-style: disc;
  }

  a {
    color: $color-orange;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

.tech-list {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none !important;
  padding: 0 !important;

  li {
    background: rgba($color-orange, 0.1);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 14px;
    color: $color-brown;
  }
}

.components-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
  font-size: 14px;

  th, td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid $color-orange;
    color: $color-brown;
  }

  th {
    background: $color-light;
    color: $color-brown;
    font-weight: 600;
  }

  code {
    background: $color-light;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
    color: $color-orange;
  }
}
</style>