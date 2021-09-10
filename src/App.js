import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Shop from './Shop';
import Cart from './Cart';

import { useLogin } from './store';

function App() {

  const { email } = useLogin();

  return (

    <Router>
      <Switch>
        <Route path = "/" exact>
          { email? <Shop />: <Login/>}
        </Route>

        <Route path = "/shop" exact>
          { email? <Shop />: <Login/>}
        </Route>

        <Route path = "/cart" exact>
          { email? <Shop />: <Cart/>}
        </Route>

      </Switch>
    </Router>

  );
}


export default App;
