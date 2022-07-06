import axios from 'axios';
import {
  HOME_API_CALL_BEGIN,
  HOME_API_CALL_SUCCESS,
  HOME_API_CALL_FAILURE,
  HOME_API_CALL_DISMISS_ERROR,
} from './constants';
import { set } from 'lodash';

export function apiCall(args = {}) {
  return dispatch => {
    // optionally you can have getState as the second argument
    dispatch({
      type: HOME_API_CALL_BEGIN,
    });

    const promise = new Promise((resolve, reject) => {
      let doRequest;

      const headers = {};
      set(headers, 'category_type', '1');
      set(headers, 'Accept', 'application/json');
      set(headers, 'Content-Type', 'application/json; charset=utf-8');
      set(headers, 'language', 'en');
      // set(
      //   headers,
      //   'Authorization',
      //   'Bearer 478fa67f092e6a965cbad2cfb908254cd97b5f67c3422c1aeb35f51a4d01da93',
      // );

      if (args.method === 'PUT') {
        doRequest = axios.put(args.url, args.data, {
          headers: headers,
        });
      } else if (args.method === 'POST') {
        doRequest = axios.post(args.url, args.data, {
          headers: headers,
        });
      } else if (args.method === 'DELETE') {
        doRequest = axios.delete(args.url, {
          headers: headers,
        });
      } else {
        doRequest = axios.get(args.url, {
          headers: headers,
        });
      }

      doRequest.then(
        res => {
          if (args.callback) {
            args.callback(res);
          }
          dispatch({
            type: HOME_API_CALL_SUCCESS,
            data: res,
          });
          resolve(res);
        },
        // Use rejectHandler as the second argument so that render errors won't be caught.
        err => {
          if (args.callback) {
            args.callback(err);
          }
          dispatch({
            type: HOME_API_CALL_FAILURE,
            data: { error: err },
          });
          // if (err.response && err.response.status === 401) {
          //   window.location.href = '/';
          // }
          reject(err.response);
        },
      );
    });

    return promise;
  };
}

export function dismissApiCallError() {
  return {
    type: HOME_API_CALL_DISMISS_ERROR,
  };
}

// export function reducer(state, action) {
//   switch (action.type) {
//     case HOME_API_CALL_BEGIN:
//       // Just after a request is sent
//       console.log('We are in api begin event');
//       return {
//         ...state,
//         apiCallPending: true,
//         apiCallError: null,
//       };

//     case HOME_API_CALL_SUCCESS:
//       // The request is success

//       console.log('We are in api success event');
//       return {
//         ...state,
//         apiCallPending: false,
//         apiCallError: null,
//         // myBlogs: action.data,
//       };

//     case HOME_API_CALL_FAILURE:
//       // The request is failed
//       return {
//         ...state,
//         apiCallPending: false,
//         apiCallError: action.data.error,
//       };

//     case HOME_API_CALL_DISMISS_ERROR:
//       // Dismiss the request failure error
//       return {
//         ...state,
//         apiCallError: null,
//       };

//     default:
//       return state;
//   }
// }
