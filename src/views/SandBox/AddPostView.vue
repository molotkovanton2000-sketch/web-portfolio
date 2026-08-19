<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const title = ref('')
const body = ref('')
const loading = ref(false)
const error = ref(null)
const success = ref(false)

const submitForm = async () => {
  loading.value = true
  error.value = null
  success.value = false

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title.value,
        body: body.value,
        userId: 1
      })
    })
    if (!response.ok) throw new Error(`Ошибка: ${response.status}`)

    const newPost = await response.json()
    console.log('Пост создан:', newPost)

    success.value = true
    title.value = ''
    body.value = ''

    setTimeout(() => {
      success.value = false
      router.push('/sandbox/posts')
    }, 2000)
  } catch (err) {
    error.value = err.message
    console.error('Ошибка:', err.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="add-post">
    <h1 class="add-post__title">➕ Добавить пост</h1>

    <form @submit.prevent="submitForm" class="add-post__form">
      <div class="add-post__field">
        <label for="title" class="add-post__label">Заголовок</label>
        <input id="title" type="text" v-model="title" class="add-post__input" required />
      </div>
      <div class="add-post__field">
        <label for="body" class="add-post__label">Текст поста</label>
        <textarea id="body" v-model="body" rows="6" class="add-post__textarea" required></textarea>
      </div>
      <button type="submit" :disabled="loading" class="add-post__submit">
        {{ loading ? 'Отправка...' : 'Опубликовать' }}
      </button>
    </form>

    <div v-if="error" class="add-post__error">❌ {{ error }}</div>
    <div v-if="success" class="add-post__success">✅ Пост успешно создан! Перенаправление...</div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/style/_variables.scss';

.add-post {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.add-post__title {
  font-family: $font-secondary;
  color: $color-brown;
  text-align: center;
  margin-bottom: 30px;
}

.add-post__form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.add-post__field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.add-post__label {
  font-weight: 600;
  color: $color-brown;
}

.add-post__input,
.add-post__textarea {
  padding: 10px 14px;
  border: 1px solid $color-light;
  border-radius: 8px;
  font-size: 16px;
  font-family: $font-primary;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: $color-orange;
    box-shadow: 0 0 0 3px rgba($color-orange, 0.1);
  }
}

.add-post__textarea {
  resize: vertical;
  min-height: 120px;
}

.add-post__submit {
  background: $color-orange;
  color: $white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: darken($color-orange, 8%);
    transform: translateY(-2px);
  }

  &:disabled {
    background: $color-grey;
    cursor: not-allowed;
  }
}

.add-post__error {
  color: #e74c3c;
  background: lighten(#e74c3c, 35%);
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  border-left: 4px solid #e74c3c;
}

.add-post__success {
  color: #27ae60;
  background: lighten(#27ae60, 45%);
  padding: 10px;
  border-radius: 8px;
  margin-top: 20px;
  border-left: 4px solid #27ae60;
}
</style>