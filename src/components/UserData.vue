<template>
  <div class="flex gap-4 mb-4 flex-wrap justify-center">
    <div class="max-w-[140px] max-h-[155px] rounded-xl overflow-hidden m-2 shadow-md shadow-gray-400">
      <img src="../assets/Yandex-conf.png" alt="Image">
    </div>
    <div class="flex flex-col ">
      <UserInfo userTitle="Фамилия/имя:" userInfo="Матковский Анатолий"/>
      <UserInfo userTitle="Возраст:" userInfo="33 года/лет"/>
      <UserInfo userTitle="Город проживания:" userInfo="Москва"/>
      <UserInfo userTitle="Профессия: " userInfo="Фронтенд разраотчик"/>
      <UserInfo userTitle="Семейное положение:" userInfo="Женат"/>
    </div>
  </div>
</template>

<script setup>
import UserInfo from './UserInfo.vue';

</script>

<style scoped>

</style>