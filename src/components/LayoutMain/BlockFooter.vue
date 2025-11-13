<template>
  <footer class="f-r p-top-35 p-bottom-36 color-gray-3 a-center j-between bg-black">
    <ul class="f-c g-8">
      <li v-for="p in pages" :key="p.path">
        <LinkRouter text="b-4" target="_self" :href="p.path" color="white">{{ p.name }}</LinkRouter>
      </li>
    </ul>
    <LinkRouter href="/" color="white" target="_self" text="h-2"><LogoText2 :class="isMobile()? 'ha-136': 'ha-182'" /></LinkRouter>
    <ul class="f-c g-8">
      <li v-for="l in links" :key="l.name">
        <LinkBase text="b-4" target="_blank" :href="l.url" color="white" class="g-8"><SvgIcon :name="l.icon"/>{{ l.name }}</LinkBase>
      </li>
    </ul>
  </footer>
</template>

<script setup lang="ts">
import LogoText2 from '@/assets/icons/logo/lapka-text2.svg';
import { pages, links } from '@/data/static';
import { LinkBase, LinkRouter, SvgIcon } from '@/ui';
import { useWindowSize } from '@vueuse/core';

const { width } = useWindowSize();
const isMobile = () => width.value < 768;
</script>

<style scoped lang="scss">
@use '../../ui/styles/variables' as *;
footer {
  border-top: 1*$n solid currentColor;
}
</style>
