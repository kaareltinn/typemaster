'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import AppBox from '../../components/AppBox.jsx';
import StatsArea from '../../components/StatsArea.jsx';
import TypeArea from '../../components/TypeArea.jsx';
import WordArea from '../../components/WordArea.jsx';

describe('AppBox', () => {
  var renderAppBox = ((words, typed) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <AppBox words={words} typed={typed} startTime={new Date().valueOf()}/>
    );
    return renderer.getRenderOutput();
  });

  it('renders words area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let app = renderAppBox(words, typed)

    let wordArea = app.props.children[0]
    expect(wordArea.type).to.eq(WordArea)
  });

  it('renders type area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let app = renderAppBox(words, typed)

    let typeArea = app.props.children[1]
    expect(typeArea.type).to.eq(TypeArea)
  });

  it('renders stats area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let app = renderAppBox(words, typed)

    let statsArea = app.props.children[2]
    expect(statsArea.type).to.eq(StatsArea)
  });
});
