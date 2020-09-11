import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Vac from './pages/Vacancies'
import Learnership from './pages/Learnership'
import Tenders from './pages/Tenders'
 
function App() {
  return (
    <div>

    <Router>

      <Switch>

        <Route exact path='/' component={Login}/>
        <Route exact path='/Add' component={Register}/>
        <Route exact path='/Home' component={Home}/>
        <Route exact path='/Vacancies' component={Vac}/>
        <Route exact path='/Tenders' component={Tenders}/>
        <Route exact path='/Learnership' component={Learnership}/>

      </Switch>
      
    </Router>
     
  </div>

    
  );
}

export default App;
