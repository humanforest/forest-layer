<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array as PropType<
      {
        to: string
        label: string
        hide: boolean
        icon?: string
        mobileLabel?: string
        onClick?: () => void
      }[]
    >,
    required: true,
  },
})
const cols = computed(
  () =>
    `grid-cols-${props.links.map((link) => (link.hide ? 0 : 1)).reduce((a, b) => a + b, 0)}`,
)
</script>

<template>
  <div>
    <div
      class="fixed bottom-0 z-40 my-auto h-16 w-full border-t border-gray-200 bg-gray-100/75 backdrop-blur sm:hidden sm:gap-x-6 sm:px-6 lg:px-8 dark:border-gray-700 dark:bg-gray-900/75"
    >
      <div
        class="mx-auto grid h-full content-stretch divide-x divide-gray-200 font-medium dark:divide-gray-700"
        :class="cols"
      >
        <template v-for="(link, index) of links" :key="index">
          <ULink
            v-if="!link.hide"
            square
            active-class="text-primary items-center font-bold"
            inactive-class="flex items-center"
            :to="link.to"
            exact
            class="flex flex-col items-center justify-center text-sm text-gray-500"
            :active="$route.path.startsWith(link.to)"
            @click="link.onClick"
          >
            <UIcon v-if="link.icon" :name="link.icon" class="size-6 shrink-0" />
            {{ link.mobileLabel ?? link.label }}
          </ULink>
        </template>
      </div>
    </div>
  </div>
</template>
