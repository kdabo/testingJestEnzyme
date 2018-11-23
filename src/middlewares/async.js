export default ({dispatch}) => next => action => {
    // check to see if the action has a promise on its 'payload' property
    // if it doesn't, send the action on to the next middlewares
    if (!action.payload || !action.payload.then) {
        return next(action);
    }

    // if it does, wait for the promise to resolve
    // get its data
    // create new action with that data and dispatch it
    action.payload.then(function (response) {
        const newAction = { ...action, payload:response };
        dispatch(newAction);
    });
};