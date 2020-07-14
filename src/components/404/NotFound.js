import React, { useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';

export default function NotFound() {

    const history = useHistory();
    let { pathname } = useLocation();

    const [linksContext, setLinksContext] = useContext(MenuContext);

    const goBackHandle = () => {
        history.goBack();
    };

    useEffect(() => {
        setLinksContext(pathname);
    }, [])

    return (
        <div>
            <h1>404</h1>
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
            <Link
                to="/"
            >
                Wróć w bezpieczne miejsce
            </Link>
        </div>
    )
}
