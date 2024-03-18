<script setup lang="ts">
const perPage = defineModel('perPage', {
  type: Number,
  default: 10,
})
const page = defineModel('page', {
  type: Number,
  default: 1,
})

const props = defineProps({
  totalItems: {
    type: Number,
    required: true,
  },
})

const pageTo = computed(() =>
  Math.min(page.value * perPage.value, props.totalItems ?? 0),
)
const pageFrom = computed(() =>
  Math.min((page.value - 1) * perPage.value + 1, pageTo.value),
)
</script>

<template>
  <div
    class="flex h-full flex-col items-center justify-between gap-2 py-3 lg:flex-row"
  >
    <div class="flex items-center gap-1.5">
      <span class="text-sm leading-5">Rows per page:</span>

      <USelect
        v-model="perPage"
        :options="[5, 10, 20, 30, 50, 100]"
        class="me-2 w-20"
        size="xs"
      />
    </div>
    <div class="flex items-center gap-4">
      <span v-if="props.totalItems" class="text-sm leading-5">
        Showing
        <span class="font-medium">{{ pageFrom }}</span>
        to
        <span class="font-medium">{{ pageTo }}</span>
        of
        <span class="font-medium">{{ props.totalItems }}</span>
        results
      </span>
      <UPagination
        v-model="page"
        :page-count="perPage"
        :total="props.totalItems"
        :max="5"
      />
    </div>
  </div>
</template>
