import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';

export default function MyList() {

    console.log({...localStorage});

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
            Moja lista
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
        </div>
    );
}