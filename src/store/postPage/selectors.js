export const selectPostAndComments = (reduxState) => {
  return !reduxState.postPage.loading
    ? {
        post: reduxState.postPage.post,
        comments: reduxState.postPage.comments,
      }
    : null;
};
