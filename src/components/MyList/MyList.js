import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import WarriorCard from '../WarriorCard/WarriorCard';

export default function MyList() {

    let { pathname } = useLocation();
    const history = useHistory();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [myWarriorsList, setMyWarriorsList] = useContext(MyWarriorsContext);
    //const { warriorsData, warriorsNumbers } = useContext(AllWarriorsContext);
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
        <section>
            Moja lista
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
            {
                myWarriorsData.map(({number}, idx) => <WarriorCard identy={number} key={number} />)
            }
            {
                (myWarriorsList.length === 0) && <p>Lista jest pusta</p>
            }
        </section>
    );
}