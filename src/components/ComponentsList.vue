<template>
  <div class="create-component-list">
    <div
      class="component-item"
      @click="onItemClick(item)"
      v-for="(item, index) in list"
      :key="index"
    >
      <l-text v-bind="item"></l-text>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import LText from "@/components/LText.vue"

export default defineComponent({
  name: "components-list",
  components: {
    LText,
  },
  emits: ["on-item-click"],
  props: {
    list: {
      type: Array as PropType<{ [key: string]: any }[]>,
      required: true,
    },
  },
  setup(props, context) {
    const onItemClick = (data: any) => {
      context.emit("on-item-click", data)
    }

    return {
      onItemClick,
    }
  },
})
</script>

<style scoped>
.create-component-list .component-item {
  padding: 10px 0;
  text-align: center;
}
.create-component-list .component-item .l-text-component {
  display: block;
  width: 100px !important;
  margin: 0 auto;
}
</style>
