<script setup lang="ts">
import {
  type Duration,
  endOfDay,
  format,
  isSameDay,
  startOfDay,
  sub,
} from 'date-fns'
import { useScreens } from 'vue-screen-utils'

const model = defineModel({
  type: Object,
  default: {
    start: startOfDay(sub(new Date(), { days: 14 })),
    end: endOfDay(new Date()),
  },
  set(value) {
    return {
      start: startOfDay(value.start),
      end: endOfDay(value.end),
    }
  },
})

const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
  popper: {
    type: Object,
    default: () => ({ placement: 'bottom-start' }),
  },
  overlay: {
    type: Boolean,
    default: true,
  },
})

const ranges = [
  { label: 'Last 7 days', duration: { days: 7 } },
  { label: 'Last 14 days', duration: { days: 14 } },
  { label: 'Last 30 days', duration: { days: 30 } },
  { label: 'Last 3 months', duration: { months: 3 } },
  { label: 'Last 6 months', duration: { months: 6 } },
  { label: 'Last year', duration: { years: 1 } },
]

const { mapCurrent } = useScreens({
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
})
const columns = mapCurrent({ lg: 2 }, 1)

function isRangeSelected(duration: Duration) {
  return (
    isSameDay(model.value.start, sub(new Date(), duration)) &&
    isSameDay(model.value.end, new Date())
  )
}

function selectRange(duration: Duration) {
  model.value = { start: sub(new Date(), duration), end: new Date() }
}

const label = computed(() => {
  if (model.value.start && model.value.end) {
    return (
      format(model.value.start, 'd MMM, yyy') +
      ' - ' +
      format(model.value.end, 'd MMM, yyy')
    )
  }
  return 'Select date range'
})
</script>

<template>
  <UPopover :popper="popper" :overlay>
    <UButton
      icon="i-tabler-calendar"
      class="flex sm:hidden"
      :color="props.color"
    />
    <UButton
      icon="i-tabler-calendar"
      class="hidden sm:flex"
      :label="label"
      :color="props.color"
    />

    <template #panel="{ close }">
      <div
        class="flex flex-col items-center divide-y divide-gray-200 sm:flex-row sm:divide-x dark:divide-gray-800"
      >
        <div class="grid grid-cols-2 gap-1 p-2 sm:grid-cols-1">
          <UButton
            v-for="(range, index) in ranges"
            :key="index"
            :label="range.label"
            color="gray"
            variant="ghost"
            class="rounded-lg"
            :class="[
              isRangeSelected(range.duration)
                ? 'bg-gray-100 dark:bg-gray-800'
                : 'hover:bg-gray-50 dark:hover:bg-gray-800/50',
            ]"
            @click="selectRange(range.duration)"
          />
        </div>

        <DatePicker
          v-model="model"
          v-bind="$attrs"
          :columns="columns"
          @close="close"
        />
      </div>
    </template>
  </UPopover>
</template>
