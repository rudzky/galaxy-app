import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';

export default function WarriorCard({ identy }) {

    const [addToListButton, setButtonToggle] = useState(true);
    const { warriorsData, warriorsNumbers } = useContext(AllWarriorsContext);
    const [myListWarriorsContext, setMyListWarriorsContext] = useContext(MyWarriorsContext);
    const {number, name, skill, description} = warriorsData[identy];

    const handleAddToMyList = () => {
        if(addToListButton) {
            setMyListWarriorsContext(myListWarriorsContext => [...myListWarriorsContext, identy]);
        }else{
            setMyListWarriorsContext(myListWarriorsContext => myListWarriorsContext.filter(e => e !== identy ));
        }
        setButtonToggle(addToListButton => !addToListButton);
    };

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('myWarriorsList')));
        console.log(myListWarriorsContext);
        if(JSON.parse(localStorage.getItem('myWarriorsList')) !== myListWarriorsContext){
            localStorage.setItem('myWarriorsList', JSON.stringify(myListWarriorsContext));
        } 
    },[addToListButton]);

    useEffect(() => {
        if(myListWarriorsContext.includes(identy)){
            setButtonToggle(addToListButton => !addToListButton);
        }
    },[]);

    return(
        <div>
            <h1>#{number}</h1>
            {/* <img src={`http://source.unsplash.com/random/50x50?${name.trim().toLowerCase()}`} alt=""/> */}
            <h2>{name}</h2>
            <h3>{skill}</h3>
            <p>{description}</p>
            
            <Link
                to={`/warrior_page/${identy}`} 
            >
                Wyświetl szczegóły
            </Link>
            
            <button 
                onClick={handleAddToMyList}
            >
                {addToListButton ? 'dodaj do' : 'usuń z'} mojej listy
            </button>

        </div>
    );
}