<script setup lang="ts">
import { Heading, Text, Link } from '@mindenit/ui';

</script>

<template>
  <div>
    <RouterLinkUp />

    <div class="flex justify-center p-5 flex-col gap-4 text-center">
      <Heading size="large">Про нас</Heading>
      <Text size="paragraph">
        Ми — <Link class="no-underline text-primary" href="https://mindenit.org/" :as-child="false">Mindenit</Link>, команда ентузіастів-студентів, яка займається створенням сучасних технологічних рішень для студентів. Наша мета — покращити та полегшити студентське життя завдяки сайтам, ботам та додаткам.
      </Text>

      <Text size="large">Дякуємо за Ваш вибір і проявлену довіру!</Text>

      <div class="flex justify-center gap-4 flex-wrap px-10">
        <RouterLink
          to="/common/change-log"
          class="btn btn-primary"
        >
          Журнал змін
        </RouterLink>
        <RouterLink
          to="/common/privacy-policy"
          class="btn btn-primary"
        >
          Політика конфеденційності
        </RouterLink>
      </div>
    </div>
  </div>
</template>
