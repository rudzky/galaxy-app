import React, { useContext, useEffect, useState, useReducer } from 'react';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';

export default function WarriorAdd() {

    let { pathname } = useLocation();

    const initialState = {
        number: false,
        name: false,
        skill: false,
        description: false,
    };

    const history = useHistory();
    const [linksContext, setLinksContext] = useContext(MenuContext);
    const [allWarriorsContext, setAllWarriorsContext] = useContext(AllWarriorsContext);

    const [number, setNumber] = useState();
    const [name, setName] = useState('');
    const [skill, setSkill] = useState('');
    const [describe, setDescribe] = useState('');

    const reducer = (state, action) => {
        switch(action.type) {
            case 'number-true':
                return {...state, number: true};
            case 'number-false':
                return {...state, number: false};
            case 'name-true':
                return {...state, name: true};
            case 'name-false':
                return {...state, name: false};
            case 'skill-true':
                return {...state, skill: true};
            case 'skill-false':
                return {...state, skill: false};
            case 'description-true':
                return {...state, description: true};
            case 'description-false':
                return {...state, description: false};
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    const goBackHandle = () => {
        history.goBack();
    };

    const updateName = (e) => {
        setName(e.target.value);
        let check = allWarriorsContext.find(el => el.name === e.target.value);
        if(check !== undefined || e.target.value === '') {
            dispatch({type: 'name-false'});
        }else{
            dispatch({type: 'name-true'});
        }
    };

    const updateSkill = (e) => {
        setSkill(e.target.value);
        if(e.target.value === ''){
            dispatch({type: 'skill-false'});
        }else{
            dispatch({type: 'skill-true'});
        }
    };

    const updateNumber = (e) => {
        setNumber(e.target.value);
        let check = allWarriorsContext.find(el => el.number === parseInt(e.target.value));
        if(check !== undefined || e.target.value === '') {
            dispatch({type: 'number-false'});
        }else{
            dispatch({type: 'number-true'});
        }
    };

    const updateDescribe = (e) => {
        setDescribe(e.target.value);
        if(e.target.value === ''){
            dispatch({type: 'description-false'});
        }else{
            dispatch({type: 'description-true'});
        }
    };

    const addWarrior = () => {

    };

    useEffect(() => {
        setLinksContext(pathname);
    });

    return(
        <div>
            <button
                onClick={goBackHandle}
            >
                Wróć
            </button>
            Dodaj wojownika

            <form onSubmit={addWarrior}>
                <input type="number" name="number" onChange={updateNumber} placeholder="99"/>
                <input type="text" name="name" value={name} onChange={updateName} maxLength="30"/>
                <textarea name="skill" name="skill" rows="5" value={skill} onChange={updateSkill} maxLength="100"></textarea>
                <textarea name="describe" name="describe" rows="8" value={describe} onChange={updateDescribe} maxLength="150"></textarea>
            
                <button type="submit">Dodaj</button>
                <button>Anuluj</button>

            </form>
        </div>
    );
}