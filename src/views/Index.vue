<template>
  <a-layout>
    <a-layout-header>
      <router-link to="/">廖龙辉的乐高项目</router-link>
      <user-profile :user="user"></user-profile>
    </a-layout-header>
    <a-layout>
      <router-view></router-view>
    </a-layout>
    <a-layout-footer>© 廖龙辉 版权所有</a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts">
import UserProfile from "@/components/UserProfile.vue"
import { computed } from "vue"
import { useStore } from "vuex"

const store = useStore()
const user = computed(() => store.state.user)
</script>

<style scoped>
.ant-layout > .ant-layout-header {
  position: relative;
  font-size: 20px;
  font-weight: 520;
  color: #fff;
  height: 80px;
  line-height: 80px;
}
.ant-layout > .ant-layout-header > a {
  color: #fff;
}
ant-layout > .ant-layout-footer {
  line-height: 1.5;
}
</style>
