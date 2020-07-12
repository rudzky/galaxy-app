import React, { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import WarriorAdd from '../WarriorAdd/WarriorAdd';
import MyList from '../MyList/MyList';
import WarriorPage from '../WarriorPage/WarriorPage';

export default function App() {

  const [linksContext, setLinksContext] = useState("/");
  const [localStorageSavingDone, setLocalStorageSavingDone] = useState(false);
  //const [warriorsData, setWarriorsData] = useState();
  // let MYCONTEXT;

  // const APIAddress = "https://e3decdb6-2e8f-4c0b-9883-c1b7ce735dee.mock.pstmn.io/galaxy";
  // //"https://run.mocky.io/v3/6fdf71a2-716a-470f-a905-7e9b4d1ba12c"

  // const getWarriorsData = () => {
  //   axios
  //     .get(APIAddress)
  //     .then(response => response.data)
  //     .then(({warriors}) => {
  //       //setWarriorsData(warriors);
  //       let warriors_numbers = [];
  //       warriors.forEach((warrior) => {
  //         let warriorString = JSON.stringify(warrior);
  //         localStorage.setItem(warrior.number, warriorString);
  //         warriors_numbers.push(warrior.number);
  //       });
  //       localStorage.setItem('warriorsNumbers', JSON.stringify(warriors_numbers));
  //       localStorage.setItem('expire', Date.now() + 259200000);
  //     });
  // }; 

  // useEffect( () => {
  //   if(localStorage.getItem('expire') < Date.now() || localStorage.getItem('expire') === null ){
  //     getWarriorsData();
  //   }
  // },[]);

  // console.log(MYCONTEXT);

  return (
    <Router>
      <MenuContext.Provider value={[linksContext, setLinksContext]}>
        <Menu />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/add_warrior" component={WarriorAdd} />
          <Route path="/my_list" component={MyList} />
          <Route path="/warrior_page/:identy" component={WarriorPage} />
        </Switch>
      </MenuContext.Provider>
    </Router>
  );
}
