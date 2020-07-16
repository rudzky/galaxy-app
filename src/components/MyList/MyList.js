import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import WarriorCard from '../WarriorCard/WarriorCard';
import { MainHeader, MainContainer } from '../Main/MainStyles';

export default function MyList() {

    let { pathname } = useLocation();
    const history = useHistory();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [myWarriorsList, setMyWarriorsList] = useContext(MyWarriorsContext);
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    const [myWarriorsData, setMyWarriorsData] = useState([]);

    const goBackHandle = () => {
        history.goBack();
    };
    
    useEffect(() => {
        setLinksContext(pathname);
        let filtredWarriors = myWarriorsListContext.filter((e,id) => {
            if(myWarriorsList.includes(e.number)) return e;
        });
        setMyWarriorsData(filtredWarriors);
    },[myWarriorsList]);

    return(
        <MainContainer>
            
            <MainHeader>
                Moja lista
            </MainHeader>

            {
                myWarriorsData.map(({number}, idx) => <WarriorCard identy={number} key={number} />)
            }

            {
                (myWarriorsList.length === 0) && <MainHeader color={'#AE0909'}>Lista jest pusta</MainHeader>
            }

        </MainContainer>
    );
}