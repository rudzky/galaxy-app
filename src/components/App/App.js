import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import WarriorAdd from '../WarriorAdd/WarriorAdd';
import MyList from '../MyList/MyList';
import WarriorPage from '../WarriorPage/WarriorPage';

export default function App() {

  const defaultContextValue = useContext(MenuContext);
  const [context, setContext] = useState(defaultContextValue);

  useEffect( () => {
    if(localStorage.getItem('expire') < Date.now()){
      getWarriorsData();
    };
  });

  const getWarriorsData = () => {
    axios
      .get("https://run.mocky.io/v3/6fdf71a2-716a-470f-a905-7e9b4d1ba12c")
      .then(response => response.data)
      .then(({warriors}) => {
        let warriors_numbers = [];
        warriors.forEach((warrior) => {
          let warriorString = JSON.stringify(warrior);
          localStorage.setItem(warrior.number, warriorString);
          warriors_numbers.push(warrior.number);
        });
        localStorage.setItem('warriorsNumbers', JSON.stringify(warriors_numbers));
        localStorage.setItem('expire', Date.now() + 259200000);
      });
  }; 

  return (
    <Router>
      <MenuContext.Provider value={[context, setContext]}>
        <Menu />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/add_warrior" component={WarriorAdd} />
          <Route path="/my_list" component={MyList} />
          <Route path="/warrior_page" component={WarriorPage} />
        </Switch>
      </MenuContext.Provider>
    </Router>
  );
}
