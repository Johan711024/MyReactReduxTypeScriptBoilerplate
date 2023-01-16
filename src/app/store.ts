import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice'
import vehicleReducer from '../features/vehicle/vehicleSlice'
import ownerReducer from '../features/owner/ownerSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    vehicles: vehicleReducer,
    owners: ownerReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
