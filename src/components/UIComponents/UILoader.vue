<template>
  <div class="loader" v-if="isLoading">
    <div class="circle"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean,
    required: true
  }
});
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px; /* Или другой размер */
}

.circle {
  width: 50px;
  height: 50px;
  border: 5px solid #3498db; /* Цвет круга */
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>