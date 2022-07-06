import initialState from './initialState';
import { reducer as setFullNewsData } from './setFullNewsData';
import { reducer as setFirstNews } from './setFirstNews';

const reducers = [setFullNewsData,setFirstNews];


export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
