import React, { useContext } from 'react';
import AllWarriorsContext from '../../contexts/AllWariorsContext';

export default function WarriorSubPage({ show }) {

    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    return (
        <div>
            DANE O WARRIORS
            <button
                onClick={show}
            >
                CLICK
            </button>
        </div>
    )
}
