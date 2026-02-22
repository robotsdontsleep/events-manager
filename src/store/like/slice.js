const { createSlice } = require("@reduxjs/toolkit");

const likesSlice = createSlice({
  name: "likes",
  initialState: [],
  reducers: {
    like(state, action) {
      state.push(action.payload);
    },
    dislike(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { like, dislike } = likesSlice.actions;
export default likesSlice.reducer;
