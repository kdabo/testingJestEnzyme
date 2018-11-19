import React from 'react';
// connect function from react-redux library talks to Redux store which contains all the reducers and state through use of Provider tag
// Provider tag from 'react-redux' talks direct to connect functions throughout our component
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

// Root component allows creating Provider tag with the redux store
// on the fly we can swap out component that is going to be placed within the provider tag
// createStore takes two arguments - the list of reducers, and initial state of the application
// defining initialState - we are passing the second argument to create store so that when the app boots up
// there is possibility of defining initial state
export default ({ children, initialState = {} }) => {
  const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
};