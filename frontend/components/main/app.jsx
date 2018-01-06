//utils
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//components
import Splash from './splash.jsx';


const App = () => (
    <Switch>
        <Route exact path="/" component={Splash} />
    </Switch>
);

export default App;