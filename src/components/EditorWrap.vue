<template>
  <div class="editor-wraper" :class="{ active: active }" @click="setActive(id)">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "editor-wrap",
  emits: ["set-active"],
  props: {
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const setActive = (id: string) => {
      context.emit("set-active", id)
    }

    return {
      setActive,
    }
  },
})
</script>

<style scoped>
.editor-wraper {
  padding: 0;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}
.editor-wraper:hover {
  border: 1px dashed #ccc;
}
.editor-wraper.active {
  border: 1px solid #0f0;
  user-select: none;
  z-index: 6666;
}
</style>
