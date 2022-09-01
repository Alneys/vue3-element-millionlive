<script setup lang="ts"></script>

<template>
  <div class="layout-footer">
    <span> created by Vue 3 + Element Plus + TypeScript + Scss </span>
    <span> @Alneys_Al </span>
  </div>
</template>

<style lang="scss" scoped>
.layout-footer {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  cursor: default;
  font-size: var(--el-font-size-extra-small);
  span {
    white-space: nowrap;
  }
  > span + span {
    margin-left: calc(2 * var(--el-font-size-extra-small));
  }
}
</style>
