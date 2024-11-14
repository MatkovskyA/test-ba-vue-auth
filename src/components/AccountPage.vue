<template>
  <div>
    <div class="p-6 rounded-2xl border shadow-md shadow-gray-300">
      <div class="flex gap-4 mb-4 flex-wrap justify-center">
        <div class="max-w-[140px] max-h-[155px] rounded-xl overflow-hidden m-2 shadow-md shadow-gray-400">
          <img src="../assets/Yandex-conf.png" alt="Image">
        </div>
        <div class="flex flex-col p-6 justify-start">
          <span>Фамилия/имя: Матковский Анатолий</span>
          <span>Возраст: 33 года</span>
          <span>Город проживания: Москва</span>
          <span>Профессия: Фронтенд разработчик</span>
          <span>Семейное положение: женат</span>
        </div>
      </div>
      <div class="flex gap-4 justify-center flex-wrap">
        <UILink href="mailto:service@in-line.ru" text="Написать на почту"><MailIcon /></UILink>
        <UILink href="tel:88002007430" text="Позвонить по телефону"><PhoneIcon/></UILink>
      </div>
    </div>
  </div>
</template>

<script setup>
import UILink from './UIComponents/UILink.vue';
import MailIcon from './UIIcons/MailIcon.vue';
import PhoneIcon from './UIIcons/PhoneIcon.vue';

</script>

<style scoped></style>
