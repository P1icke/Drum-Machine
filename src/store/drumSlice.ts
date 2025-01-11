import {createSlice} from "@reduxjs/toolkit";


const drumSlice = createSlice({
  name: "drum",
  initialState: {
    lastPlayed: 'Press a key'
  },
  reducers: {
    updateLastPlayed: (state, action) => {
      state.lastPlayed = action.payload;
    }
  }
})

export const {updateLastPlayed} = drumSlice.actions;

export default drumSlice.reducer