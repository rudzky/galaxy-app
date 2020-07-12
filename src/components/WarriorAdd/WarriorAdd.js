import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';

export default function WarriorAdd() {

    let { pathname } = useLocation();

    const history = useHistory();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    
    const goBackHandle = () => {
        history.goBack();
    };

    useEffect(() => {
        setLinksContext(pathname);
    });

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