<template>
  <a-layout>
    <a-layout-sider>Sider</a-layout-sider>
    <a-layout-content>Editor</a-layout-content>
    <a-layout-sider>Sider</a-layout-sider>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style scoped>
.ant-layout-sider {
  color: #fff;
  background: #3ba0e9;
}
.ant-layout-content {
  min-height: calc(100vh - 150px);
  color: #fff;
  background: gray;
}
</style>
