<script setup lang="ts">
import { FormLabel, Heading, Switch, TextFieldInput } from '@mindenit/ui';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const optionsStore = useOptionsStore();
const { isDark, showUpdatePage, contentScriptIframeSize, styles } = storeToRefs(optionsStore);

const restrictSize = (value: number, min: number = 200, max: number = 1000): number => {
  return Math.max(min, Math.min(max, Number(value) || min));
};

watch(
  () => contentScriptIframeSize.value.height,
  (newHeight) => {
    const validatedHeight = restrictSize(newHeight);
    optionsStore.setIframeHeight(validatedHeight);
  }
);

watch(
  () => contentScriptIframeSize.value.width,
  (newWidth) => {
    const validatedWidth = restrictSize(newWidth);
    optionsStore.setIframeWidth(validatedWidth);
  }
);
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
      <FormLabel class="dark:text-white text-md">Показ сторінки оновлень</FormLabel>
      <Switch
        v-model="showUpdatePage"
        type="checkbox"
        class="toggle bg-primary hover:bg-primary"
      />
    </div>
    
    <div class="form-control flex flex-col gap-2">
      <FormLabel class="dark:text-white text-md">Розміри модального вікна</FormLabel>
      <TextFieldInput
        v-model.number="contentScriptIframeSize.height"
        class="dark:text-white"
        :disabled="false"
        placeholder="Висота вікна"
        type="number"
        min="200"
        max="1000"
        @input="contentScriptIframeSize.height = restrictSize($event.target.value)"
      />
      <TextFieldInput
        v-model.number="contentScriptIframeSize.width"
        class="dark:text-white"
        :disabled="false"
        placeholder="Ширина вікна"
        type="number"
        min="200"
        max="1000"
        @input="contentScriptIframeSize.width = restrictSize($event.target.value)"
      />
    </div>

    <div class="form-control">
      <FormLabel class="dark:text-white text-md">Покращені стилі для dl.nure.ua</FormLabel>
      <Switch
        v-model="styles"
        type="checkbox"
        class="toggle bg-primary hover:bg-primary"
      />
    </div>
  </div>
</template>