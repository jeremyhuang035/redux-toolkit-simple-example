import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../features/counter/counterSlice';
import movieSlice from '../features/counter/movieSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    movie: movieSlice,
  },
});
