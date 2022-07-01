import { mount } from '@vue/test-utils'
import DeckView from '@/views/DeckView'
import DeckList from '@/components/DeckList'

describe('Testing DeckView.vue', () => {
  it('should have deck list componet', () => {
    // when
    const wrapper = mount(DeckView)

    // then
    const deckList = wrapper.findComponent(DeckList)
    expect(deckList.exists()).toBeTruthy()
  })
})
