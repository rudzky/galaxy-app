import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import MenuContext from '../../contexts/MenuContext';
import AllWarriorsContext from '../../contexts/AllWariorsContext';
import MyWarriorsContext from '../../contexts/MyWarriorsContext';
import axios from 'axios';
import Menu from '../Menu/Menu';
import Main from '../Main/Main';
import WarriorAdd from '../WarriorAdd/WarriorAdd';
import MyList from '../MyList/MyList';
import WarriorPage from '../WarriorPage/WarriorPage';
import NotFound from '../404/NotFound';
import Error from '../Error/Error';

export default function App() {

  const [linksContext, setLinksContext] = useState("/");
  const [allWarriorsData, setAllWarriorsData] = useState([]);
  const [myWarriorsListContext, setMyWarriorsListContext] = useState([]);
  const [showErrorPage, setShowErrorPage] = useState(false);
  const [shouldIFetch, fetchAgain] = useState(false);

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
            localStorage.setItem(warrior.number, warriorString);
            warriors_numbers.push(warrior.number);
          });
          localStorage.setItem('warriorsNumbers', JSON.stringify(warriors_numbers));
          localStorage.setItem('expire', Date.now() + 259200000);
      })
      .catch((error) => {
        setShowErrorPage(true);
      });
  }; 

  const handleFetch = () => {
    fetchAgain(!shouldIFetch);
    setShowErrorPage(false);
  };

  useEffect( () => {

    if(localStorage.getItem('expire') < Date.now() || localStorage.getItem('expire') === null ){
      getWarriorsData();
    }
    else{
      let warriors_numbers = JSON.parse(localStorage.getItem('warriorsNumbers'));
      const warriros_from_localstorage = [];
      warriors_numbers.forEach((e) => {
        warriros_from_localstorage.push(JSON.parse(localStorage.getItem(e)));
      });
      setAllWarriorsData(warriros_from_localstorage);
    };

    setMyWarriorsListContext(JSON.parse(localStorage.getItem('myWarriorsList')) || []);
    
  },[shouldIFetch]);

  return (
    <Router>
      {showErrorPage && <Redirect to="/error" />}
      <MenuContext.Provider value={[linksContext, setLinksContext]}>
        <MyWarriorsContext.Provider value={[myWarriorsListContext, setMyWarriorsListContext]}>
          <Menu />
          <AllWarriorsContext.Provider value={[allWarriorsData, setAllWarriorsData]}>
            <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/add_warrior" component={WarriorAdd} />
              <Route path="/my_list" component={MyList} />
              <Route path="/warrior_page/:identy" component={WarriorPage} />
              <Route path="/error" component={() => <Error refresh={handleFetch} />} />
              <Route component={NotFound} />
            </Switch>
          </AllWarriorsContext.Provider>
        </MyWarriorsContext.Provider>
      </MenuContext.Provider>
    </Router>
  );
}
