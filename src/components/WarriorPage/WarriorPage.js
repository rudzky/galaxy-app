import React, { useEffect, useContext, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import Reserve from '../Reserve/Reserve';

export default function WarriorPage() {

    let { pathname } = useLocation();
    let { identy } = useParams();
    identy = parseInt(identy);
    const history = useHistory(); 
    const position = parseInt(identy);
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    console.log(myWarriorsListContext);
    console.log(identy);
    console.log(identy - 1);
    console.log(JSON.parse(localStorage.getItem(identy - 1)));

    const {number, name, skill, description} = myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy - 1));
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [reserveView, setReserveView] = useState(false);

    const goBackHandle = () => {
        history.goBack();
    };

    const handleReserve = () => {
        setReserveView(true);
    };

    useEffect(() => {
        setLinksContext(pathname);
    },[]);

    return useMemo(() => {
        return (
        <div>
            {
                reserveView && <Reserve toggleReserveView={setReserveView} identy={identy} />
            }
            {/* <img src={`http://source.unsplash.com/random/50x50?${name.trim().toLowerCase()}`} alt=""/> */}
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>

            <h1>#{number}</h1>
            
            <h2>{name}</h2>
            <h3>{skill}</h3>
            <p>{description}</p>

            <button
                onClick={handleReserve}
            >rezerwa</button>
        </div>
    )},[reserveView]
);

}