<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const user = ref(null)
const loading = ref(true)
const error = ref(null)
const posts = ref([])
const postsLoading = ref(true)

const fetchUser = async () => {
  try {
    const userId = route.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if (!response.ok) throw new Error(`Пользователь с id ${userId} не найден`)
    user.value = await response.json()
    await fetchPosts()
  } catch (err) {
    error.value = err.message
    console.error('Ошибка:', err.message)
  } finally {
    loading.value = false
  }
}

const fetchPosts = async () => {
  try {
    const userId = route.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    if (!response.ok) throw new Error(`Ошибка загрузки постов`)
    posts.value = await response.json()
  } catch (err) {
    console.error('Ошибка постов:', err.message)
    posts.value = []
  } finally {
    postsLoading.value = false
  }
}

onMounted(() => fetchUser())
</script>

<template>
  <div class="user-detail">
    <button class="user-detail__back" @click="$router.push('/sandbox/users')">← К списку пользователей</button>

    <div v-if="loading" class="user-detail__loading">⏳ Загрузка пользователя...</div>
    <div v-else-if="error" class="user-detail__error">❌ {{ error }}</div>
    <div v-else-if="user">
      <div class="user-detail__info">
        <h1 class="user-detail__info-name">{{ user.name }}</h1>
        <p class="user-detail__info-text">✉️ {{ user.email }}</p>
        <p class="user-detail__info-text">📞 {{ user.phone }}</p>
        <p class="user-detail__info-text">🌐 {{ user.website }}</p>
        <p class="user-detail__info-text">🏢 {{ user.company.name }}</p>
      </div>

      <div class="user-detail__posts">
        <h2 class="user-detail__posts-title">📝 Посты пользователя</h2>
        <div v-if="postsLoading" class="user-detail__posts-loading">⏳ Загрузка постов...</div>
        <div v-else-if="posts.length === 0" class="user-detail__posts-empty">📭 У пользователя нет постов</div>
        <div v-else>
          <div v-for="post in posts" :key="post.id" class="user-detail__post">
            <h3 class="user-detail__post-title">{{ post.title }}</h3>
            <p class="user-detail__post-body">{{ post.body }}</p>
            <router-link :to="{ name: 'post-detail', params: { id: post.id } }" class="user-detail__post-link">
              Читать далее →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.user-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.user-detail__back {
  background: none;
  border: none;
  color: $color-orange;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
}

.user-detail__loading,
.user-detail__posts-loading,
.user-detail__posts-empty {
  text-align: center;
  color: $color-grey;
  padding: 20px 0;
}

.user-detail__error {
  color: #e74c3c;
  background: lighten(#e74c3c, 35%);
  padding: 10px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.user-detail__info {
  background: $color-light;
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 30px;
}

.user-detail__info-name {
  margin: 0 0 10px 0;
  color: $color-brown;
}

.user-detail__info-text {
  margin: 6px 0;
  color: $color-dark;
}

.user-detail__posts {
  h2 {
    color: $color-brown;
    margin-bottom: 16px;
  }
}

.user-detail__post {
  background: $white;
  border: 1px solid $color-light;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  &-title {
    margin: 0 0 8px 0;
    color: $color-brown;
  }

  &-body {
    margin: 0 0 12px 0;
    color: $color-grey;
    line-height: 1.4;
  }

  &-link {
    color: $color-orange;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>