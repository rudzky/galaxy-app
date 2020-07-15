import React, {useContext, useState} from 'react';
import {Redirect} from 'react-router-dom';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
// import { withTheme } from 'styled-components';

export default function Reserve({ identy, hide }) {

    //const localstoragePosition = identy;

    const [reserveWarriorsListContext, setReserveMyWarriorsListContext] = useContext(AllWarriorsContext);
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

        console.log('rezerwa');

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

    // const handleTabClose = () => {
    //     hide(false);
    // };

    return(
        <section style={style}>


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
                onClick={hide}
            >
                Anuluj
            </button>
        </section>
    );
}