import styled from 'styled-components';
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
    min-height: 30vh;
`;

export const WarriorSubPageInfoWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    & > h1 {
        margin: 10px 0px;
    }
`;

export const WarriorSubPageParagraph = styled.p`
    font-size: 18px;
    text-align: justify;

    @media ${device.tablet} {
        font-size: 24px;
    }
`;