import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/headerList/Home'
import Projects from '../components/pages/headerList/Projects'
import Contact from '../components/pages/headerList/Contact'
import AboutMe from '../components/pages/headerList/AboutMe'
import PositionISS from '../components/pages/headerList/Projects/components/PositionISS';
import Weather from '../components/pages/headerList/Projects/components/Weather';

function Router(props) {

    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/aboutMe" component={AboutMe} />
            <Route path="/contact" component={Contact} />
            <Route path="/project/iss" component={PositionISS} />
            <Route path="/project/weather" component={Weather} />
        </Switch>
    )
}

export default Router;