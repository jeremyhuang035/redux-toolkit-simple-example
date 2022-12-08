import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1; // built-in immer lib, immutable
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, { payload }) => {
      state.count += payload.step;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(incrementAsync.pending, (state) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     });
  // },
});

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 2000);
};

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
