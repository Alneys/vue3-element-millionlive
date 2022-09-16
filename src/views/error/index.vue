<script setup lang="ts">
import ViewHeader from '@/views/components/ViewHeader.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const handleClick = () => {
  router.push('/');
};
</script>

<template>
  <ViewHeader title="Error" />
  <p>There is nothing here.</p>
  <el-link type="default" target="_blank" @click="handleClick">
    Back to top
  </el-link>
</template>
<style lang="scss" scoped></style>
