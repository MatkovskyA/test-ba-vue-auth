<template>
  <div>
    <div>
      <div>
        <div>
          <img src="" alt="">
        </div>
        <div>
          <span>Фамилия/имя: Матковский Анатолий</span>
          <span>Возраст: 33</span>
          <span>Город проживания: Москва</span>
          <span>Профессия: Фронтенд разработчик</span>
        </div>
      </div>
      <UILink href="mailto:service@in-line.ru" text="Написать на почту"><MailIcon /></UILink>
      <UILink href="tel:88002007430" text="Позвонить по телефону"><PhoneIcon/></UILink>
    </div>
  </div>
</template>

<script setup>
import UILink from './UILink/UILink.vue';
import MailIcon from './UIIcons/MailIcon.vue';
import PhoneIcon from './UIIcons/PhoneIcon.vue';

</script>

<style scoped></style>
