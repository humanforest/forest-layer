<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  last: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="space-y-12">
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
      <div>
        <h2 class="text-base leading-7">
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mt-1 text-sm leading-6 text-gray-400 dark:text-gray-500"
        >
          {{ subtitle }}
        </p>
        <div class="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">
          <slot name="section-description" />
        </div>
      </div>

      <div class="grid max-w-2xl grid-cols-1 gap-4 md:col-span-2">
        <div class="grid gap-4 sm:grid-cols-2">
          <slot />
        </div>
      </div>
    </div>
    <UDivider v-if="!last" />
  </div>
</template>
