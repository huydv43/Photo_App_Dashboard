import React from 'react';
import NotFound from 'components/NotFound/NotFound';
import { Switch, Route, useRouteMatch} from 'react-router-dom';
import MainProduct from './pages/Main/MainProduct';

function Product() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainProduct} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Product;