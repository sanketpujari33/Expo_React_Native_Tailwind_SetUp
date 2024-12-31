import { createSlice } from '@reduxjs/toolkit';
import { fetchDataAsync } from '../action/fetchDataAction';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0,
        data: [],
        loading: false,
    },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchDataAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchDataAsync.rejected, (state) => {
                state.loading = false;
            });
    },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
