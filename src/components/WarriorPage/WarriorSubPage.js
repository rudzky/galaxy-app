import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useMediaQuery } from 'react-responsive';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import { 
    WarriorSubPageContainer,
    WarriorSubPageDescriptWrapper,
    WarriorSubPageInfoWrapper,
    WarriorSubPageParagraph
} from './WarriorSubPageStyles';
import {
    WarriorCardNameNumber,
    WarriorCardSkill,
    WarriorCardButton,
    WarriorButtonWrapper
} from '../WarriorCard/WarriorCardStyles';

export default function WarriorSubPage({ show }) {

    const history = useHistory(); 
    let { identy } = useParams();
    identy = parseInt(identy); 

    const [addToListButton, setButtonToggle] = useState(true);

    const [AllWarriors, setAllWarriors] = useContext(AllWarriorsContext);
    const [myListWarriorsContext, setMyListWarriorsContext] = useContext(MyWarriorsContext);
    const { number, name, skill, description } = AllWarriors.find(e => e.number === identy);

    const goBackHandle = () => {
        history.goBack();
    };

    const handleAddToMyList = () => {
        if(addToListButton) {
            setMyListWarriorsContext(myListWarriorsContext => [...myListWarriorsContext, identy]);
        }else{
            setMyListWarriorsContext(myListWarriorsContext => myListWarriorsContext.filter(e => e !== identy ));
        }
        setButtonToggle(addToListButton => !addToListButton);
    };

    const handleColorStatus = () => {
        return (addToListButton ? '#069FB8' : '#AE0909');
    };

    useEffect(() => {
        console.log('hehehe');
        if(JSON.parse(localStorage.getItem('myWarriorsList')) !== myListWarriorsContext){
            localStorage.setItem('myWarriorsList', JSON.stringify(myListWarriorsContext));
        } 
    },[addToListButton]);

    useEffect(() => {
        // console.log(identy);
        // console.log(myWarriorsListContext.find(e => e.number === identy));
        //console.log(AllWarriors);
        if(myListWarriorsContext.includes(identy)){
            setButtonToggle(false);
        }
    },[]);

    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'});

    return (
        <WarriorSubPageContainer>
            {/* {
                !isMobile && 
                (<button
                    onClick={goBackHandle}
                >
                    Wróć
                </button>)
            } */}
            
            <WarriorSubPageInfoWrapper>

                <WarriorCardNameNumber>
                    {name} 
                </WarriorCardNameNumber>
                
                <WarriorCardNameNumber>
                    #{number}
                </WarriorCardNameNumber>
                
                <WarriorCardSkill>
                    Skill: {skill}
                </WarriorCardSkill>

            </WarriorSubPageInfoWrapper>
            
            <WarriorSubPageDescriptWrapper>
                <WarriorSubPageParagraph>
                    {description}
                </WarriorSubPageParagraph> 
            </WarriorSubPageDescriptWrapper>
            
            <WarriorButtonWrapper>
                <WarriorCardButton
                onClick={show}
                back={'#AE0909'}
                status={'#AE0909'}
                >
                    Rezerwa
                </WarriorCardButton>
                <WarriorCardButton 
                    onClick={handleAddToMyList}
                    // back={handleColorStatus}
                    status={handleColorStatus}
                >
                    {addToListButton ? 'Dodaj do' : 'Usuń z'} mojej listy
                </WarriorCardButton>
            </WarriorButtonWrapper>
            

            

        </WarriorSubPageContainer>
    )
}
