import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  incrementAsync,
  selectOwner,
} from './ownerSlice';
import styles from './Owner.module.css';

export function Owner() {
  const owners = useAppSelector(selectOwner);
  const dispatch = useAppDispatch();
  const [owner, setOwner] = useState('2');

  const incrementValue = String(owner) || '';

  return (
    <div>
      
      <div className={styles.row}>
      Ägare: {owners.length}
      </div>
      {owners.map((owner:any)=>{
        return (
          <div className={styles.row}>
      {owner}
      </div>
        )
      })}
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
        </div>
        <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync())}
        >
          Lägg till ny
        </button>
        
      </div>
    </div>
  );
}
