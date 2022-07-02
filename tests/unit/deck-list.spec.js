import { mount } from '@vue/test-utils'
import DeckList from '@/components/DeckList'
import DeckCard from '@/components/DeckCard'

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
          },
          {
            albumId: 9,
            name: 'Geo',
            cards: []
          }
        ]
      }
    })

    // then
    const deckCards = wrapper.findAllComponents(DeckCard)
    expect(deckCards.length).toBe(2)
  })
})
