<script setup lang="ts">
const attrs = useAttrs()
</script>

<template>
  <UButton
    v-bind="attrs"
    :ui="{
      padding: {
        '2xs': 'px-1 sm:px-2 py-1',
        xs: 'px-1.5 sm:px-2.5 py-1.5',
        sm: 'px-1.5 sm:px-2.5 py-1.5',
        md: 'px-2 sm:px-3 py-2',
        lg: 'px-2.5 sm:px-3.5 py-2.5',
        xl: 'px-2.5 sm:px-3.5 py-2.5',
      },
    }"
  >
    <span class="hidden sm:inline">{{ attrs.label }}</span>
  </UButton>
</template>
