<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input 
      class="bg-gray-700 p-1 rounded-md
          focus:border-blue-500 
          focus:ring focus:ring-blue-500 
          border-2 
          border-transparent 
          transition duration-200 
          ease-in-out 
          {error ? 'border-red-500' : ''}"
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
