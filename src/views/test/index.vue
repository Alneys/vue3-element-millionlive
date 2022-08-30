<script setup lang="ts"></script>

<template>
  <div v-for="i in [...Array(50).keys()]" :key="i">{{ i }}</div>
</template>

<style lang="scss" scoped></style>
