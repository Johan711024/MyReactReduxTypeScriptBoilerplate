import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from '../../app/store';

import { fetchVehicle} from './vehicleAPI'





export interface VehicleState {
    vehicles: Array<
        {
            key: string,
            value: string
        }
    >;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: VehicleState = {
    vehicles: [],
    status: 'idle'
}

export const getAsyncVehicles = createAsyncThunk(
    'vehicle/fetchVehicle',
    async () => {
        const response = await fetchVehicle()
    }

)

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        vehicleSuccess: (state, action: PayloadAction<any>) =>
            {
                state.vehicles = action.payload
            }
        ,
        vehicleFailure: (state) =>
            {
                
            }
        ,

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncVehicles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getAsyncVehicles.fulfilled, (state,action: PayloadAction<any>) => {
                state.status = 'idle'
                state.vehicles = action.payload
            })
            .addCase(getAsyncVehicles.rejected, (state) => {
                state.status = 'failed'
            })
    }

})


//selector
export const selectAllVehicles = (state: RootState) => state.vehicles;

export default vehicleSlice.reducer