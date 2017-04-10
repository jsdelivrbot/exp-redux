// State is the state this reducer is responsable for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECT' :
      return action.payload;
      break;
  }

  return state;
}