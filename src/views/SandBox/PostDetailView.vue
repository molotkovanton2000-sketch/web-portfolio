<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const post = ref(null)
const loading = ref(true)
const error = ref(null)
const comments = ref([])
const commentsLoading = ref(true)

const fetchPost = async () => {
  try {
    const postId = route.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (!response.ok) throw new Error(`Пост с id ${postId} не найден`)
    post.value = await response.json()
    await fetchComments()
  } catch (err) {
    error.value = err.message
    console.error('Ошибка:', err.message)
  } finally {
    loading.value = false
  }
}

const fetchComments = async () => {
  try {
    const postId = route.params.id
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    if (!response.ok) throw new Error(`Ошибка загрузки комментариев`)
    comments.value = await response.json()
  } catch (err) {
    console.error('Ошибка комментариев:', err.message)
    comments.value = []
  } finally {
    commentsLoading.value = false
  }
}

onMounted(() => fetchPost())
</script>

<template>
  <div class="post-detail">
    <button class="post-detail__back" @click="$router.push('/sandbox/posts')">← К списку постов</button>

    <div v-if="loading" class="post-detail__loading">⏳ Загрузка поста...</div>
    <div v-else-if="error" class="post-detail__error">❌ {{ error }}</div>
    <div v-else-if="post">
      <h1 class="post-detail__title">{{ post.title }}</h1>
      <p class="post-detail__body">{{ post.body }}</p>
    </div>

    <div v-if="commentsLoading" class="post-detail__comments-loading">💬 Загрузка комментариев...</div>
    <div v-else-if="comments.length === 0" class="post-detail__comments-empty">💬 Нет комментариев</div>
    <div v-else class="post-detail__comments">
      <h3 class="post-detail__comments-title">Комментарии ({{ comments.length }})</h3>
      <div v-for="comment in comments" :key="comment.id" class="post-detail__comment">
        <strong class="post-detail__comment-name">{{ comment.name }}</strong>
        <small class="post-detail__comment-email">{{ comment.email }}</small>
        <p class="post-detail__comment-body">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.post-detail__back {
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

.post-detail__loading,
.post-detail__comments-loading {
  text-align: center;
  color: $color-grey;
  padding: 20px 0;
}

.post-detail__error {
  color: #e74c3c;
  background: lighten(#e74c3c, 35%);
  padding: 10px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.post-detail__title {
  font-size: 28px;
  color: $color-brown;
  margin-bottom: 12px;
}

.post-detail__body {
  font-size: 18px;
  line-height: 1.6;
  color: $color-dark;
  margin-bottom: 30px;
}

.post-detail__comments {
  margin-top: 30px;
  border-top: 1px solid $color-light;
  padding-top: 20px;
}

.post-detail__comments-title {
  color: $color-brown;
  margin-bottom: 16px;
}

.post-detail__comments-empty {
  color: $color-grey;
  text-align: center;
}

.post-detail__comment {
  background: $color-light;
  padding: 12px 16px;
  margin-bottom: 12px;
  border-radius: 8px;
  border-left: 3px solid $color-orange;

  &-name {
    display: block;
    margin-bottom: 4px;
    color: $color-brown;
  }

  &-email {
    display: block;
    margin-bottom: 8px;
    color: $color-grey;
    font-size: 12px;
  }

  &-body {
    margin: 0;
    color: $color-dark;
  }
}
</style>