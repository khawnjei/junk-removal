import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  role: '',
  userData: null,
  accessToken: '',
  refreshToken: '',
  subscription: {},
  fcmToken: '',
  act: '',
};

export const userDataSlice = createSlice({
  name: 'userDATA',
  initialState,
  reducers: {
    setUserRole: (state, action) => {
      state.role = action.payload;
    },
    userData: (state, action) => {
      state.userData = action.payload;
    },
    accessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    subscription: (state, action) => {
      state.subscription = action.payload;
    },
    userAct: (state, action) => {
      state.act = action.payload;
    },
    fcm: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
});

export const {
  userData,
  accessToken,
  refreshToken,
  subscription,
  userAct,
  fcm,
  setUserRole,
} = userDataSlice.actions;

export default userDataSlice.reducer;
