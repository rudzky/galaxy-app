import styled from 'styled-components';
import { WarriorButton, WarriorButtonTemplate } from '../WarriorCard/WarriorCardStyles';
import { size, device } from '../Main/MainStyles';

export const WarriorSubPageContainer = styled.section`
    min-height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

export const WarriorSubPageDescriptWrapper = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    min-height: 10vh;

    @media ${device.laptop} {
        width: 75%;
    }
`;

export const WarriorSubPageInfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        margin: 10px 0px;
    }

    @media ${device.laptop} {
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
`;

export const WarriorSubPageParagraph = styled.p`
    font-size: 18px;
    text-align: justify;

    @media ${device.tablet} {
        font-size: 24px;
    }

    @media ${device.laptop} {
        font-size: 20px;
    }
`;

export const WarriorSubPageButton = styled.button`
    ${WarriorButton};
    margin-top: 10px;
    background: transparent;
    border-color: ${props => props.status};

    @media ${device.laptop} {
        width: 30%;
        padding: 16px;
        font-size: 18px;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const WarriorSubPageButtonWrapper = styled.div`
    ${WarriorButtonTemplate};

    @media ${device.laptop} {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

export const WarriorSubPageSpan = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0px;

    & > h1 {
        margin: 0px;
    }

    @media ${device.laptop} {
        width: 50%;
        text-align: center;
    }
`;

export const WarriorSubPageName = styled.h1`
    font-weight: 600;
    font-size: 26px;

    @media ${device.tablet} {
        font-size: 50px;
    }
`;