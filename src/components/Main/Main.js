import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import WarriorCard from '../WarriorCard/WarriorCard';
import { MainContainer, MainHeader, MainHeaderSpan } from './MainStyles';

export default function Main() {

    let { pathname } = useLocation();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    useEffect( () => {
        setLinksContext(pathname);
    },[]);

    return(
        <main>
            <MainHeader>
                (nie tak) dawno temu
                <br/>
                <MainHeaderSpan>w odległej galaktyce</MainHeaderSpan>
            </MainHeader>
            <MainContainer>
                {
                    myWarriorsListContext.map(({number}) => <WarriorCard identy={number} key={number} />)
                }
            </MainContainer>
        </main>
    );
}