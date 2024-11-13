<template>
  <a :href="formattedHref" target="_blank">
    {{ text }} 
    <slot></slot>
  </a>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  text: String,
  required: true,
  href: String
})

const formattedHref = computed(() => {
  if(props.href.startsWith('tel:') || props.href.startsWith('mailto:')) {
    return props.href
  } else {
    return `http://${props.href}`
  }
})

</script>

<style scoped>
a {
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: aqua;
  background-color: rgb(65, 68, 68);
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
}
</style>