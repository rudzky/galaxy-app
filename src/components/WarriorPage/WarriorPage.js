import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import Reserve from '../Reserve/Reserve';

export default function WarriorPage() {

    let { pathname } = useLocation();
    let { identy } = useParams();
    const localstoragePosition = identy - 1;
    identy = parseInt(identy);
    const history = useHistory(); 
    const { warriorsData, warriorsNumbers } = useContext(AllWarriorsContext);
    const {number, name, skill, description} = warriorsData[localstoragePosition] || JSON.parse(localStorage.getItem(localstoragePosition));
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
    });

    return(
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
    );
}