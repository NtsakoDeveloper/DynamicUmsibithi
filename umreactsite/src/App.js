import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


//Page
import Home from './pages/Home'
import About from './pages/About'
import OurServ from './pages/OurServices'
import Commun from './pages/Community'
import OppV from './pages/Vacancies'
import OppProc from './pages/Procurrement'
import OppLear from './pages/Learnership'
import Board from './pages/Board'
import Manage from './pages/Management'
import Contact from './pages/ContactUs'
import Govern from './pages/Govern'


import headPage from './components/header'
import footerPage from './components/footer'

function App() {
  return (

    
    <div>

      <Router>

        <Switch>

          <Route exact path='/' component={Home}/>
          <Route exact path='/About' component={About}/>
          <Route exact path='/Services' component={OurServ}/>
          <Route exact path='/Community' component={Commun}/>
          <Route exact path='/Vacancies' component={OppV}/>
          <Route exact path='/Tender' component={OppProc}/>
          <Route exact path='/Learnership' component={OppLear}/>
          <Route exact path='/Board' component={Board}/>
          <Route exact path='/Management' component={Manage}/>
          <Route exact path='/Contact' component={Contact}/>
          <Route exact path='/Govern' component={Govern}/>

        </Switch>
        
      </Router>
       
    </div>
  
   
  
    
  )
}

export default App;
