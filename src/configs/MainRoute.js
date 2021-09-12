import React from 'react';
import AuthenticatedRoute from './AuthenticatedRoute';
import { Route, Redirect, Switch } from 'react-router-dom';
import NotFound from '../components/NotFound/NotFound';
import Header from '../components/Header/Header';


const Home = React.lazy(() => import('../features/home/Home'))

function MainRoute() {
    return (
        <>
        <Switch>
            <Redirect exact from="/home" to="/" />
            <AuthenticatedRoute exact path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
        </>
    );
}

export default MainRoute;