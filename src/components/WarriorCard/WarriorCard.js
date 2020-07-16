import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import { Image } from 'react-image-and-background-image-fade';
import { 
    WarriorCardSection, 
    WarriorCardNameNumber, 
    WarriorCardSkill,
    WarriorCardButtonLink,
    WarriorCardButton,
    WarriorCardOverflow,
    WarriorCardDescription,
    WarriorButtonWrapper,
    WarriorCardImage,
    WarriorCardImageWrapper
} from './WarriorCardStyles';
import Truncate from 'react-truncate';


export default function WarriorCard({ identy }) {

    const [addToListButton, setButtonToggle] = useState(true);
    const [myWarriorsListContext, setMyWarriorsListContext] = useContext(AllWarriorsContext);
    const [myListWarriorsContext, setMyListWarriorsContext] = useContext(MyWarriorsContext);
    const {number, name, skill, description} = myWarriorsListContext.find((e) => e.number === identy);
    const imageLink = `http://source.unsplash.com/random/200x200?${name.trim().toLowerCase()}`;

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

    return(
        <WarriorCardSection>
            <WarriorCardNameNumber>#{number}</WarriorCardNameNumber>
            {/* <img src={`http://source.unsplash.com/random/50x50?${name.trim().toLowerCase()}`} alt=""/> */}
            {/* <img src={`http://source.unsplash.com/random/50x50?jedi`} alt=""/> */}

            {/* <WarriorCardImageWrapper 
                src={`http://source.unsplash.com/random/200x200?${name.trim().toLowerCase()}`}
            /> */}
                {/* <WarriorCardImage src={`http://source.unsplash.com/random/50x50?${name.trim().toLowerCase()}`} /> */}

            {/* <WarriorCardImageWrapper> */}
                <Image 
                    src={imageLink}
                    style={{ backgroundSize: 'cover',backgroundPosition: 'center top' }} 
                    width='100%'
                    height='100%'
                    isResponsive 
                    lazyLoad 
                />
            {/* </WarriorCardImageWrapper> */}
            
            <WarriorCardNameNumber>{name}</WarriorCardNameNumber>

            <WarriorCardOverflow fs={'20px'} fc={'#FFE81F'}>
                <Truncate lines={2} ellipsis={'...'}>
                    Skill: {skill}
                </Truncate>
            </WarriorCardOverflow>

            {/* <WarriorCardSkill>Skill: {skill}</WarriorCardSkill> */}
            
            {/* <WarriorCardOverflow>
                <WarriorCardDescription>
                    {description}
                </WarriorCardDescription> 
            </WarriorCardOverflow> */}

            <WarriorCardOverflow>
                <Truncate lines={3} ellipsis={'...'}>
                    {description}
                </Truncate>
            </WarriorCardOverflow>
            
            <WarriorButtonWrapper>
                <WarriorCardButtonLink
                    to={`/warrior_page/${number}`} 
                >
                    Wyświetl szczegóły
                </WarriorCardButtonLink>
                <WarriorCardButton 
                    status={handleColorStatus}
                    onClick={handleAddToMyList}
                >
                    {addToListButton ? 'Dodaj do' : 'Usuń z'} mojej listy
                </WarriorCardButton>
            </WarriorButtonWrapper>
            
            
            
            {/* <WarriorCardButton 
                status={handleColorStatus}
                onClick={handleAddToMyList}
            >
                {addToListButton ? 'Dodaj do' : 'Usuń z'} mojej listy
            </WarriorCardButton> */}

        </WarriorCardSection>
    );
}