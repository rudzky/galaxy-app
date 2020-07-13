import React, {useContext} from 'react';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
// import { withTheme } from 'styled-components';

export default function Reserve({ toggleReserveView, identy }) {

    const localstoragePosition = identy - 1;
    //{ warriorsData, warriorsNumbers }
    //ALL
    //const { reserveWarriorsData, setReserveAllWarriorsData } = useContext(AllWarriorsContext);
    //LIST
    const [reserveWarriorsNumbers, setReserveWarriorsNumbers] = useContext(MyWarriorsContext);

    const style = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(255, 0, 0, .5)',
        color: 'white'  
    };

    const handleSendToReserve = () => {
    //     if(reserveWarriorsNumbers.includes(identy)){
    //         setReserveWarriorsNumbers(reserveWarriorsNumbers => reserveWarriorsNumbers.filter(e => e!==identy));
    //         localStorage.removeItem(localstoragePosition);
    //         let localstoreWarriorsNumbers = JSON.parse(localStorage.getItem('warriorsNumbers'));
    //         localStorage.setItem('warriorsNumbers', localstoreWarriorsNumbers.filter(e => e!==localstoragePosition));
    //     };
    //     setReserveAllWarriorsData(reserveWarriorsData => reserveWarriorsData.filter(e => e!==identy));
    };

    const handleTabClose = () => {
        toggleReserveView(false);
    };

    return(
        <div style={style}>
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