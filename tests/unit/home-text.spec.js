import { shallowMount } from '@vue/test-utils'
import HomeView from '@/components/HomeView'

describe('Testing HomeView.vue', () => {
  it('should render a deck card for each deck', () => {
    // when
    const msg = 'new message'
    const wrapper = shallowMount(HomeView, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
