import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WarriorCardSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border: 1px solid #FFFFFF;
    padding: 15px;
    margin-bottom: 20px;
`;

export const WarriorCardNameNumber = styled.h1`
    font-weight: 600;
    font-size: 26px;
`;

export const WarriorCardSkill = styled.p`
    font-size: 20px;
    color: #FFE81F;
    margin: 5px 0px;
`;

export const WarriorCardDescribe = styled.p`
    font-size: 18px;
    color: #FFFFFFCC;
`;

export const WarriorButton = `
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    padding: 18px;
    text-decoration: none;
    font-size: 16px;
    width: 100%;
    text-align: center;
`;

export const WarriorCardButtonLink = styled(Link)`
    ${WarriorButton};
    margin-top: 10px;
    background: #FFFFFF;
    color: #000000;
`;

export const WarriorCardButton = styled.button`
    ${WarriorButton};
    background: ${props => props.back || 'transparent'};
    margin-top: 10px;
    border-color: ${props => props.status};

    &:disabled {
        border-color: #FFFFFFAA;
        color: #FFFFFFAA;
    }
`;

export const WarriorCardOverflow = styled.div`
    display: flex;
    width: 90%;

    &::after {
        content: '...';
        align-self: flex-end;
        margin-bottom: 18px;
    }
`;

export const WarriorCardDescription = styled.p`
    color: white;
    max-height: 40px;
    overflow: hidden;
`;