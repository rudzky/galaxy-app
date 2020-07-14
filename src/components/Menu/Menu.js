import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import MenuContext from '../../contexts/MenuContext';
import { LI } from './MenuStyles';
import logo from '../../assets/logo.svg';
import HamburgerMenu from 'react-hamburger-menu';
import MobileMenu from './MobileMenu';

export default function Menu() {

    const [warriorsCount, setWarriorsCount] = useState(0);
    const [myWarriorsList, setMyWarriorsList] = useContext(MyWarriorsContext);
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setWarriorsCount(myWarriorsList.length);
    },[myWarriorsList]);

    const handleLinkChange = (page) => {
        return (linksContext === page ? 'green' : ''); 
    }

    const toggleMenu = () => {
        setMenuOpen(menuOpen => !menuOpen);
    }

    const size = {
        mobileS: '320px',
        mobileM: '375px',
        mobileL: '425px',
        tablet: '768px',
        laptop: '1024px',
        laptopL: '1440px',
        desktop: '2560px'
    };

    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'});
    
    return(
        <nav>
            <img src={logo} alt="logo"/>
            {
                isMobile && (
                <HamburgerMenu 
                    isOpen={menuOpen}
                    menuClicked={toggleMenu}
                />)
            }
            {
                isMobile 
                ? (
                    menuOpen 
                    && (<MobileMenu>
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
                    </MobileMenu> )
                    
                ) : (
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
                )
            }
        </nav>
    )        
};
