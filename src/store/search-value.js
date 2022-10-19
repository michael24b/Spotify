import { createSlice } from "@reduxjs/toolkit";

const initialToken = localStorage.getItem("token");

const searchValue = createSlice({
  name: "sv",
  initialState: {
    accessToken: "",
    inputValue: "",
    artists: [],
    albums: [],
    loginToken: initialToken,
    currentArtistName: "",
  },

  reducers: {
    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setArtists(state, action) {
      state.artists = action.payload;
    },
    setAlbums(state, action) {
      state.albums = action.payload;
    },

    setCurrentArtistName(state, action) {
      state.currentArtistName = action.payload;
    },
    setToken(state, action) {
      state.loginToken = action.payload;
    },
  },
});

export const svActions = searchValue.actions;

export default searchValue;
