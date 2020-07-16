import React, { useEffect, useContext, useState, useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import Reserve from '../Reserve/Reserve';
import WarriorSubPage from './WarriorSubPage';

export default function WarriorPage() {

    let { pathname } = useLocation();
    let { identy } = useParams();
    identy = parseInt(identy);

    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    const [linksContext, setLinksContext] = useContext(MenuContext);

    const [reserveView, setReserveView] = useState(false);
    const [subpageView, setSubpageView] = useState(false);
    const [loadingView, setLoadingView] = useState(true);
    const [notFoundView, setNotFoundView] = useState(false);

    const showReserve = () => {
        setSubpageView(false);
        setReserveView(true);
    };
    const hideReserve = () => {
        setReserveView(false);
        setSubpageView(true);
    }

    useEffect(() => {
        if(myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy))){
            setLoadingView(false);
            setSubpageView(true);
        }else{
            setLoadingView(false);
            setNotFoundView(true);
        }
        setLinksContext(pathname);
    },[]);


    if(loadingView) {
        return <div>ŁADUJE</div>
    }
    else if(subpageView){
        return <WarriorSubPage show={showReserve} />;
    }
    else if(reserveView) {
        return <Reserve identy={identy} hide={hideReserve} />;
    }
    else{
        return <Redirect to="/404" />;
    }

}