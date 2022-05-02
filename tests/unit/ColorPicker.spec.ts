import { mount, VueWrapper } from "@vue/test-utils"
import ColorPicker from "@/components/ColorPicker.vue"
import rgbHex from "rgb-hex"

const defaultColors = ["#ffffff", "#f5222d", "#fa541c", "#fadb14", "#52c41a", "#1890ff", "#722ed1", "#8c8c8c", "#000000", ""]
let wrapper: VueWrapper<any>

describe('ColorPicker Component', () => {
  beforeAll(() => {
    wrapper = mount(ColorPicker, {
      props: {
        value: "#ffffff"
      }
    })
  })
  it('should render the correct interface', () => {
    // 左侧
    expect(wrapper.find('input').exists()).toBeTruthy()
    const input = wrapper.get('input').element
    expect(input.type).toBe('color')
    expect(input.value).toBe('#ffffff')
    // 右侧
    expect(wrapper.findAll('.picked-color-list li').length).toBe(defaultColors.length)
    // 首个li
    const first = wrapper.get('li:first-child div').element as HTMLElement
    expect('#' + rgbHex(first.style.backgroundColor)).toBe(defaultColors[0])
    // 最后li
    const last = wrapper.get('li:last-child div').element as HTMLElement
    expect(last.classList.contains('transparent-back')).toBeTruthy()
  })
  it('should send the correct event when change input', async () => {
    const blackHex = "#000000"
    const input = wrapper.get('input')
    await input.setValue(blackHex)
    expect(wrapper.emitted()).toHaveProperty('change')
    const events = wrapper.emitted('change') || []
    expect(events[0]).toEqual([blackHex])
  })
  it('should send correct event when clicking the color list', async () => {
    await wrapper.get('li:first-child div').trigger('click')
    const events = wrapper.emitted('change') || []
    expect(events[1]).toEqual([defaultColors[0]])
  })
})
