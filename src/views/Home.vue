<template>
  <a-layout-content>
    <TemplateList :list="testData" />
  </a-layout-content>
</template>

<script setup lang="ts">
import { computed } from "vue"
import { useStore } from "vuex"
import { GlobalDataProps } from "../store/index"
import TemplateList from "../components/TemplateList.vue"

const store = useStore<GlobalDataProps>()
const testData = computed(() => store.state.templates.data)
</script>

<style scoped>
.ant-layout-content {
  min-height: calc(100vh - 150px);
  color: #000;
  background: #fff;
}
</style>
