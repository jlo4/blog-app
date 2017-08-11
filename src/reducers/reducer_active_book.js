//State argument is not application state
//but only state this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
    //payload is action's book
      return action.payload;
  }
  return state;
}
