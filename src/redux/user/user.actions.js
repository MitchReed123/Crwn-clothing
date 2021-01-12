import { UserActionTypes } from "./user.tpyes";
export const SetCurrentUser = (user) => ({
  //same as what the reducer is expecting
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
