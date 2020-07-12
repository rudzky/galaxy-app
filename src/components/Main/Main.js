import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import WarriorCard from '../WarriorCard/WarriorCard';

import axios from 'axios';


export default function Main() {

    let { pathname } = useLocation();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [dataExisting, setDataExisting] = useState(false);

    const [numbersInStorage, setNumbersInStorage] = useState(JSON.parse(localStorage.getItem('warriorsNumbers')));


    //API CALL

    const APIAddress = "https://e3decdb6-2e8f-4c0b-9883-c1b7ce735dee.mock.pstmn.io/galaxy";
    const getWarriorsData = () => {
        axios
        .get(APIAddress)
        .then(response => response.data)
        .then(({warriors}) => {
            //setWarriorsData(warriors);
            let warriors_numbers = [];
            warriors.forEach((warrior) => {
            let warriorString = JSON.stringify(warrior);
            localStorage.setItem(warrior.number, warriorString);
            warriors_numbers.push(warrior.number);
            });
            localStorage.setItem('warriorsNumbers', JSON.stringify(warriors_numbers));
            localStorage.setItem('expire', Date.now() + 259200000);
        });
    }; 

    useEffect( () => {
        setLinksContext(pathname);
        if(localStorage.getItem('expire') < Date.now() || localStorage.getItem('expire') === null ){
          getWarriorsData();
        }
    },[]);

    // useEffect(() => {
    //     setLinksContext(pathname);
    //     if(numbersInStorage !== null) setDataExisting(true);
        
    // },[]);
    
    console.log({...localStorage});

    // const numbersInStorage = [];
    // if("expire" in localStorage){
    //     const numbersInStorage = JSON.parse(localStorage.getItem('warriorsNumbers'));
    //     setDataExisting(true);
    // }

    // console.log(numbersInStorage);

    return(
        <div>
            {
                numbersInStorage.map(warrior => <WarriorCard identy={warrior} key={warrior} />)
            }
        </div>
    );
}