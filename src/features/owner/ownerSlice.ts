import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchOwners } from './ownerAPI';

export interface OwnerState {
  value: Array<any>;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: OwnerState = {
  value: [],
  status: 'idle',
};


export const incrementAsync = createAsyncThunk(
  'owner/fetchOwner',
  async () => {
    const response = await fetchOwners();

    return response.data;
  }
);

export const ownerSlice = createSlice({
  name: 'owner',
  initialState,
  
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const selectOwner = (state: RootState) => state.owners.value;



export default ownerSlice.reducer;
