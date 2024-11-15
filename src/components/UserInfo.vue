<template>
  <div class="flex p-1 justify-center align-center">
    <span class="font-bold mr-2 text-[12px] sm:text-[16px]">{{ userTitle }}</span><span class="text-[12px] sm:text-[16px]">{{ userInfo }}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  userTitle: String,
  userInfo: String
})
</script>

<style scoped>

</style>
