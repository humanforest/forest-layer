<script setup lang="ts">
const search = defineModel('search', { type: String })
const selectedStatus = defineModel('selectedStatus', { type: Array })
const selectedAdvertiser = defineModel('selectedAdvertiser', { type: Array })
const selectedCustomerLocations = defineModel('selectedCustomerLocations', {
  type: Array,
})
const selectedCategories = defineModel('selectedCategories', { type: Array })
const selectedColumns = defineModel('selectedColumns', { type: Array })

defineProps({
  options: {
    type: Object as PropType<{
      status?: string[]
      advertisers?: string[]
      customerLocations?: string[]
      categories?: string[]
    }>,
    required: true,
  },
  columns: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  pending: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['refresh', 'resetFilters'])
const refresh = () => emit('refresh')
const resetFilters = () => emit('resetFilters')

watchDebounced(
  search,
  () => {
    refresh()
  },
  { debounce: 500 },
)
</script>

<template>
  <div
    class="flex w-full flex-col items-center justify-between gap-2 py-3 sm:flex-row"
  >
    <div class="flex w-full flex-wrap gap-2">
      <div v-if="search !== undefined" class="sm:w-48">
        <UInput
          v-model="search"
          icon="i-tabler-search"
          placeholder="Search..."
        />
      </div>
      <div class="flex flex-wrap items-center gap-2 sm:flex-row">
        <FacetedFilter
          v-if="options.status"
          v-model="selectedStatus"
          :options="options.status"
          label="Status"
          searchable
        />
        <FacetedFilter
          v-if="options.advertisers"
          v-model="selectedAdvertiser"
          :options="options.advertisers"
          label="Advertisers"
          searchable
        />
        <FacetedFilter
          v-if="options.customerLocations"
          v-model="selectedCustomerLocations"
          :options="options.customerLocations"
          label="Customer Locations"
          searchable
        />
        <FacetedFilter
          v-if="options.categories"
          v-model="selectedCategories"
          :options="options.categories"
          label="Categories"
          searchable
        />
      </div>
    </div>
    <div class="flex w-full flex-wrap gap-2 sm:w-max sm:flex-nowrap">
      <UButton
        icon="i-tabler-rotate-clockwise"
        loading-icon="i-tabler-rotate-clockwise"
        color="gray"
        :loading="pending"
        @click="refresh"
      />

      <USelectMenu
        v-if="selectedColumns"
        v-model="selectedColumns"
        :options="columns"
        multiple
      >
        <UButton icon="i-tabler-columns-3" color="gray"> Columns </UButton>
      </USelectMenu>

      <UButton
        icon="i-tabler-filter"
        color="red"
        variant="outline"
        label="Reset"
        @click="resetFilters"
      />

      <UPopover v-if="$slots.more" :popper="{ placement: 'bottom-end' }">
        <UButton icon="i-tabler-dots" color="gray" />
        <template #panel>
          <div class="flex flex-col gap-4 p-4">
            <slot name="more" />
          </div>
        </template>
      </UPopover>
    </div>
  </div>
</template>

<style scoped></style>
