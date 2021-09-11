import { configureStore } from '@reduxjs/toolkit';
import userInfoReducer from './Slice/AuthSlice';

const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
