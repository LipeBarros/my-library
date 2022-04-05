import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './pages/home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/cadastro"> <Cadastro /> </Route>
        <Route path="/login"> <Login /> </Route>
        <Route path="/"> <Home /> </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


