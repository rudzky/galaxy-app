import React from 'react';
import WarriorCard from '../WarriorCard/WarriorCard';

export default function Main() {

    const numbersInStorage = JSON.parse(localStorage.getItem('warriorsNumbers'));

    return(
        <div>
            {
                numbersInStorage.map(warrior => <WarriorCard identy={warrior} key={warrior} />)
            }
        </div>
    );
}