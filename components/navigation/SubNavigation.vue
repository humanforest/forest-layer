<script setup lang="ts">
defineProps({
  links: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div
    class="relative z-30 hidden h-16 items-center border-b border-gray-200 bg-white/75 backdrop-blur sm:block dark:border-gray-700 dark:bg-gray-900/75"
  >
    <UContainer class="flex h-full items-center gap-8 overflow-x-auto">
      <ULink
        v-for="(link, index) of links"
        :key="index"
        active-class="dark:text-white flex h-full items-center font-bold border-b-4 border-primary"
        inactive-class="flex h-full items-center text-gray-500 border-b-4 border-transparent dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
        :to="link.to"
        exact
        :active="$route.path.startsWith(link.to)"
      >
        {{ link.label }}
      </ULink>
    </UContainer>
  </div>
</template>
