import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Auth from 'apis/Auth';

export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async () => {
    try {
      const apiRes = await Auth.getUserInfo();
      if (apiRes && apiRes.status === 200) {
        return apiRes.data.user;
      }
      return {};
    } catch (error) {
      throw error;
    }
  },
);

const initialUserInfo = [
    {
        isAuth: false,
        name: '',
        email: '',
        avatar: '',
        role: 0,
    }
]


const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: initialUserInfo,
  reducers: {
    

    

    // setUserAvt(state, action) {
    //   state.avt = action.payload;
    // },
  },
  extraReducers: {
    [getUserInfo.fulfilled]: (state, action) => {
      const { username, name, avt, coin, favoriteList } = action.payload;
      if (!username || username === '') {
        state.isAuth = false;
        return;
      }
      return { isAuth: true, username, name, avt, coin, favoriteList };
    },
  },
});

const { reducer, actions } = userInfoSlice;
export const { setAddFavorites, setUserCoin, setUserAvt } = actions;
export default reducer;
