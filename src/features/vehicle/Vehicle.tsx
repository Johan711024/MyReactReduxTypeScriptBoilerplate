import React, { useState } from 'react';
import styles from './Vehicle.module.css';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getAsyncVehicles, selectAllVehicles } from './vehicleSlice';


export function Vehicle(){
    const allVehicles = useAppSelector(selectAllVehicles);
    const dispatch = useAppDispatch();
    const [vehicles, setVehicles] = useState([]);


    return(
        <>
        <div className={styles.row}>
        Garage-app
        {allVehicles.vehicles.length}

        {allVehicles.vehicles && allVehicles.vehicles.map((vehicle:any) => 
            <div>{vehicle}</div>
        )}
            
        

        </div>
        </>
    )
}