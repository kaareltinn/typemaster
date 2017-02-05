'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import App from '../../containers/App.jsx';
import StatsArea from '../../components/StatsArea.jsx';
import TypeArea from '../../components/TypeArea.jsx';
import WordArea from '../../components/WordArea.jsx';

describe('App', () => {
  var renderApp = ((words, typed) => {
    return shallow(
      <App words={words} typed={typed} startTime={new Date().valueOf()}/>
    )
  });

  it('renders words area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let appBox = renderAppBox(words, typed)
    expect(appBox).to.contain(<WordArea words={words} typed={typed}/>)
  });

  it('renders type area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let appBox = renderAppBox(words, typed)

    expect(appBox).to.have.descendants(TypeArea)
  });

  it('renders stats area', () => {
    let words = "a ab aab".split('')
    let typed = "".split('')
    let appBox = renderAppBox(words, typed)

    expect(appBox).to.have.descendants(StatsArea)
  });
});
