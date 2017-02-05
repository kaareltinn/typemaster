'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import TypeArea from '../../components/TypeArea.jsx';

describe('TypeArea', () => {
  const renderTypeArea = ((handler) => {
    return shallow(
      <TypeArea handler={handler}/>
    )
  })

  it('simulates typing', () => {
    const inputHandler = sinon.spy()
    const typeArea = renderTypeArea(inputHandler)

    typeArea.find('input').simulate('change', { target: { value: 'a' }})
    expect(inputHandler.calledOnce).to.equal(true)
    typeArea.find('input').simulate('change', { target: { value: 'b' }})
    expect(inputHandler.calledTwice).to.equal(true)
  })
})
