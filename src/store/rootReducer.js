import { combineReducers } from "@reduxjs/toolkit";
import likesReducer from "store/like/slice";

export const rootReducer = combineReducers({
  likes: likesReducer,
});
