import React from 'react';
// connect function from react-redux library talks to Redux store which contains all the reducers and state through use of Provider tag
// Provider tag from 'react-redux' talks direct to connect functions throughout our component
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

// Root component allows creating Provider tag with the redux store
// on the fly we can swap out component that is going to be placed within the provider tag
// createStore takes two arguments - the list of reducers, and initial state of the application
export default props => {
  return (
    <Provider store={createStore(reducers, {})}>
      {props.children}
    </Provider>
  )
};
