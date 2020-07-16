import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../Main/MainStyles';

export const WarriorAddContainer = styled.section`
    min-height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WarriorAddForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: space-between;
    width: 100%;
    padding: 0px 20px 20px;
    min-height: 87vh;
    justify-content: space-evenly;
    // @media ${device.tablet} {
    //     justify-content: space-evenly;
    // }
`;

const WarriorAddInput__all = `
    font-weight: 400;
    letter-spacing: .6px;
    margin-bottom: 30px;
    width: 80%;
    text-align: center;
    color: #FFFFFF;
    background: transparent;
    border: none;
    padding: 15px;
    caret-color: #FFFFFF;

    &:focus {
        outline: none;
    }

    @media ${device.tablet} {
        font-size: 20px;
    }

    @media ${device.laptop} {
        width: 30%;
    }
`;

export const WarriorAddInputs = styled.input`
    ${WarriorAddInput__all} 
    width: ${props => props.customWidth || '80%'};
    border-bottom: 1px solid ${props => props.color};

    @media ${device.laptop} {
        width: 20%;
    }
`;

export const WarriorAddTextarea = styled.textarea`
    ${WarriorAddInput__all} 
    border-bottom: 1px solid ${props => props.color};
`;

export const WarriorAddFormSection = styled.section`
    display: flex;
    width: 80%;
`;

export const WarriorAddLink = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    margin-top: 10px;
    padding: 18px;

    @media ${device.tablet} {
        font-size: 26px;
    }

    @media ${device.laptop} {
        padding: 16px;
        font-size: 18px;
    }
`; 

export const WarriorAddButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;    

    @media ${device.laptop} {
        width: 30%;
    }    
`;