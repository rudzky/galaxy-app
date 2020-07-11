import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import MenuContext from '../../contexts/MenuContext';
import { LI } from './MenuStyles';

export default function Menu() {

    const [warriorsCount, setWarriorsCount] = useState(0);
    const [linkHighlight, setLinkHighlight] = useState('main_page');
    const myWarriors = useContext(MyWarriorsContext);
    const [context, setContext] = useContext(MenuContext);

    useEffect(() => {
        setWarriorsCount(myWarriors.length);
        setLinkHighlight(context);
    },[MyWarriorsContext, MenuContext]);

    const handlePageChange = (page) => {
        switch(page)
        {
            case "main_page": 
                if(context !== page) setContext("main_page");
                break;
            case "add_warrior": 
                if(context !== page) setContext("add_warrior");
                break;  
            case "my_list": 
                if(context !== page) setContext("my_list");
                break; 
        }
    };

    const handleLinkChange = (page) => {
        return (linkHighlight === page ? true : false); 
    }
    
    return(
        <nav>
            <ul>
                <Link to="/" onClick={handlePageChange("main_page")}>
                    <li
                        // hightlight={handleLinkChange("main_page")}
                        {{handleLinkChange("main_page")}}
                    >
                        Strona główna
                    </li>
                </Link>
                <Link to="/add_warrior">
                    <li 
                        hightlight={handleLinkChange('add_warrior')}
                    >
                        Dodaj wojownika
                    </li>
                </Link>
                <Link to="/my_list">
                    <li 
                        hightlight={handleLinkChange('my_list')}
                    >
                        Moja lista({warriorsCount})
                    </li>
                </Link>
            </ul>
        </nav>
    );
}