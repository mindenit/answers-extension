<script setup lang="ts">
import { Notivue, Notification } from 'notivue'
</script>

<template>
  <div class="min-h-screen grid grid-rows-[auto_1fr_auto]">
    <AppHeader />

    <div class="w-full p-4 prose">
      <RouterView />
    </div>

    <AppFooter />

    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
  </div>
</template>

<style lang="scss"></style>
