<script setup lang="ts" name="TeekLayoutProvider">
import Teek, { teekConfigContext } from "vitepress-theme-teek";
import {  ref, provide } from "vue";
import { teekDocConfig } from "../config/config";
import NotFound from "./404.vue";

// 默认文档风
const teekConfig = ref(teekDocConfig);
provide(teekConfigContext, teekConfig);
</script>

<template>
  <Teek.Layout>
    <template #not-found>
      <NotFound />
    </template>
  </Teek.Layout>
</template>

<style lang="scss">
.tk-my.is-circle-bg {
  margin-bottom: 20px;

  .tk-my__avatar.circle-rotate {
    margin-top: 200px;
  }
}
</style>
