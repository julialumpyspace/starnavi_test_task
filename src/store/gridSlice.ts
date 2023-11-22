import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type SelectedGridItem = string;

export type SelectedGrid = {
    grid: SelectedGridItem[]
}

const initialState: SelectedGrid = {
    grid: []
};

export const gridSlice = createSlice({
    name: 'grid',
    initialState,
    reducers: {
        clear: (state) => {
            state.grid = [];
        },
        toggleItems: (state, action: PayloadAction<SelectedGridItem[]>) => {
            state.grid = action.payload;
        },
    },
});

export const {
    clear,
    toggleItems
} = gridSlice.actions;

export default gridSlice.reducer;
