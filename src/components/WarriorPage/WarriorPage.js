import React, { useEffect, useContext, useState, useMemo } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import Reserve from '../Reserve/Reserve';
import WarriorSubPage from './WarriorSubPage';

export default function WarriorPage() {

    let { pathname } = useLocation();
    let { identy } = useParams();
    identy = parseInt(identy);
    //const history = useHistory(); 

    //ALL CONTEXT
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);

    // console.log(myWarriorsListContext);
    // console.log(identy);
    // console.log(identy - 1);
    // console.log(JSON.parse(localStorage.getItem(identy - 1)));

    // if(myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy - 1))){
    //   const {number, name, skill, description} = myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy - 1));
    // }
    
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

    // const goBackHandle = () => {
    //     history.goBack();
    // };

    // const handleReserve = () => {
    //     setReserveView(true);
    // };

    useEffect(() => {
        //console.log(JSON.parse(localStorage.getItem(identy)));
        //console.log(myWarriorsListContext.find((e) => e.number === identy));
        if(myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy))){
            // const {number, name, skill, description} = myWarriorsListContext.find((e) => e.number === identy) || JSON.parse(localStorage.getItem(identy - 1));
            setLoadingView(false);
            setSubpageView(true);
        }else{
            setLoadingView(false);
            setNotFoundView(true);
        }
        setLinksContext(pathname);
    },[]);

    //console.log(myWarriorsListContext);


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

    //     if(reserveView) {
            
    //     }else{
            
    //     }
    // };
    // if(notFoundView) return <Redirect to="/404" />
    
    // if(subpageView) {
    //     return <WarriorSubPage />;
    // }else{
    //     return <Reserve />;
    // }


    //     return (
    //         <div>
    //             {
    //                 redirect && <Redirect to='/404' />
    //             }
                
    //             {
    //                 reserveView && <Reserve toggleReserveView={setReserveView} identy={identy} />
    //             }
    //             {/* <img src={`http://source.unsplash.com/random/50x50?${name.trim().toLowerCase()}`} alt=""/> */}
    //             <button
    //                 onClick={goBackHandle}
    //             >
    //                 Wróć
    //             </button>
    
    //             <h1>#{number}</h1>
                
    //             <h2>{name}</h2>
    //             <h3>{skill}</h3>
    //             <p>{description}</p>
               
    //             <button
    //                 onClick={handleReserve}
    //             >rezerwa</button> 
    
    //         </div>
    //     );
    // }else{
    //     return (
    //         <div>
    //             Loading
    //         </div>
    //     );
    // }
    

}