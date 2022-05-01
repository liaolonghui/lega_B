import { mount, VueWrapper } from "@vue/test-utils";
import UserProfile from "@/components/UserProfile.vue";

let wrapper: VueWrapper<any>
jest.mock('ant-design-vue')
jest.mock('vuex')
jest.mock('vue-router')

const mockComponent1 = {
  template: '<div><slot></slot></div>'
}
const mockComponent2 = {
  template: '<div><slot></slot><slot name="overlay"></slot></div>'
}
const mockComponents = {
  'a-button': mockComponent1,
  'a-dropdown-button': mockComponent2,
  'router-link': mockComponent1,
  'a-menu': mockComponent1,
  'a-menu-item': mockComponent1,
}

describe('test UserProfile component', () => {
  beforeAll(() => {
    wrapper = mount(UserProfile, {
      props: {
        user: { isLogin: false }
      },
      global: {
        components: mockComponents
      }
    })
  })
  it('UserProfile when isLogin is false', () => {
    // console.log(wrapper.html())
    expect(wrapper.get('div').text()).toBe('登录')
  })
  it('UserProfile when islogin is true', async () => {
    await wrapper.setProps({
      user: { userName: '廖龙辉', isLogin: true }
    })
    // console.log(wrapper.html())
    expect(wrapper.get('div.user-profile-dropdown > div').text()).toBe('登出')
    expect(wrapper.get('.user-profile-component').html()).toContain('廖龙辉')
    expect(wrapper.find('.user-profile-component').exists()).toBeTruthy()
  })
  afterAll(() => {
    // config.renderStubDefaultSlot = false
  })
})