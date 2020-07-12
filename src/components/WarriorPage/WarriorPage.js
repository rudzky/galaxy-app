import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';

export default function WarriorPage() {

    let { pathname } = useLocation();
    let { identy } = useParams();
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
            warrior page
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
        </div>
    );
}