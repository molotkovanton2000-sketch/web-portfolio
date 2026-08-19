<script setup>
import { ref, onMounted } from "vue"

const posts = ref([])
const loading = ref(true)
const error = ref(null)

const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    if (!response.ok) throw new Error(`Ошибка HTTP: ${response.status}`)
    posts.value = await response.json()
  } catch (err) {
    error.value = err.message
    console.error('Ошибка:', err.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => fetchPosts())
</script>

<template>
  <div class="posts-list">
    <div v-if="loading" class="posts-list__loading">⏳ Загрузка постов...</div>
    <div v-else-if="error" class="posts-list__error">❌ {{ error }}</div>
    <div v-else>
      <h2 class="posts-list__title">📝 Список постов</h2>
      <ul class="posts-list__items">
        <li v-for="post in posts" :key="post.id" class="posts-list__item">
          <router-link :to="{ name: 'post-detail', params: { id: post.id } }">
            <h3 class="posts-list__item-title">{{ post.title }}</h3>
          </router-link>
          <p class="posts-list__item-body">{{ post.body }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.posts-list {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.posts-list__loading,
.posts-list__error {
  text-align: center;
  padding: 20px 0;
}

.posts-list__error {
  color: #e74c3c;
  background: lighten(#e74c3c, 35%);
  padding: 10px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.posts-list__title {
  font-family: $font-secondary;
  color: $color-brown;
  text-align: center;
  margin-bottom: 24px;
}

.posts-list__items {
  list-style: none;
  padding: 0;
}

.posts-list__item {
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

    &:hover .posts-list__item-title {
      color: $color-orange;
    }
  }

  &-title {
    margin: 0 0 8px 0;
    color: $color-brown;
    font-size: 20px;
    transition: color 0.2s;
  }

  &-body {
    margin: 0;
    color: $color-grey;
    line-height: 1.5;
  }
}
</style>