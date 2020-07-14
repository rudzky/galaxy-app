import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AllWarriorsContext from '../../contexts/AllWariorsContext';

export default function WarriorSubPage({ show }) {

    const history = useHistory(); 

    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    const goBackHandle = () => {
        history.goBack();
    };

    return (
        <div>
            DANE O WARRIORS
            <button
                onClick={show}
            >
                CLICK
            </button>
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
        </div>
    )
}
