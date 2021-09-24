import axios from "axios";
import { API_URL } from "../../config";

export const userLogggedIn = (data) => {
  return {
    type: "auth/loggedIn",
    payload: data,
  };
};

export function login(email, password) {
  return async function thunk(dispatch, getState) {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const token = response.data.jwt;

      const getUser = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = getUser.data;
      //   console.log("user", user);
      dispatch(userLogggedIn({ token, user }));
    } catch (e) {
      console.log("this", e.message);
    }
  };
}
