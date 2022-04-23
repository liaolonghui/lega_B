<template>
  <component
    :is="tag"
    :style="styleProps"
    @click="handleClick"
    class="l-text-component"
  >
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import useComponentCommon from "@/hooks/useComponentCommon"
import {
  textDefaultProps,
  textStylePropNames,
  transformToComponentProps,
} from "../defaultProps"
const defaultProps = transformToComponentProps(textDefaultProps) // 得到LText组件的props

export default defineComponent({
  name: "l-text",
  props: {
    tag: {
      // 需要l-text展示什么标签
      type: String,
      default: "div",
    },
    ...defaultProps,
  },
  setup(props) {
    const { styleProps, handleClick } = useComponentCommon(
      props,
      textStylePropNames
    ) // 从props中取出样式属性 并且得到一个handleClick

    return {
      styleProps,
      handleClick,
    }
  },
})
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  display: block;
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  position: relative !important;
  box-sizing: border-box;
  white-space: pre-wrap;
}
</style>
