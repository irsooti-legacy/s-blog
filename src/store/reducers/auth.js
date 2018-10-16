const initialState = {
  isAuthenticated: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Test':

      return state;
    default:
console.log(action.type)

      return state;
  }
};

export default reducer;
