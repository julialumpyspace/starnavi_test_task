import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Mode } from '../types';

export type ActiveMode = {
    mode: Mode
};

const initialState: ActiveMode = {
    mode: {
        id: '',
        name: '',
        field: 0
    }
};

export const modeSlice = createSlice({
    name: 'activeMode',
    initialState,
    reducers: {
        setActiveMode: (state, action: PayloadAction<Mode>) => {
            state.mode = action.payload;
        },
    },
});

export const {
    setActiveMode
} = modeSlice.actions;

export default modeSlice.reducer;
