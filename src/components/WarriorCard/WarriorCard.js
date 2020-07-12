import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';

export default function WarriorCard({ identy }) {

    const [listMember, setListMember] = useState(false);

    const {number, name, skill, description} = JSON.parse(localStorage.getItem(identy));

    useEffect(() => {
        let listMembersNumbers = localStorage.getItem('warriorsNumbers');
        if(listMembersNumbers.includes(identy)){
            setListMember(true);
        }
    });

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
            
            <Link to="/my_list">
                <button>dodaj do mojej listy</button>
            </Link>
        </div>
    );
}