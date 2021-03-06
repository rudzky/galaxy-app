import React, {useContext, useState} from 'react';
import { Redirect } from 'react-router-dom';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import { 
    ReserveContainer,
    ReserveButtonWrapper
} from './ReserveStyles';
import { 
    MainHeader 
} from '../Main/MainStyles';
import {
    WarriorCardButton
} from '../WarriorCard/WarriorCardStyles';

export default function Reserve({ identy, hide }) {

    const [, setReserveMyWarriorsListContext] = useContext(AllWarriorsContext);
    const [reserveWarriorsNumbers, setReserveWarriorsNumbers] = useContext(MyWarriorsContext);

    const [redirect, setRedirect] = useState(false);

    const handleSendToReserve = () => {

        setReserveWarriorsNumbers(reserveWarriorsNumbers => reserveWarriorsNumbers.filter(e => e!==identy));
        localStorage.removeItem(identy);
        let localstorageWarriorsNumbers = JSON.parse(localStorage.getItem('warriorsNumbers'));
        localStorage.setItem('warriorsNumbers', JSON.stringify(localstorageWarriorsNumbers.filter(e => e !== identy)));

        setReserveMyWarriorsListContext((reserveWarriorsListContext) => {
            return reserveWarriorsListContext.filter((e) => {
                return e.number !== identy;
            });
        });

        if(reserveWarriorsNumbers.includes(identy)) {
            let localstorageMyList = JSON.parse(localStorage.getItem('myWarriorsList'));
            localStorage.setItem('myWarriorsList', JSON.stringify(localstorageMyList.filter(e => e !== identy)));
        }
        setRedirect(true);
    };

    return(
        <ReserveContainer>

            {
                redirect && <Redirect to="/" />
            }

            <MainHeader>
                Czy jesteś pewien swojej decyzji?
            </MainHeader>

            <ReserveButtonWrapper>
                <WarriorCardButton
                onClick={handleSendToReserve}
                back={'#AE0909'}
                status={'#AE0909'}
            >
                Przenieś do rezerwy
            </WarriorCardButton>
                <WarriorCardButton
                onClick={hide}
                status={'#FFFFFF'}
            >
                Anuluj
            </WarriorCardButton>
            </ReserveButtonWrapper>
            
            <MainHeader>
                Jeśli nie jesteś ze mną, stałeś się moim wrogiem.
            </MainHeader>
        </ReserveContainer>
    );
}