<script setup>
import { ref } from 'vue'

const count = ref(5)

const increment = () => {
  count.value++
}

const decrement = () => {
  count.value--
}

const reset = () => {
  count.value = 0
}

const value5 = () => {
  count.value += 5
}

const randomize = () => {
  count.value = Math.floor(Math.random() * 100)
}

</script>

<template>
    <div class="counter-container">
        <h2>Мой счётчик</h2>
        <p class="counter-value" :style="{ color: count > 0 ? 'green' : count < 0 ? 'red' : '#2c3e50' }">{{ count }}</p>
        <div class="button-group">
            <button class="btn btn-plus" @click="increment">+1</button>
            <button class="btn btn-minus" @click="decrement">-1</button>
            <button class="btn btn-plus5" @click="value5">+5</button>
            <button class="btn btn-reset" @click="reset">Сброс</button>
            <button class="btn btn-random" @click="randomize">🎲 Random</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.counter-container {
    text-align: center;
    margin: 40px auto;
    padding: 30px;
    max-width: 400px;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    h2 {
        color: black;
    }
}

.counter-value {
    font-size: 48px;
    font-weight: bold;
    margin: 20px 0;
    color: black;
}

.button-group {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }
}

.btn-plus {
    background-color: #42b983;
    color: white;

    &:hover {
        background-color: #359268;
    }
}

.btn-minus {
    background-color: #e74c3c;
    color: white;

    &:hover {
        background-color: #c0392b;
    }
}

.btn-reset {
    background-color: #95a5a6;
    color: white;

    &:hover {
        background-color: #7f8c8d;
    }
}

.btn-plus5 {
    background-color: #3498db;
    color: white;

    &:hover {
        background-color: #2980b9;
    }
}

.btn-random {
    background-color: #9b59b6;
    color: white;

    &:hover {
        background-color: #8e44ad;
    }
}
</style>