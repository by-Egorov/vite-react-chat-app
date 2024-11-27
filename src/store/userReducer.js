const initialState = {
  users: [],
  loggedInUser: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return {
        ...state,
        users: [...state.users, action.payload],
      }
    }
    case 'GET_USER': {
      return {
        ...state,
        users: state.users.find(user => user.email === action.payload)
      }
    }
    case 'SET_LOGGED_IN_USER': {
      return {
        ...state,
        loggedInUser: action.payload
      }
    }
    case 'SET_LOGGED_OUT_USER': {
      return {
        ...state,
        loggedInUser: null
      }
    }
    default:
      return state
  }
}
