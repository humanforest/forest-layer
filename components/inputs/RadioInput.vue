<script setup lang="ts">
import {
  provideUseId,
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from '@headlessui/vue'

const model = defineModel({
  type: String,
})

const props = defineProps({
  options: {
    type: Array as PropType<{ id: string }[]>,
    default: () => [],
  },
  wrapperClass: {
    type: String,
    default: () => 'grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4',
  },
})

provideUseId(() => useId())
</script>

<template>
  <RadioGroup v-model="model">
    <div :class="props.wrapperClass">
      <RadioGroupOption
        v-for="option in props.options"
        :key="option.id"
        v-slot="{ active, checked }"
        as="template"
        :value="option.id"
      >
        <div
          :class="[
            active
              ? 'border-primary-500 dark:border-primary-400 ring-primary-500 dark:ring-primary-400 ring-2'
              : 'border-gray-300 dark:border-gray-700',
            'relative flex cursor-pointer rounded-lg border bg-white p-5 shadow-sm hover:bg-gray-50 focus:outline-none dark:bg-gray-800 hover:dark:bg-gray-700',
          ]"
        >
          <span class="flex w-full flex-col gap-4">
            <span v-if="$slots.image">
              <slot name="image" :option="option" />
            </span>
            <span class="flex flex-col">
              <RadioGroupLabel
                v-if="$slots.title"
                as="span"
                class="relative font-medium text-gray-900 dark:text-gray-200"
              >
                <slot name="title" :option="option" />
              </RadioGroupLabel>
              <RadioGroupDescription
                v-if="$slots.default"
                as="span"
                class="mt-1 flex items-center text-sm text-gray-500 dark:text-gray-400"
              >
                <div class="relative">
                  <slot name="default" :option="option" />
                </div>
              </RadioGroupDescription>
            </span>
          </span>
          <UIcon
            name="i-tabler-circle-check-filled"
            :class="[
              !checked ? 'invisible' : '',
              'text-primary-500 dark:text-primary-400 absolute right-2 top-2 size-6',
            ]"
            aria-hidden="true"
          />
          <span
            :class="[
              active ? 'border' : 'border-2',
              checked
                ? 'border-primary-500 dark:border-primary-400'
                : 'border-transparent',
              'pointer-events-none absolute -inset-px rounded-lg',
            ]"
            aria-hidden="true"
          />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>
