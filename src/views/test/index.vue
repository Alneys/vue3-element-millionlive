<script setup lang="ts">
import ViewHeader from '@/components/ViewHeader.vue';
</script>

<template>
  <ViewHeader title="Test" />
  <div v-for="i in [...Array(50).keys()]" :key="i">{{ i }}</div>
</template>

<style lang="scss" scoped></style>
