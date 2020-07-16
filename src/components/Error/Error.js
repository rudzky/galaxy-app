import React from 'react';
import { 
    ErrorContainer, 
    ErrorCode, 
    ErrorText, 
    ErrorButton,
    ErrorButtonWrapper 
} from '../404/NotFoundStyles';

export default function Error({ refresh }) {
    return (
        <ErrorContainer>
            <ErrorText>Wystąpił błąd</ErrorText>
            <ErrorCode>Brak danych</ErrorCode>
            <ErrorButtonWrapper>
                <ErrorButton
                    to="/" onClick={refresh}
                >
                    Ponów próbę
                </ErrorButton>
            </ErrorButtonWrapper>
        </ErrorContainer>
    );
}
