import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import WarriorCard from '../WarriorCard/WarriorCard';

export default function Main() {

    let { pathname } = useLocation();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [dataExisting, setDataExisting] = useState(false);
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    useEffect( () => {
        setLinksContext(pathname);
    },[]);

    return(
        <div>
            {
                myWarriorsListContext.map(({number}) => <WarriorCard identy={number} key={number} />)
            }
        </div>
    );
}