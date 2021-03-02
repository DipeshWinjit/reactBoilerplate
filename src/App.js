import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from './containers/admin/admin';
import Login from './containers/login/login';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
