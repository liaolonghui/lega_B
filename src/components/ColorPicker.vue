<template>
  <div class="lego-color-picker">
    <div class="native-color-container">
      <input type="color" :value="value" @input="handleChange" />
    </div>
    <ul class="picked-color-list">
      <li v-for="(item, i) in colors" :key="i" @click="handleClick(item)">
        <div v-if="item.startsWith('#')" :style="{ backgroundColor: item }" class="color-item"></div>
        <div v-else class="color-item transparent-back"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
const defaultColors = ["#ffffff", "#f5222d", "#fa541c", "#fadb14", "#52c41a", "#1890ff", "#722ed1", "#8c8c8c", "#000000", ""]

export default defineComponent({
  props: {
    value: {
      type: String,
      default: '#ffffff'
    },
    colors: {
      type: Array as PropType<string[]>,
      default: defaultColors
    }
  },
  emits: ["change"],
  setup(props, context) {
    const handleChange = (e: any) => {
      context.emit('change', e.target.value)
    }

    const handleClick = (color: string) => {
      context.emit('change', color)
    }

    return {
      handleChange,
      handleClick
    }
  }
})
</script>

<style scoped>
.lego-color-picker {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.native-color-container input {
  width: 70px;
  height: 50px;
  cursor: pointer;
}
.picked-color-list {
  margin-top: 10px;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.picked-color-list > li {
  list-style: none;
  margin: 2px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}
.picked-color-list > li > div {
  width: 20px;
  height: 20px;
}
.transparent-back {
  background: url('~@/assets/transparent.jpg') no-repeat;
}
</style>