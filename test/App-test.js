'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import App from '../App.jsx';

describe('App', () => {
  var buildApp = (() => {
    return TestUtils.renderIntoDocument(
      <App />
    );
  });

  it('loads the initial words from the server', () => {
    let app = buildApp();

    let words = app.state.words;
    console.log(words);
    expect(words).to.have.lengthOf(13);
  });
});
