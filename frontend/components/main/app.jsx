//utils
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

//components
import Splash from './splash.jsx';
import Resume from '../resume/resume_container';
import ProjectIndex from '../projects/project_index';
import Simple from '../threeJS/simple2.jsx';


const App = () => (
    <Switch>
        <Route exact path="/" component={Splash} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={ProjectIndex} />
        <Route exact path="/projects/three/1" component={Simple} />
    </Switch>
);

export default App;