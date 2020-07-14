import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
// import { withTheme } from 'styled-components';

export default function Reserve({ toggleReserveView, identy }) {

    const localstoragePosition = identy - 1;
    //{ warriorsData, warriorsNumbers }
    //ALL
    //const { reserveWarriorsData, setReserveAllWarriorsData } = useContext(AllWarriorsContext);
    const [reserveWarriorsListContext, setReserveMyWarriorsListContext] = useContext(AllWarriorsContext);
    //LIST
    const [reserveWarriorsNumbers, setReserveWarriorsNumbers] = useContext(MyWarriorsContext);

    const [redirect, setRedirect] = useState(false);

    const style = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(255, 0, 0, .5)',
        color: 'white'  
    };

    const handleSendToReserve = () => {

        setReserveWarriorsNumbers(reserveWarriorsNumbers => reserveWarriorsNumbers.filter(e => e!==identy));
        localStorage.removeItem(localstoragePosition);
        let localstorageWarriorsNumbers = JSON.parse(localStorage.getItem('warriorsNumbers'));
        localStorage.setItem('warriorsNumbers', JSON.stringify(localstorageWarriorsNumbers.filter(e => e !== localstoragePosition)));

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

    const handleTabClose = () => {
        toggleReserveView(false);
    };

    return(
        <div style={style}>


            {
                redirect && <Redirect to="/" />
            }

            RESERVE
            <button
                onClick={handleSendToReserve}
            >
                Przenieś do rezerwy
            </button>
            <button
                onClick={handleTabClose}
            >
                Anuluj
            </button>
        </div>
    );
}