import styled from 'styled-components';
import { device } from '../Main/MainStyles';
import { Link } from 'react-router-dom';

export const WarriorCardSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 2px solid #FFFFFF;
    padding: 15px;
    margin-bottom: 20px;

    @media ${device.laptop} {
        flex-basis: 30%;
        max-width: 30%;
    }
`;

export const WarriorCardNameNumber = styled.h1`
    font-family: Staatliches;
    letter-spacing: .9px;
    font-weight: 600;
    font-size: 26px;
    width: 90%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;

    @media ${device.tablet} {
        font-size: 50px;
    }
`;

export const WarriorCardSkill = styled.p`
    font-size: 20px;
    color: #FFE81F;
    margin: 5px 0px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 30px;
    }

    @media ${device.laptop} {
        margin: 25px 0px;
        font-size: 25px;
    }

`;


export const WarriorButton = `
    color: #FFFFFF;
    border: 5px solid #FFFFFF;
    padding: 18px;
    text-decoration: none;
    font-size: 16px;
    width: 100%;
    text-align: center;

    @media ${device.tablet} {
        padding: 28px;
        font-size: 26px;
        width: 48%;
    }

    @media ${device.laptop} {
        width: 100%;
        padding: 16px;
        font-size: 18px;
    }
`;

export const WarriorCardButtonLink = styled(Link)`
    ${WarriorButton};
    margin-top: 10px;
    color: #FFFFFF;

    &:hover{ 
      cursor: pointer;
      color: #069FB8;
    }
`;

export const WarriorCardButton = styled.button`
    ${WarriorButton};
    //background: ${props => props.back || 'transparent'};
    background: transparent;
    margin-top: 10px;
    border-color: ${props => props.status};

    &:hover{ 
      cursor: pointer;
      color: ${props => props.status};
    }

    &[type='submit'] {
        &:enabled {
            border-color: #FFFFFFAA;
            background: #FFFFFF;
            color: #000000;

            &:hover{ 
                color: #069FB8;
                border-color: #069FB8;
            }
        }
        &:disabled {
            border-color: #FFFFFFAA;
            color: #FFFFFFAA;

            &:hover{ 
                color: #AE0909;
                border-color: #AE0909;
            }
        }
    }

`;

export const WarriorCardOverflow = styled.div`
    display: flex;
    justify-content: center;
    width: 90%;
    margin: 15px 0px;
    font-family: Roboto;
    font-size: ${props => props.fs || '16px'};
    color: ${props => props.fc || '#FFFFFF'};
    word-break: break-all;

    @media ${device.tablet} {
        font-size: 26px;
    }

    @media ${device.laptop} {
        font-size: 18px;
        margin: 10px 0px;
    }
`;

export const WarriorCardDescription = styled.p`
    color: white;
    max-height: 40px;
    overflow: hidden;

    @media ${device.tablet} {
        font-size: 24px;
    }
`;

export const WarriorButtonTemplate = `
    display: flex;
    flex-direction: column;
    width: 100%;

    @media ${device.tablet} {
        flex-direction: row;
        justify-content: space-around;
        margin: 10px 0px;
    }

    @media ${device.laptop} {
        flex-direction: column;
        align-items: center;
    }
`;

export const WarriorButtonWrapper = styled.div`
    ${WarriorButtonTemplate};
`;

export const WarriorCardImage = styled.img`
    width: 150px;
    min-height: 150px;
    margin: ${props => props.margin || '0'};

    @media ${device.tablet} {
        min-height: 300px;
        width: 300px;
    }
`;

export const WarriorCardImageWrapper = styled.div`
    width: 200px;
    height: 200px;
    background: url(${props => props.src});
`;