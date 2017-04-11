import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return state.concat([action.payload.data]); // don't do .push()... ES6 = [action.payload.data, ...state]
      break;
  }

  return state;
}
