<script setup lang="ts">
import { format, parseISO } from 'date-fns'
import type {
  DatePickerDate,
  DatePickerRangeObject,
} from 'v-calendar/dist/types/src/use/datePicker'

const timezone = ref('UTC')

const [date, modifiers] = defineModel({
  type: [Date, Object, String] as PropType<
    DatePickerDate | DatePickerRangeObject | undefined
  >,
  set(value) {
    emitFormChange()
    if (modifiers.date) {
      return (value as Date)?.toISOString().split('T')[0]
    }
    return value
  },
  get(value) {
    if (modifiers.date) {
      return value ? new Date(value) : undefined
    }
    return value
  },
})

const { emitFormChange } = useFormGroup()

const props = defineProps({
  color: {
    type: String,
    default: 'white',
  },
  mode: {
    type: String,
    default: 'date',
    validator: (value: string) => ['date', 'dateTime'].includes(value),
  },
})

const label = computed(() => {
  if (date.value) {
    return format(
      parseISO(date.value?.toISOString().split('T')[0]),
      'd MMM, yyy',
    )
  }
  return 'Select date'
})

const labelDateTime = computed(() => {
  if (date.value) {
    return format(date.value, 'd MMM, yyy hh:mm a')
  }
  return 'Select date'
})
</script>

<template>
  <UPopover :popper="{ placement: 'bottom-start' }" overlay>
    <UButton
      icon="i-tabler-calendar"
      :label="props.mode === 'dateTime' ? labelDateTime : label"
      :color="props.color"
    />

    <template #panel="{ close }">
      <DatePicker
        v-if="modifiers.date"
        v-model="date"
        v-bind="$attrs"
        :mode="props.mode"
        :timezone="timezone"
        @close="close"
      />
      <DatePicker
        v-else
        v-model="date"
        v-bind="$attrs"
        :mode="props.mode"
        :rules="{ minutes: { interval: 5 } }"
      />
    </template>
  </UPopover>
</template>
