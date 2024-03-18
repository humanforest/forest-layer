<script setup lang="ts">
const model = defineModel({
  type: Array as PropType<{ id: string; label: string }[]>,
})

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  label: {
    type: String,
    default: 'Items',
  },
  selectLabel: {
    type: String,
    default: (props: any) => props.label,
  },
  maxItems: {
    type: Number,
    default: 3,
  },
  allLabel: {
    type: String,
    default: 'All',
  },
  searchable: {
    type: Boolean,
    default: false,
  },
  searchablePlaceholder: {
    type: String,
    default: 'Search...',
  },
})
</script>

<template>
  <USelectMenu
    v-model="model"
    :options="options"
    option-attribute="label"
    multiple
    :searchable="searchable"
    :searchable-placeholder="searchablePlaceholder"
    leading-icon="i-tabler-circle-plus"
    :popper="{ placement: 'bottom-start' }"
  >
    <UButton color="white">
      <UIcon name="i-tabler-circle-plus" class="size-5 transition-transform" />
      <span
        v-if="model?.length"
        class="flex items-center justify-center divide-x divide-gray-300 truncate dark:divide-gray-600"
      >
        <span class="pr-2 text-sm"> {{ props.label }} </span>
        <span class="-my-1 space-x-2 pl-2">
          <UBadge
            v-if="model?.length === options?.length"
            variant="soft"
            color="gray"
            label="All"
            size="xs"
          >
            {{ allLabel }}
          </UBadge>
          <UBadge
            v-else-if="model?.length >= props.maxItems"
            variant="soft"
            color="gray"
            size="xs"
          >
            {{ model?.length }} selected
          </UBadge>
          <UBadge
            v-for="(item, index) in model"
            v-else
            :key="index"
            variant="soft"
            color="gray"
            :label="item.label"
            size="xs"
          />
        </span>
      </span>
      <span v-else>{{ selectLabel }}</span>
    </UButton>
    <template #option="{ option }">
      <UBadge
        v-if="option.color || option.metadata?.color"
        size="xs"
        :label="option.label"
        :color="option.color || option.metadata?.color"
        :variant="'subtle'"
      />
      <div v-else-if="option.avatar" class="flex items-center gap-1">
        <UAvatar
          :src="option.avatar"
          :alt="option.label"
          size="2xs"
          class="mr-2"
        />
        <span class="truncate">{{ option.label }}</span>
      </div>
      <span v-else class="truncate">{{ option.label }}</span>
    </template>
  </USelectMenu>
</template>
