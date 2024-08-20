<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'bg-gray-50 dark:bg-gray-950',
  },
})
</script>

<template>
  <div>
    <NuxtLayout>
      <div>
        <NuxtLoadingIndicator :throttle="0" />
        <NuxtPage />
      </div>
    </NuxtLayout>
    <UModals />
    <UNotifications
      :ui="{
        strategy: 'override',
        position: 'top-0 right-0',
      }"
    />
  </div>
</template>

<style>
html {
  font-family: 'GT Haptik', sans-serif;
}

/* Color Mode transition */
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root) {
  z-index: 1;
}

::view-transition-new(root) {
  z-index: 2147483646;
}

.dark::view-transition-old(root) {
  z-index: 2147483646;
}

.dark::view-transition-new(root) {
  z-index: 1;
}
</style>
