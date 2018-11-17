import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'Root';
import App from 'components/App';

//createStore takes two arguments - the list of reducers, and initial state of the application
ReactDOM.render(
  <Root>
    <App/>
  </Root>,
  document.querySelector('#root')
);