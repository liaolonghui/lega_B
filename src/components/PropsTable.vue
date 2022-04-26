<template>
  <div class="props-table">
    <div v-for="(val, key) in finalProps" :key="key" class="props-item">
      <div class="props-description">{{ val.text }}</div>
      <div class="props-info">
        <component
          :is="val.component"
          :[val.valueProp]="val.value"
          v-bind="val.extraProps"
          v-on="val.events"
        >
          <template v-if="val.options">
            <component
              v-for="(option, k) in val.options"
              :key="k"
              :is="val.subComponent"
              :value="option.value"
            >
              {{ option.text }}
            </component>
          </template>
        </component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue"
import { TextComponentProps } from "@/defaultProps"
import { mapPropsToForms } from "@/propsMap" // 属性到表单的映射
import { reduce } from "lodash-es"

interface FormProps {
  component: string;
  subComponent?: string;
  value: string;
  text?: string;
  extraProps?: { [key: string]: any };
  options?: { text: string; value: any }[];
  valueProp: string;
  eventName: string;
  events: { [key: string]: (e: any) => void };
}

export default defineComponent({
  name: "props-table",
  props: {
    props: {
      type: Object as PropType<Partial<TextComponentProps>>,
      required: true,
    },
  },
  emits: ["change"],
  setup(props, context) {
    const finalProps = computed(() => {
      return reduce(
        props.props,
        (result, val, key) => {
          const newKey = key as keyof TextComponentProps
          const item = mapPropsToForms[newKey]
          if (item) {
            const { valueProp="value", eventName="change", initalTransform, afterTransform} = item
            const newItem: FormProps = {
              ...item,
              value: initalTransform ? initalTransform(val) : val,
              valueProp,
              eventName,
              events: {
                [eventName]: (e) => { context.emit("change", { key, value: afterTransform ? afterTransform(e) : e }) }
              }
            }
            result[newKey] = newItem
          }

          return result
        },
        {} as { [key: string]: FormProps }
      )
    })

    return {
      finalProps,
    }
  },
})
</script>

<style scoped>
.props-item {
  display: flex;
  justify-content: center;
}
.props-item .props-description {
  width: 25%;
}
.props-item .props-info {
  width: 70%;
}
</style>
