<script setup>
import VCounter from '@/components/sandbox/VCounter.vue';
import VTodoList from '@/components/sandbox/VTodoList.vue';
</script>

<template>
    <div class="sandbox">
        <div class="sandbox__container container">
            <h1 class="sandbox__title">Песочница</h1>
            <p class="sandbox__subtitle">Интерактивные компоненты для экспериментов</p>
    
            <!-- Локальная навигация по песочнице -->
            <nav class="sandbox-nav">
                <router-link to="/sandbox" exact class="sandbox-nav__link">Счётчик</router-link>
                <router-link to="/sandbox/todolist" class="sandbox-nav__link">Todo List</router-link>
                <router-link to="/sandbox/posts" class="sandbox-nav__link">Посты</router-link>
                <router-link to="/sandbox/users" class="sandbox-nav__link">Пользователи</router-link>
                <router-link to="/sandbox/add-post" class="sandbox-nav__link">➕ Добавить пост</router-link>
            </nav>
    
            <!-- Здесь отображается контент выбранного раздела -->
            <router-view />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.sandbox {
    background-color: $white;
    min-height: 100vh;
    padding-bottom: 40px;
}

.sandbox__container {
    max-width: 1000px;
    margin: 0 auto;
}

.sandbox__title {
    font-family: $font-secondary;
    font-size: 40px;
    color: $color-brown;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 8px;
}

.sandbox__subtitle {
    font-size: 18px;
    color: $color-grey;
    text-align: center;
    margin-bottom: 30px;
}

.sandbox-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    justify-content: center;
    margin-bottom: 30px;

    &__link {
        padding: 8px 20px;
        background: $color-light;
        border-radius: 30px;
        color: $color-brown;
        text-decoration: none;
        font-weight: 500;
        transition: all 0.2s ease;
        border: 2px solid transparent;

        &:hover {
            background: darken($color-light, 5%);
        }

        &.router-link-exact-active {
            background: $color-orange;
            color: $white;
            border-color: $color-orange;
        }
    }
}
</style>