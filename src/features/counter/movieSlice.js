import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { increment } from './counterSlice';

const initialState = {
  list: [],
  total: 0,
};

const loadMoviesApi = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = response.json();
  return data;
};

export const loadData = createAsyncThunk('movie/loadData', async () => {
  const response = await loadMoviesApi();
  return response; // result will pass to extraReducer .fulfilled as payload
});

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadDataEnd: (state, { payload }) => {
      state.list = payload;
      state.total = payload.length;
    },
  },
  // Link increment function from couterSlice to trigger a state update in movieSlice
  extraReducers: {
    // [increment]: (state, { payload }) => {
    //   state.list.push('new movie added');
    //   state.total += 1;
    // },
    [loadData.pending]: (state) => {
      console.log('loading data...');
    },
    [loadData.fulfilled]: (state, { payload }) => {
      const filteredData = payload.slice(0, 10);
      state.list = filteredData;
      state.total = filteredData.length;
    },
    [loadData.rejected]: (state, error) => {
      console.log(error);
    },
  },
});

export const { loadDataEnd } = movieSlice.actions;
export default movieSlice.reducer;
