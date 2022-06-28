import { SET_FULL_NEWS_DATA } from './constants';

export function setFullNewsData(data) {
  console.log('testing data rec is-----', data);
  return {
    type: SET_FULL_NEWS_DATA,
    data: data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_FULL_NEWS_DATA:
      return {
        ...state,
        fullNewsData: action.data,
      };

    default:
      return state;
  }
}
