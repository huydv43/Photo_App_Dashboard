import NotFound from 'components/NotFound/NotFound';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import './Home.scss';
import Main from './pages/Main/Main';



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