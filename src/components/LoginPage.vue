<template>
  <div class="bg-blue-400 rounded-xl p-10 shadow-">
    <form @submit.prevent="login" class="flex flex-col gap-[15px]">
      <h2 class="text-2xl">Войти в личный кабинет</h2>
      <UILoader :isLoading="loading"/>
      <UIInput 
        v-model="username"
        label="Логин: "
        type="text"
        name="login"
        placeholder="Введите логин"
        id="login"
      />
      <UIInput 
        v-model="password"
        label="Пароль: "
        type="password"
        name="password"
        placeholder="******"
        id="password"
      />
      <!-- <label for="username"> Логин: 
        <input type="text" id="username" v-model="username">
      </label>
      <label for="password"> Пароль: 
        <input type="password" id="password" v-model="password">
      </label> -->
      <button>Войти</button>
      <p v-if="errorMessage" class="error text-red-300 font-bold p-1 bg-white rounded-xl">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UIInput from './UIComponents/UIInput.vue';
import UILoader from './UIComponents/UILoader.vue';

const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();
const loading = ref(false);

const login = () => {
  loading.value = true;
  errorMessage.value = ''; // Сбрасываем сообщение об ошибке

  setTimeout(() => {
    if (username.value === 'user' && password.value === '123456') {
      router.push('/dashboard'); // Переход на маршрут карточки пользователя
    } else {
      errorMessage.value = 'Неверный логин или пароль';
    }
    loading.value = false; // Останавливаем загрузку
  }, 2000);
};
</script>

<style scoped>
</style>