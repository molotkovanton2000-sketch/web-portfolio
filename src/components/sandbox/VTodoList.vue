<script setup>
import { ref } from 'vue'

const todos = ref([
  { id: 1, text: 'Изучить Vue', done: true },
  { id: 2, text: 'Сделать счётчик', done: true },
  { id: 3, text: 'Сделать Todolist', done: false }
])

const newTodoText = ref('')
let nextId = 4

const addTodo = () => {
  if (newTodoText.value.trim() === '') return
  todos.value.push({
    id: nextId++,
    text: newTodoText.value,
    done: false
  })
  newTodoText.value = ''
}

const removeTodo = (id) => {
  todos.value = todos.value.filter(todo => todo.id !== id)
}

const clearCompleted = () => {
  todos.value = todos.value.filter(todo => !todo.done)
}

const markAllCompleted = () => {
  todos.value.forEach(todo => todo.done = true)
}

const completedFirst = () => {
  todos.value.sort((a, b) => b.done - a.done)
}

const uncompletedFirst = () => {
  todos.value.sort((a, b) => a.done - b.done)
}

const taskTemplates = [
  'Купить продукты',
  'Позвонить маме',
  'Сделать зарядку',
  'Прочитать книгу',
  'Выучить новую фишку JS',
  'Написать пост в блог',
  'Разобрать почту',
  'Погулять на свежем воздухе'
]

const addRandomTodo = () => {
  const randomIndex = Math.floor(Math.random() * taskTemplates.length)
  todos.value.push({
    id: nextId++,
    text: taskTemplates[randomIndex],
    done: false
  })
}
</script>

<template>
    <div class="todo-container">
        <h2 class="todo__title">📋 Список задач</h2>
        <p class="todo__subtitle">Управляй своими делами</p>
    
        <div class="todo__card">
            <!-- Форма добавления -->
            <div class="todo__form">
                <input type="text" v-model="newTodoText" placeholder="Что нужно сделать?" @keyup.enter="addTodo"
                    class="todo__input" />
                <button class="todo__btn todo__btn--add" @click="addTodo">
                    ➕ Добавить
                </button>
            </div>
    
            <!-- Статистика -->
            <div class="todo__stats">
                <span>Выполнено: {{ todos.filter(t => t.done).length }} из {{ todos.length }}</span>
            </div>
    
            <!-- Список задач -->
            <ul class="todo__list" v-if="todos.length > 0">
                <li v-for="todo in todos" :key="todo.id" class="todo__item" :class="{ 'todo__item--done': todo.done }">
                    <label class="todo__checkbox">
                        <input type="checkbox" v-model="todo.done" />
                        <span class="todo__checkmark"></span>
                    </label>
                    <span class="todo__text">{{ todo.text }}</span>
                    <button class="todo__delete" @click="removeTodo(todo.id)" title="Удалить">
                        ✕
                    </button>
                </li>
            </ul>
            <div v-else class="todo__empty">
                🎉 Поздравляю! Все задачи выполнены.
            </div>
    
            <!-- Блок управления -->
            <div class="todo__actions">
                <button class="todo__btn todo__btn--sort" @click="uncompletedFirst">
                    🔽 Сначала невыполн.
                </button>
                <button class="todo__btn todo__btn--sort" @click="completedFirst">
                    🔼 Сначала выполн.
                </button>
                <button class="todo__btn todo__btn--mark" @click="markAllCompleted">
                    ✔ Отметить всё
                </button>
                <button class="todo__btn todo__btn--clear" @click="clearCompleted">
                    🗑 Очистить выполн.
                </button>
                <button class="todo__btn todo__btn--random" @click="addRandomTodo">
                    ✨ Случайная
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.todo-container {
    max-width: 700px;
    margin: 0 auto;
    padding: 30px 0;
}

.todo__title {
    font-family: $font-secondary;
    font-size: 32px;
    color: $color-brown;
    text-align: center;
    margin-bottom: 4px;

    @include mobile-sm {
        font-size: 26px;
    }
}

.todo__subtitle {
    font-size: 16px;
    color: $color-grey;
    text-align: center;
    margin-bottom: 24px;
}

.todo__card {
    background: $white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.04);

    @include mobile-sm {
        padding: 16px;
    }
}

// Форма
.todo__form {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;

    @include mobile-sm {
        flex-direction: column;
    }
}

.todo__input {
    flex: 1;
    padding: 12px 16px;
    border: 2px solid $color-light;
    border-radius: 10px;
    font-size: 16px;
    font-family: $font-primary;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: $color-orange;
    }

    @include mobile-sm {
        padding: 10px 14px;
    }
}

.todo__btn {
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 500;
    font-family: $font-primary;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
    }
}

.todo__btn--add {
    background: $color-orange;
    color: $white;

    &:hover {
        background: darken($color-orange, 8%);
    }
}

.todo__btn--clear {
    background: #e74c3c;
    color: $white;

    &:hover {
        background: darken(#e74c3c, 8%);
    }
}

.todo__btn--mark {
    background: #3498db;
    color: $white;

    &:hover {
        background: darken(#3498db, 8%);
    }
}

.todo__btn--sort {
    background-color: rgb(16, 211, 16);
    color: $color-dark;

    &:hover {
        background: darken(rgb(16, 211, 16), 10%);
    }
}

.todo__btn--random {
    background: #9b59b6;
    color: $white;

    &:hover {
        background: darken(#9b59b6, 8%);
    }
}

// Статистика
.todo__stats {
    text-align: center;
    font-size: 14px;
    color: $color-grey;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid $color-light;
}

// Список
.todo__list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px 0;
}

.todo__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 8px;
    transition: background 0.2s;
    border-bottom: 1px solid rgba(0, 0, 0, 0.04);

    &:hover {
        background: rgba($color-orange, 0.04);
    }

    &--done .todo__text {
        text-decoration: line-through;
        color: $color-grey;
    }
}

.todo__checkbox {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    user-select: none;

    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .todo__checkmark {
        display: inline-block;
        width: 22px;
        height: 22px;
        background: $white;
        border: 2px solid $color-orange;
        border-radius: 6px;
        transition: all 0.2s;

        &::after {
            content: '';
            position: absolute;
            top: 4px;
            left: 7px;
            width: 6px;
            height: 12px;
            border: solid $white;
            border-width: 0 2px 2px 0;
            transform: rotate(45deg);
            opacity: 0;
            transition: opacity 0.2s;
        }
    }

    input:checked~.todo__checkmark {
        background: $color-orange;
        border-color: $color-orange;

        &::after {
            opacity: 1;
        }
    }
}

.todo__text {
    flex: 1;
    font-size: 16px;
    color: $color-dark;
}

.todo__delete {
    background: none;
    border: none;
    font-size: 18px;
    color: $color-grey;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;
    transition: all 0.2s;

    &:hover {
        background: rgba(231, 76, 60, 0.1);
        color: #e74c3c;
        transform: scale(1.1);
    }
}

.todo__empty {
    text-align: center;
    font-size: 18px;
    color: $color-orange;
    padding: 24px 0;
}

.todo__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    padding-top: 12px;
    border-top: 1px solid $color-light;

    .todo__btn {
        font-size: 13px;
        padding: 8px 16px;
    }
}

// Адаптив для кнопок
@include mobile-sm {
    .todo__actions {
        flex-direction: column;
        align-items: stretch;

        .todo__btn {
            width: 100%;
            justify-content: center;
        }
    }
}
</style>