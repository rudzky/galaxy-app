import React, { useContext, useEffect, useState, useReducer } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import { useMediaQuery } from 'react-responsive';
import {
    WarriorAddContainer,
    WarriorAddForm,
    WarriorAddInputs,
    WarriorAddTextarea,
    WarriorAddLink
} from './WarriorAddStyles';
import {
    WarriorCardButtonLink,
    WarriorCardButton
} from '../WarriorCard/WarriorCardStyles';
import { 
    MainHeader
} from '../Main/MainStyles';

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

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [redirect, setRedirect] = useState(false);

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

    const addWarrior = (e) => {
        e.preventDefault();
        setButtonDisabled(true);
        let newWarrior = {
            number: parseInt(number),
            name: name,
            skill: skill,
            description: describe
        };
        setAllWarriorsContext((allWarriorsContext) => {
            return [...allWarriorsContext, newWarrior];
        });
        localStorage.setItem(newWarrior.number, JSON.stringify(newWarrior));
        let warriorsNumbersInLocalstorage = JSON.parse(localStorage.getItem('warriorsNumbers'));
        localStorage.setItem('warriorsNumbers',JSON.stringify([...warriorsNumbersInLocalstorage, newWarrior.number]));
        setRedirect(true);
    };

    const handleColorChange = (input) => {
        return input ? '#2FF923' : '#AE0909';
    };

    useEffect(() => {
        if(state.name && state.number && state.skill && state.description){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[state]);

    useEffect(() => {
        setLinksContext(pathname);
    });

    const isMobile = useMediaQuery({query: '(max-width: 767.98px)'});

    return(
        <WarriorAddContainer>
            {
                redirect && <Redirect to="/" />
            }

            {/* {
                !isMobile && <button onClick={goBackHandle}>Wróć</button>
            } */}

            <WarriorAddForm onSubmit={addWarrior}>

                <MainHeader>
                    Dodaj wojownika
                </MainHeader>
                
                <WarriorAddInputs type="number" name="number" onChange={updateNumber} placeholder="Numer" customWidth={'30%'} color={() => handleColorChange(state.number)} />
                <WarriorAddInputs type="text" name="name" value={name} onChange={updateName} maxLength="30" placeholder="Nazwa" color={() => handleColorChange(state.name)} />
                
                <WarriorAddTextarea name="skill" name="skill" value={skill} onChange={updateSkill} maxLength="100" placeholder="Skill" color={() => handleColorChange(state.skill)}></WarriorAddTextarea>
                <WarriorAddTextarea name="describe" name="describe" value={describe} onChange={updateDescribe} maxLength="150" placeholder="Opis" color={() => handleColorChange(state.description)}></WarriorAddTextarea>
            
                <WarriorCardButton 
                    type="submit"
                    disabled={buttonDisabled}
                    //(state.name && state.number && state.skill && state.description) ? false : true}
                >
                    Dodaj
                </WarriorCardButton>

                <WarriorAddLink
                    to="/"
                >
                    Anuluj
                </WarriorAddLink>

            </WarriorAddForm>
        </WarriorAddContainer>
    );
}