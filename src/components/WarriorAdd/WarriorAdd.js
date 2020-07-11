import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import MenuContext from '../../contexts/MenuContext';

export default function WarriorAdd() {

    const history = useHistory();
    const navigationContext = useContext(MenuContext); 

    const goBackHandle = () => {
        history.goBack();
    };

    return(
        <div>
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
            Dodaj wojownika
        </div>
    );
}