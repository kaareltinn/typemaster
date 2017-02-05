'use strict'

import typingReducer from '../../reducers/TypingReducer'
import * as actions from '../../actions'

describe('typingReducer', () => {
  it('should set typed as array of chars when typed given', () => {
    const result = typingReducer({}, {
      type: actions.TYPE_CHAR,
      text: 'cat'
    })

    expect(result.typed).to.deep.equal(['c', 'a', 't'])
  })
})
