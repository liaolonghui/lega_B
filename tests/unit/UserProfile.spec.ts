import { mount, VueWrapper } from "@vue/test-utils";
import UserProfile from "@/components/UserProfile.vue";
import { message } from "ant-design-vue";
import store from "@/store/index"

let wrapper: VueWrapper<any>
jest.mock('ant-design-vue', () => ({
  message: {
    success: jest.fn()
  }
}))
// jest.mock('vuex')
const mockRoutes: string[] = []
jest.mock('vue-router', () => ({
  useRouter: () => ({
    push: (url: string) => mockRoutes.push(url)
  })
}))

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
    jest.useFakeTimers()
    wrapper = mount(UserProfile, {
      props: {
        user: { isLogin: false }
      },
      global: {
        components: mockComponents,
        provide: {
          store
        }
      }
    })
  })
  it('UserProfile when isLogin is false', async () => {
    // console.log(wrapper.html())
    expect(wrapper.get('div').text()).toBe('登录')
    // 点击登录
    await wrapper.get('div').trigger('click')
    expect(message.success).toHaveBeenCalled()
    expect(store.state.user.userName).toBe('廖龙辉')
  })
  it('UserProfile when islogin is true', async () => {
    await wrapper.setProps({
      user: { userName: '廖龙辉', isLogin: true }
    })
    // console.log(wrapper.html())
    expect(wrapper.get('div.user-profile-dropdown > div').text()).toBe('登出')
    expect(wrapper.get('.user-profile-component').html()).toContain('廖龙辉')
    expect(wrapper.find('.user-profile-component').exists()).toBeTruthy()
    // 点击登出
    await wrapper.get('div.user-profile-dropdown > div').trigger('click')
    expect(store.state.user.isLogin).toBeFalsy()
    expect(message.success).toBeCalledTimes(1)
    jest.runAllTimers() // 跑完所有timer
    expect(mockRoutes).toEqual(['/'])
  })
  afterAll(() => {
    // config.renderStubDefaultSlot = false
  })
  afterEach(() => {
    (message as jest.Mocked<typeof message>).success.mockReset()
  })
})