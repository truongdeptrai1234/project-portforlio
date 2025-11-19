/* eslint-disable no-useless-catch */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAddress } from '../../services/apiGeocoding';

// import { getAddress } from "../../services/apiGeocoding";

// function getPosition() {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// }

// async function fetchAddress() {
//   // 1) We get the user's geolocation position
//   const positionObj = await getPosition();
//   const position = {
//     latitude: positionObj.coords.latitude,
//     longitude: positionObj.coords.longitude,
//   };

//   // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
//   const addressObj = await getAddress(position);
//   const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

//   // 3) Then we return an object with the data that we are interested in
//   return { position, address };
// }

const initialState = {
  userName: '',
  position: {},
  userAddress: '',
  status: 'idle',
  error: '',
};
const userSlice = createSlice({
  name: 'user',
  reducers: {
    updateUserName(state, action) {
      state.userName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addAsyncThunk(fetchAddress, {
      pending: (state, action) => {
        state.status = 'pending';
      },
      fulfilled: (state, action) => {
        state.position = action.payload.pos;
        state.userAddress = action.payload.address;
        state.status = 'idle';
      },
      rejected: (state) => {
        state.status = 'error';
        state.error =
          'Fail to get positon. This field must be filled manually with your address ';
      },
    });
  },
  initialState,
});
function getPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => reject(err.message),
    );
  });
}
export const fetchAddress = createAsyncThunk(
  'user/fetchAddress',
  async function () {
    try {
      const pos = await getPosition();
      const currentAddress = await getAddress(pos);
      const address = `${currentAddress?.locality}, ${currentAddress?.city} ${currentAddress?.postcode}, ${currentAddress?.countryName}`;
      return { pos, address };
    } catch (error) {
      throw error;
    }
  },
);

export const { updateUserName } = userSlice.actions;
export default userSlice.reducer;
