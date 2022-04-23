import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Login } from './pages/login';
import { Cadastro } from './pages/cadastro';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Genero } from './pages/genero';
import { Livro } from './pages/livro';
import { MinhaConta } from './pages/minhaConta';
import { Admin } from './pages/admin';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route path="/admin">
          <Admin />
        </Route>

        <Route path="/conta">
          <MinhaConta />
        </Route>

        <Route path="/livro">
          <Livro />
        </Route>

        <Route path="/cadastro">
          <Cadastro />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/genero">
          <Genero />
        </Route>

        <Route path="/">
          <Home />
        </Route>


      </Switch>
    </Router>
  </React.StrictMode >,
  document.getElementById('root')
);


