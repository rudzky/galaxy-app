import styled from 'styled-components';
import { Link } from 'react-router-dom';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

// const starYellow = '#FFE81F';

export const MenuListItem = styled.li`
    color: ${props => props.hightlight};
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.9px;
`;

export const MenuHeader = styled.header`
  height: 13vh;
`;

export const MenuNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 13vh;
  padding: 20px 25px 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
`;

export const MenuNavigationMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000d1;
  z-index: 9;
`;

export const MenuNavigationLogo = styled.img`
    width: 40px;
`;

export const MenuNavigationMobileList = styled.ul`
    margin: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 100px 0px;
    list-style: none;
`;

export const MenuMobileLink = styled(Link)`
    text-decoration: none;
`;