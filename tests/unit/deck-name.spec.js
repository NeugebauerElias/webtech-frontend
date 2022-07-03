import { mount } from '@vue/test-utils'
import DeckList from '@/components/DeckList'

describe('Testing DeckList.vue', () => {
  it('should render a deck card for each deck', () => {
    // when

    const wrapper = mount(DeckList, {
      propsData: {
        decks: [
          {
            albumId: 8,
            name: 'Christopher',
            cards: []
          }
        ]
      }
    })

    const deckTitle = wrapper.find('.routerDeck')
    expect(deckTitle.text()).toBe('Christopher')
    // then
  })
})
