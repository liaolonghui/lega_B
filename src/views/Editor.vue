<template>
  <a-layout class="editor">
    <a-layout-sider width="300" style="background: #fff">
      <div class="sidebar-container">组件列表</div>
      <components-list :list="defaultTextTemplates" @onItemClick="addItem" />
    </a-layout-sider>
    <a-layout>
      <a-layout-content class="preview-container">
        <p>画布区域</p>
        <div class="preview-list" id="canvas-area">
          <component
            v-for="component in components"
            :key="component.id"
            :is="component.name"
            v-bind="component.props"
          />
        </div>
      </a-layout-content>
    </a-layout>
    <a-layout-sider width="300" style="background: purple" class="setting">
      组件属性
    </a-layout-sider>
  </a-layout>
</template>

<script lang="ts">
import { GlobalDataProps } from "@/store"
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import LText from "@/components/LText.vue" // 使用LText组件
import { TextComponentProps } from "@/defaultProps"
import { defaultTextTemplates } from "../defaultTemplates" // 要在左侧展示的模板的数据
import ComponentsList from "@/components/ComponentsList.vue" // 左侧展示模板的组件

export default defineComponent({
  components: {
    LText,
    ComponentsList,
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = computed(() => store.state.editor.components)

    const addItem = (props: TextComponentProps) => {
      store.commit("addComponent", props)
    }

    return {
      components,
      defaultTextTemplates,
      addItem,
    }
  },
})
</script>

<style scoped>
.editor {
  color: #000;
}
.editor .preview-container {
  padding: 30px 0;
  background: #eee;
}
.editor .preview-container > p {
  text-align: center;
}
.editor .preview-list {
  width: 70%;
  min-height: 500px;
  margin: 0 auto;
  background-color: #fff;
}
.ant-layout-content {
  min-height: calc(100vh - 50px);
}
#canvas-area {
  position: relative;
}
</style>
