import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import MenuContext from '../../contexts/MenuContext';
import logo from '../../assets/logo.svg';
import HamburgerMenu from 'react-hamburger-menu';
import MobileMenu from './MobileMenu';
import { 
    MenuHeader, 
    MenuNavigation, 
    MenuNavigationLogo, 
    MenuNavigationMobileList,
    MenuMobileLink,
    MenuListItem,
    MenuDesktopList,
    MenuBack
} from './MenuStyles';

export default function Menu() {

    const history = useHistory();

    const [warriorsCount, setWarriorsCount] = useState(0);
    const [myWarriorsList, setMyWarriorsList] = useContext(MyWarriorsContext);
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const goBackHandle = () => {
        history.goBack();
        setMenuOpen(false);
    };

    useEffect(() => {
        setWarriorsCount(myWarriorsList.length);
    },[myWarriorsList]);

    const handleLinkChange = (page) => {
        return (linksContext === page ? '#FFE81F' : '#FFFFFF'); 
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
        <MenuHeader>
            <MenuNavigation>
                {(linksContext === "/") ? 
                    (<MenuNavigationLogo src={logo} alt="logo"/>) :
                    (<MenuBack onClick={goBackHandle}>Wróć</MenuBack>)
                }
                
                {
                    isMobile && (
                    <HamburgerMenu 
                        isOpen={menuOpen}
                        menuClicked={toggleMenu}
                        color='#FFFFFF'
                        width={26}
                        height={20}
                    />)
                }
                {
                    !isMobile && (
    
                        <MenuDesktopList>
                            <MenuMobileLink to="/">
                                <MenuListItem
                                    hightlight={() => handleLinkChange("/")}
                                >
                                    Strona główna
                                </MenuListItem>
                            </MenuMobileLink>
                            <MenuMobileLink to="/add_warrior">
                                <MenuListItem 
                                    hightlight={() => handleLinkChange("/add_warrior")}
                                >
                                    Dodaj wojownika
                                </MenuListItem>
                            </MenuMobileLink>
                            <MenuMobileLink to="/my_list">
                                <MenuListItem
                                    hightlight={() => handleLinkChange("/my_list")}
                                >
                                    Moja lista({warriorsCount})
                                </MenuListItem>
                            </MenuMobileLink>
                        </MenuDesktopList>
                    )
                }
            </MenuNavigation>
                {
                    isMobile && (
                        menuOpen && (
                        <MobileMenu>
                            <MenuNavigationMobileList>
                                <MenuMobileLink to="/">
                                    <MenuListItem
                                        hightlight={() => handleLinkChange("/")}
                                        onClick={toggleMenu}
                                    >
                                        Strona główna
                                    </MenuListItem>
                                </MenuMobileLink>
                                <MenuMobileLink to="/add_warrior">
                                    <MenuListItem 
                                        hightlight={() => handleLinkChange("/add_warrior")}
                                        onClick={toggleMenu}
                                    >
                                        Dodaj wojownika
                                    </MenuListItem>
                                </MenuMobileLink>
                                <MenuMobileLink to="/my_list">
                                    <MenuListItem
                                        hightlight={() => handleLinkChange("/my_list")}
                                        onClick={toggleMenu}
                                    >
                                        Moja lista({warriorsCount})
                                    </MenuListItem>
                                </MenuMobileLink>
                            </MenuNavigationMobileList>
                        </MobileMenu> )
                        
                    )
                }
        </MenuHeader>
    )        
};
