<script setup lang="ts">
import { Text, Link, Heading } from '@mindenit/ui';

</script>

<template>
  <div>
    <RouterLinkUp />

    <Heading size="large">Політика конфеденційності</Heading>

    <Text size="paragraph">Поліка конфеденційності наведена за 
      <Link 
        href="https://telegra.ph/Pol%D1%96tika-konf%D1%96denc%D1%96jnost%D1%96-komandi-Mindenit-10-29" 
        :asChild="false" 
        class="text-primary no-underline"
      >посиланням</Link>
    </Text>

    <Text size="paragraph">
      Для більшої інформації, будь ласка напишіть нам:
      <Link
        href="mailto:ketronix2@gmail.com"
        class="text-primary no-underline"
        :asChild="false"
      >
        ketronix2@gmail.com
      </Link>
    </Text>
  </div>
</template>
