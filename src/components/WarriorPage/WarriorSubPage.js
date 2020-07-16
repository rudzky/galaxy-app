import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import { 
    WarriorSubPageContainer,
    WarriorSubPageDescriptWrapper,
    WarriorSubPageInfoWrapper,
    WarriorSubPageParagraph,
    WarriorSubPageButton,
    WarriorSubPageButtonWrapper,
    WarriorSubPageSpan,
    WarriorSubPageName
} from './WarriorSubPageStyles';
import {
    WarriorCardSkill,
    WarriorCardImage
} from '../WarriorCard/WarriorCardStyles';

export default function WarriorSubPage({ show }) {

    let { identy } = useParams();
    identy = parseInt(identy); 

    const [addToListButton, setButtonToggle] = useState(true);

    const [AllWarriors, setAllWarriors] = useContext(AllWarriorsContext);
    const [myListWarriorsContext, setMyListWarriorsContext] = useContext(MyWarriorsContext);
    const { number, name, skill, description } = AllWarriors.find(e => e.number === identy);

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
        if(JSON.parse(localStorage.getItem('myWarriorsList')) !== myListWarriorsContext){
            localStorage.setItem('myWarriorsList', JSON.stringify(myListWarriorsContext));
        } 
    },[addToListButton]);

    useEffect(() => {
        if(myListWarriorsContext.includes(identy)){
            setButtonToggle(false);
        }
    },[]);

    return (
        <WarriorSubPageContainer>

            <WarriorSubPageInfoWrapper>

                <WarriorCardImage 
                    src={`http://source.unsplash.com/random/200x200?${name.trim().toLowerCase()}`} 
                    margin={'10px'}
                />

                <WarriorSubPageSpan>

                    <WarriorSubPageName>
                        {name} 
                    </WarriorSubPageName>
                    
                    <WarriorSubPageName>
                        #{number}
                    </WarriorSubPageName>

                </WarriorSubPageSpan>
                
            </WarriorSubPageInfoWrapper>

            <WarriorCardSkill>
                Skill: {skill}
            </WarriorCardSkill>
            
            <WarriorSubPageDescriptWrapper>
                <WarriorSubPageParagraph>
                    {description}
                </WarriorSubPageParagraph> 
            </WarriorSubPageDescriptWrapper>
            
            <WarriorSubPageButtonWrapper>
                <WarriorSubPageButton
                    onClick={show}
                    back={'#AE0909'}
                    status={'#AE0909'}
                >
                    Rezerwa
                </WarriorSubPageButton>
                <WarriorSubPageButton 
                    onClick={handleAddToMyList}
                    status={handleColorStatus}
                >
                    {addToListButton ? 'Dodaj do' : 'Usuń z'} mojej listy
                </WarriorSubPageButton>
            </WarriorSubPageButtonWrapper>
            
        </WarriorSubPageContainer>
    )
}
