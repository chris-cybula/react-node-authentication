const authToken = (state = 'something', action) => {
    switch(action.type) {
      case 'GET_TOKEN':
        return {...state, token: action.payload};

      default:
        return state
    }
  }

  export default authToken