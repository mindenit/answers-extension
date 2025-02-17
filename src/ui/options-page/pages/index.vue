<script setup lang="ts">
import { FormLabel, Heading, Switch } from '@mindenit/ui';

const optionsStore = useOptionsStore()
// const { toggleDark } = optionsStore
const { isDark, showUpdatePage, profile, others } = storeToRefs(optionsStore)
</script>

<template>
  <div
    class="max-w-xl w-full mx-auto rounded-xl md:my-12 p-4 md:p-8 md:border border-base-200 md:shadow-lg bg-base-100"
  >
    <RouterLinkUp />

    <Heading size="large">Налаштування</Heading>

    <Heading size="medium">Користувацький інтерфейс</Heading>

    <div class="form-control">
      <FormLabel class="dark:text-white text-md">Темна тема</FormLabel>
      <Switch
        v-model="isDark"
        type="checkbox"
        class="toggle bg-primary hover:bg-primary"
      />
    </div>
    <div class="form-control">
      <FormLabel class="dark:text-white text-md" >Показ сторінки оновлень</FormLabel>
      <Switch
        v-model="showUpdatePage"
        type="checkbox"
        class="toggle bg-primary hover:bg-primary"
      />
    </div>
  </div>
</template>
