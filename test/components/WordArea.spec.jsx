'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import WordArea from '../../components/WordArea.jsx';

describe('WordArea', () => {
  var renderWordArea = ((words, typed) => {
    return shallow(
      <WordArea words={words} typed={typed} />
    )
  })

  it('renders chars without colors when no input', () => {
    let words = "a ab".split('')
    let typed = "".split('')
    let wordArea = renderWordArea(words, typed);

    let letterElements = wordArea.find('p').first().find('span')
    expect(letterElements.first()).to.not.have.style('color')
  })

  it('renders chars green if typed matches', () => {
    let words = "a ab".split('')
    let typed = "a".split('')
    let wordArea = renderWordArea(words, typed);
    
    let letterElements = wordArea.find('p').first().find('span')
    expect(letterElements.at(0)).to.have.style('color', 'green')
    expect(letterElements.at(1)).to.not.have.style('color')
  })

  it('render chars red if typed does not mach', () => {
    let words = "a ab".split('')
    let typed = "b a".split('')
    let wordArea = renderWordArea(words, typed);
    
    let letterElements = wordArea.find('p').first().find('span')
    expect(letterElements.at(0)).to.have.style('color', 'red')
    expect(letterElements.at(2)).to.have.style('color', 'green')
  })
})
