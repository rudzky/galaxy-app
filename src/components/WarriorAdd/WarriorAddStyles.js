import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    caret-color: rgba(255, 233, 31, 0.747);

    &:focus {
        outline: none;
        // box-shadow: 0 4px 2px -2px #FFE81F;
        //border-bottom: 1px solid #FFE81F;
    }
`;

export const WarriorAddInputs = styled.input`
    ${WarriorAddInput__all} 
    width: ${props => props.customWidth || '80%'};
    border-bottom: 1px solid ${props => props.color};
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
`; 