import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchVehicle} from './vehicleAPI'





export interface VehicleState {
    value: number;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: VehicleState = {
    value: 0,
    status: 'idle'
}

export const getVehicles = createAsyncThunk(
    'vehicle/fetchVehicle',
    async () => {
        const response = await fetchVehicle()
    }

)

export const vehicleSlice = createSlice({
    name: 'vehicle',
    initialState,
    reducers: {
        vehicleSuccess: (state) =>
            {
                
            }
        ,
        vehicleFailure: (state) =>
            {
                
            }
        ,

    },
    extraReducers: (builder) => {
        builder
            .addCase(getVehicles.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getVehicles.fulfilled, (state,action) => {
                state.status = 'idle'
                state.value = 1 //action.payload
            })
            .addCase(getVehicles.rejected, (state) => {
                state.status = 'failed'
            })
    }

})


export default vehicleSlice.reducer