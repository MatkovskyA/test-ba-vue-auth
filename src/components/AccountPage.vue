<template>
  <div>
    <div class="sm:p-6 p-2 rounded-2xl border shadow-md shadow-gray-300">
      <UserData />
      <div class="flex gap-2 sm:gap-6 justify-center flex-wrap">
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
import UserData from './UserData.vue';

</script>

<style scoped></style>
