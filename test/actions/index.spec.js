'use strict'

import * as actions from '../../actions'

describe('actions', () => {
  it('should create an action to type a char', () => {
    const text = 'a'
    const expectedAction = {
      type: actions.TYPE_CHAR,
      text
    }

    expect(actions.typeChar(text)).to.deep.equal(expectedAction)
  })

  it('should create an action to start timer', () => {
    const expectedAction = {
      type: actions.START,
      started: true
    }

    expect(actions.start()).to.deep.eq(expectedAction)
  })

  it('should create an action to stop timer', () => {
    const expectedAction = {
      type: actions.STOP,
      started: false
    }

    expect(actions.stop()).to.deep.eq(expectedAction)
  })
})
