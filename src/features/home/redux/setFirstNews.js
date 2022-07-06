import { SET_FIRST_NEWS } from './constants';

export function setFirstNews(data) {
  console.log('testing data rec is-----', data);
  return {
    type: SET_FIRST_NEWS,
    data: data,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case SET_FIRST_NEWS:
      return {
        ...state,
        firstNews: action.data,
      };

    default:
      return state;
  }
}
