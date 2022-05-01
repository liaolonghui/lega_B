import { shallowMount } from '@vue/test-utils'
import RenderVNode from '@/components/RenderVNode'

describe('RenderVNode.vue', () => {
  it('RenderVNode', () => {
    const VNode = '666666'
    const wrapper = shallowMount(RenderVNode, {
      props: {
        VNode
      }
    })
    expect(wrapper.text()).toBe(VNode)
  })
})
