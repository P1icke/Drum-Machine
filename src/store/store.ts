import {configureStore} from "@reduxjs/toolkit";
import drumReducer from './drumSlice.ts'

const store = configureStore({
  reducer: {
    drum: drumReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;