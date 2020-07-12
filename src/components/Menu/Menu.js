import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import MenuContext from '../../contexts/MenuContext';
import { LI } from './MenuStyles';

export default function Menu() {

    const [warriorsCount, setWarriorsCount] = useState(0);
    const myWarriors = useContext(MyWarriorsContext);
    const [linksContext, setLinksContext] = useContext(MenuContext);

    useEffect(() => {
        setWarriorsCount(myWarriors.length);
    },[linksContext]);

    const handleLinkChange = (page) => {
        return (linksContext === page ? 'green' : ''); 
    }
    
    return(
        <nav>
            <ul>
                <Link to="/">
                    <LI
                        hightlight={() => handleLinkChange("/")}
                    >
                        Strona główna
                    </LI>
                </Link>
                <Link to="/add_warrior">
                    <LI 
                        hightlight={() => handleLinkChange("/add_warrior")}
                    >
                        Dodaj wojownika
                    </LI>
                </Link>
                <Link to="/my_list">
                    <LI 
                        hightlight={() => handleLinkChange("/my_list")}
                    >
                        Moja lista({warriorsCount})
                    </LI>
                </Link>
            </ul>
        </nav>
    );
}