<template>
  <div class="props-table">
    <div v-for="(val, key) in finalProps" :key="key" class="props-item">
      <component v-if="val" :is="val.component" :value="val.value"></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { TextComponentProps } from "@/defaultProps"
import { mapPropsToForms, PropsToForms } from "@/propsMap" // 属性到表单的映射
import { reduce } from "lodash-es"

export default defineComponent({
  name: "props-table",
  props: {
    props: {
      type: Object as PropType<Partial<TextComponentProps>>,
      required: true,
    },
  },
  setup(props) {
    const finalProps = reduce(
      props.props,
      (result, val, key) => {
        const newKey = key as keyof TextComponentProps
        const item = mapPropsToForms[newKey]
        if (item) {
          item.value = val
          result[newKey] = item
        }

        return result
      },
      {} as PropsToForms
    )

    return {
      finalProps,
    }
  },
})
</script>

<style scoped></style>
