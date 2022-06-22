import { shallowMount } from '@vue/test-utils'
import HomeView from '@/components/HomeView'

describe('HomeView.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeView, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
