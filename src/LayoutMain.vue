<template>
  <div class="layout">
    <BlockHeader />
    <main class="m-top-136 m-bottom-64 f-c g-96">
      <router-view />
    </main>
    <BlockFooter />
  </div>
</template>

<script setup lang="ts">
import { BlockHeader, BlockFooter } from '@/components';
</script>

<style scoped></style>
