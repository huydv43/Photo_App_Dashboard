import React from 'react';
import './Home.scss';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from '../../components/NotFound/NotFound';
import Main from './pages/Main/Main';


import PropTypes from 'prop-types';

Home.propTypes = {
    
};

function Home(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={Main} />

            {/* <Route path={`${match.url}/add`} component={AddEditPage} /> */}


            <Route component={NotFound} />      
    </Switch>
    );
}

export default Home;