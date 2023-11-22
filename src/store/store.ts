import { configureStore } from '@reduxjs/toolkit';
import modeSliceReducer from './modeSlice';
import gridSliceReducer from './gridSlice';

export const store = configureStore({
    reducer: {
        activeMode: modeSliceReducer,
        selectedGridItems: gridSliceReducer
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
