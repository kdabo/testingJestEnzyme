import tv4 from 'tv4';
import stateSchema from './stateSchema';

//by calling get State function, it will return all the state from redux store
export default ({ dispatch, getState }) => (next)=> (action) => {
    next(action);

   if (!tv4.validate(getState(), stateSchema)) {
       console.warn('Invalid schema state detected');
   }
}