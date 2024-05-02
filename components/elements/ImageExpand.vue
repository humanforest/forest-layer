<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  wrapperClass: {
    type: String,
    default: 'aspect-h-9 aspect-w-16',
  },
  alt: {
    type: String,
    default: '',
  },
})

const openImage = ref(false)
</script>

<template>
  <div class="rounded-md" :class="wrapperClass">
    <NuxtImg
      :src="src"
      :alt="alt"
      class="cursor-pointer rounded-md object-cover"
      @click="openImage = true"
    />

    <UModal
      v-model="openImage"
      :ui="{
        container: 'items-center',
        width: '',
        padding: 'sm:p-4',
      }"
    >
      <div class="p-4">
        <img :src="src" :alt="alt" class="rounded-md" />
      </div>
    </UModal>
  </div>
</template>
