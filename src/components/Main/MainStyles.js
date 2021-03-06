import styled from 'styled-components';

export const size = {
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

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;

  @media ${device.laptop} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const MainHeader = styled.h1`
  font-family: Staatliches;
  font-size: 32px;
  text-align: center;
  letter-spacing: 0.9px;
  margin: 35px 0px;
  color: ${props => props.color || '#FFFFFFEE'};

  @media ${device.tablet} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.laptopL} {
    font-size: 60px;
    margin: 35px 0px;
  }

  `;

export const MainHeaderSpan = styled.span`
  -webkit-text-stroke: .5px #a6f3ffbb;
  color: transparent;
`;

