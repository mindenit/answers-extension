<script setup lang="ts">
  import { Icon } from '@iconify/vue/dist/iconify.js';
</script>

<template>
  <div class="navbar text-primary-content dark:text-white p-2">
    <div class="flex-1 pl-2">
      <Logo />
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal menu-xs">
        <li>
          <RouterLink to="/options-page">
            <Icon icon="ph:gear" width="20" />
          </RouterLink>
        </li>
        <li>
          <div class="dropdown dropdown-bottom dropdown-end">
            <div
              tabindex="0"
              role="button"
              class="flex gap-1"
            >
              <Icon icon="ph:dots-three-outline-vertical" width="20" />
            </div>
            <ul
              tabindex="0"
              class="dropdown-content menu bg-white rounded-box z-[1] shadow-lg"
            >
              <li><ThemeSwitch /></li>
              <li></li>
              <li>
                <RouterLink
                  to="/common/about"
                  class="text-primary"
                >
                  <i-ph-question />
                  About
                </RouterLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped></style>
