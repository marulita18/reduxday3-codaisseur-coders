const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/loggedIn": {
      console.log("action", action);
      return {
        me: action.payload.user,
        accessToken: action.payload.token,
      };
    }

    default:
      return state;
  }
}
