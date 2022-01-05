import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// load post data
export const fetchPosts = createAsyncThunk("posts/fethcPosts", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((res) => res.json());
  return response;
});

// post slice
const postSlice = createSlice({
  name: "post",
  initialState: {
    allPosts: [],
  },
  reducers: {
    removePost: (state, { payload }) => {
      state.allPosts = state.allPosts.filter((post) => post.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.allPosts = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { removePost } = postSlice.actions;

export default postSlice.reducer;
