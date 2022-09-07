import { configureStore } from '@reduxjs/toolkit';


export interface VideoTimeStamp {
  description: string;
  timeStamp: string;
}

export interface Movie {
  videoUrl: string | undefined;
  id: string;
  title: string;
  filePath: string;
  url: string;
  version: number;
  length: string;
  tags: string[];
  videoTimeStamps: VideoTimeStamp[];
}

export interface AppState {
  allMovies: Movie[],
}

const initialState: AppState = {
  allMovies: [],
};

interface AppReducer {
  [key: string]: (state: any, action: any) => any;
}

const reducers: AppReducer = {
  "default": (state: AppState) => { return { ...state }; },
  'SET_MOVIES': (state: AppState, action: any) => {
    return { ...state, allMovies: action.payload };
  }
};

const appReducer = (state: AppState = initialState, action: any): AppState => {
  console.log('appReducer', { action });
  if (reducers[action.type]) {
    return reducers[action.type](state, action);
  } else {
    return reducers["default"](state, action);
  }
};


export const store = configureStore({
  reducer: appReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch