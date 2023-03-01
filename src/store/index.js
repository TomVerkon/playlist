import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

export const reset = createAction('app/reset');

const songsSlice = createSlice({
  name: 'songs',
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      state.splice(state.indexOf(action.payload), 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  }
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
  }
});

// console.log(songsSlice.actions);

// const startingState = store.getState();
// console.log('startingState: ', JSON.stringify(startingState));

// store.dispatch(songsSlice.actions.addSong("New Song!"));

// const finalState = store.getState();
// console.log('finalState: ', JSON.stringify(finalState));

export { store };
// export song action creators
export const { addSong, removeSong } = songsSlice.actions;
// export movies action creators
export const { addMovie, removeMovie } = moviesSlice.actions;  
