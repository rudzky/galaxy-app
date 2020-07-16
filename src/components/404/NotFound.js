import React, { useContext, useEffect } from 'react';
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

    let { pathname } = useLocation();

    const [, setLinksContext] = useContext(MenuContext);

    useEffect(() => {
        setLinksContext(pathname);
    });

    return (
        <ErrorContainer>
            <ErrorCode>Błąd 404</ErrorCode>

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
