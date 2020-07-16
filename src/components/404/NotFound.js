import React, { useContext, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import { 
    ErrorContainer, 
    ErrorCode, 
    ErrorText, 
    ErrorButton,
    ErrorButtonWrapper 
} from './NotFoundStyles';

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
        <ErrorContainer>
            <ErrorCode>Błąd 404</ErrorCode>
            {/* <button
                onClick={goBackHandle}
            >
                Wróć
            </button> */}

            <ErrorText>
                Mmm… Planetę mistrz Obi-Wan zgubił.
                <br /> 
                Co za wstyd, to ogromny wstyd…
            </ErrorText>

            <ErrorButtonWrapper>
                <ErrorButton
                    to="/"
                >
                    Wróć w bezpieczne miejsce
                </ErrorButton>
            </ErrorButtonWrapper>

            
        </ErrorContainer>
    )
}
