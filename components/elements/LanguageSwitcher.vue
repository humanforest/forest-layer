<script setup lang="ts">
const { setLocale, locale } = useI18n()

const items = [
  [
    {
      label: '🇬🇧 English',
      locale: 'en-GB',
      click: () => {
        setLocale('en-GB')
      },
    },
    {
      label: '🇪🇸 Spanish',
      locale: 'es-ES',
      click: () => {
        setLocale('es-ES')
      },
    },
  ],
]
</script>

<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start', strategy: 'absolute' }"
  >
    <!--      :label="locale.split('-')[0].toUpperCase()"-->
    <UButton color="gray" size="xl" variant="ghost" icon="i-tabler-language" />
    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>
      <UIcon
        :name="locale === item.locale ? 'i-tabler-check' : ''"
        class="text-primary ms-auto size-4 shrink-0"
      />
    </template>
  </UDropdown>
</template>
