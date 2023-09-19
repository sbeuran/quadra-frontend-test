import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './numberSlice';
import websocketMiddleware from './websocketMiddleware';

const store = configureStore({
  reducer: {
    number: numberReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([websocketMiddleware]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
