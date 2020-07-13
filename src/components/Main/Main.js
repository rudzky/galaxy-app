import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import WarriorCard from '../WarriorCard/WarriorCard';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import axios from 'axios';

export default function Main() {

    let { pathname } = useLocation();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [dataExisting, setDataExisting] = useState(false);
    const { warriorsData, warriorsNumbers } = useContext(AllWarriorsContext);

    //const [numbersInStorage, setNumbersInStorage] = useState(JSON.parse(localStorage.getItem('warriorsNumbers')) || []);

    useEffect( () => {
        setLinksContext(pathname);
    },[]);

    return(
        <div>
            {
                warriorsData.map((el, idx) => <WarriorCard identy={idx} key={idx} />)
            }
        </div>
    );
}