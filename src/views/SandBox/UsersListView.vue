<script setup>
import { ref, onMounted } from "vue"

const users = ref([])
const loading = ref(true)
const error = ref(null)

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`)
    users.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.error('Ошибка:', err.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchUsers())
</script>

<template>
  <div class="users-list">
    <div v-if="loading" class="users-list__loading">⏳ Загрузка пользователей...</div>
    <div v-else-if="error" class="users-list__error">❌ {{ error }}</div>
    <div v-else>
      <h2 class="users-list__title">👥 Список пользователей</h2>
      <ul class="users-list__items">
        <li v-for="user in users" :key="user.id" class="users-list__item">
          <router-link :to="{ name: 'user-detail', params: { id: user.id } }">
            <h3 class="users-list__item-name">{{ user.name }}</h3>
            <p class="users-list__item-text">✉️ {{ user.email }}</p>
            <p class="users-list__item-text">📞 {{ user.phone }}</p>
            <p class="users-list__item-text">🌐 {{ user.website }}</p>
            <p class="users-list__item-text">🏢 {{ user.company.name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.users-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.users-list__loading,
.users-list__error {
  text-align: center;
  padding: 20px 0;
}

.users-list__error {
  color: #e74c3c;
  background: lighten(#e74c3c, 35%);
  padding: 10px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.users-list__title {
  font-family: $font-secondary;
  color: $color-brown;
  text-align: center;
  margin-bottom: 24px;
}

.users-list__items {
  list-style: none;
  padding: 0;
}

.users-list__item {
  background: $white;
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid $color-light;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba($color-orange, 0.1);
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    display: block;

    &:hover .users-list__item-name {
      color: $color-orange;
    }
  }

  &-name {
    margin: 0 0 8px 0;
    color: $color-brown;
    font-size: 20px;
    transition: color 0.2s;
  }

  &-text {
    margin: 4px 0;
    color: $color-grey;
    font-size: 14px;
  }
}
</style>