import { createSelector } from "@reduxjs/toolkit";

export const selectLikedItems = (state) => state.likes;

export const selectIsLiked = createSelector(
  [selectLikedItems, (_, id) => id],
  (items, id) => items.some((i) => i.id === id)
);
