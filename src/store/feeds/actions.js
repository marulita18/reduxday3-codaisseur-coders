import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export const startLoading = () => {
  return {
    type: "feed/startLoading",
  };
};

export const postsFetched = (data) => {
  return {
    type: "feed/postFetched",
    payload: data,
  };
};

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading());
  const morePosts = await axios.get(`${API_URL}/?limit=5`);
  console.log("my moreposts", morePosts.data.rows);
  dispatch(postsFetched(morePosts.data.rows));
}
