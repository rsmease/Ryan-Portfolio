//utils
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//components
import Splash from './splash.jsx';
import Resume from '../portfolio/resume';


const App = () => (
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
);

export default App;