import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { WarriorButton } from '../WarriorCard/WarriorCardStyles';

export const ErrorContainer = styled.section`
    height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0px 20px;
`;

const ErrorFonts = `
    font-family: Staatliches;
    letter-spacing: .7px;
    margin: 0px;
`;

export const ErrorCode = styled.h1`
    ${ErrorFonts};
    font-size: 56px;
    color: #AE0909;
    text-shadow: 0px 0px 99px #AE0909;
`;

export const ErrorText = styled.h2`
    ${ErrorFonts};
    font-size: 22px;
    text-align: center;
`;

export const ErrorButton = styled(Link)`
    ${WarriorButton};
    border: none;
    background: #AE0909;
`;