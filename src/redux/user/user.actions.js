export const SetCurrentUser = (user) => ({
  //same as what the reducer is expecting
  type: "SET_CURRENT_USER",
  payload: user,
});
