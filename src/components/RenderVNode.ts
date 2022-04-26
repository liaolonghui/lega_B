import { defineComponent } from "vue"

export default defineComponent({
  name: 'render-vnode',
  props: {
    VNode: {
      type: [Object, String],
      required: true
    }
  },
  render() {
    return this.VNode
  }
})