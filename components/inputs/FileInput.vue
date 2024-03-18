<script setup lang="ts">
const model = defineModel({
  type: String,
  default: '',
})

const emit = defineEmits(['change'])

const onFileChange = (e: Event) => {
  emit('change', e)
}
</script>

<template>
  <UInput
    v-model="model"
    type="file"
    accept="image/png"
    input-class="cursor-pointer [&::file-selector-button]:cursor-pointer
              [&::file-selector-button]:dark:bg-primary-400 [&::file-selector-button]:bg-primary-500
              [&::file-selector-button]:dark:hover:bg-primary-300 [&::file-selector-button]:hover:bg-primary-600
              [&::file-selector-button]:dark:text-gray-800 [&::file-selector-button]:text-white
              [&::file-selector-button]:border-none [&::file-selector-button]:rounded
              [&::file-selector-button]:mr-2 [&::file-selector-button]:-my-2 [&::file-selector-button]:px-2"
    @change="onFileChange"
  />
</template>
