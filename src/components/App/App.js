import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import WarriorAdd from '../WarriorAdd/WarriorAdd';
import MyList from '../MyList/MyList';
import WarriorPage from '../WarriorPage/WarriorPage';

export default function App() {

  const [linksContext, setLinksContext] = useState("/");
  const [allWarriorsData, setAllWarriorsData] = useState([]);
  const [warriorsNumbers, setWarriorsNumbers] = useState([]);
  const [myWarriorsListContext, setMyWarriorsListContext] = useState([]);

  const APIAddress = "https://e3decdb6-2e8f-4c0b-9883-c1b7ce735dee.mock.pstmn.io/galaxy";
  const getWarriorsData = () => {
    axios
      .get(APIAddress)
      .then(response => response.data)
      .then(({warriors}) => {
        setAllWarriorsData(warriors);
          let warriors_numbers = [];
          warriors.forEach((warrior, index) => {
            let warriorString = JSON.stringify(warrior);
            localStorage.setItem(index, warriorString);
            warriors_numbers.push(index);
          });
        setWarriorsNumbers(warriors_numbers);
          localStorage.setItem('warriorsNumbers', JSON.stringify(warriors_numbers));
          localStorage.setItem('expire', Date.now() + 259200000);
      });
  }; 

  useEffect( () => {

    if(localStorage.getItem('expire') < Date.now() || localStorage.getItem('expire') === null ){
      getWarriorsData();
    }else{
      let warriors_numbers = JSON.parse(localStorage.getItem('warriorsNumbers'));
      const warriros_from_localstorage = [];
      warriors_numbers.forEach((e) => {
        warriros_from_localstorage.push(JSON.parse(localStorage.getItem(e)));
      });
      setAllWarriorsData(warriros_from_localstorage);
      setWarriorsNumbers(warriors_numbers);
    };

    setMyWarriorsListContext(JSON.parse(localStorage.getItem('myWarriorsList')) || []);
    
  },[]);

  return (
    <Router>
      <MenuContext.Provider value={[linksContext, setLinksContext]}>
        <MyWarriorsContext.Provider value={[myWarriorsListContext, setMyWarriorsListContext]}>
          <Menu />
          <AllWarriorsContext.Provider value={{
            warriorsData: allWarriorsData,
            warriorsNumbers: warriorsNumbers
          }}>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/add_warrior" component={WarriorAdd} />
              <Route path="/my_list" component={MyList} />
              <Route path="/warrior_page/:identy" component={WarriorPage} />
            </Switch>
          </AllWarriorsContext.Provider>
        </MyWarriorsContext.Provider>
      </MenuContext.Provider>
    </Router>
  );
}
