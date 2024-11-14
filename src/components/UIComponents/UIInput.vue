<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input 
      class=""
      :type="type" 
      :name="name" 
      :id="id" 
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
      > 
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: String,
  type: String,
  name: String,
  id: String,
  placeholder: String,
  label: String,

})
</script>
