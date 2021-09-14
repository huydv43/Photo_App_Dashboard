import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import NotFound from 'components/NotFound/NotFound';

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