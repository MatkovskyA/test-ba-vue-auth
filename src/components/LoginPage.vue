<template>
  <div>
    <div>
      <form @submit.prevent="login">
        <h2>Войти в личный кабинет</h2>
        <label for="username">Логин</label>
        <input type="text" v-model="username" name="username" id="username" placeholder="Введите логин">
        <label for="password">Пароль</label>
        <input type="password" v-model="password" name="password" id="password" placeholder="***">
        <button>Войти</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const login = () => {
  if(username.value === 'user' && password.value === '123456') {
    router.push('/dashboard');
  } else {
    errorMessage.value = 'Неверный логин или пароль'
  }
}
</script>

<style scoped>

</style>