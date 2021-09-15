import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import NotFound from 'components/NotFound/NotFound';
import GlobalLoading from 'components/GlobalLoading/GlobalLoading';

const Blog = React.lazy(() => import('features/Blogs/Blog'));
const Product = React.lazy(() => import('features/Products/Product'));

function Main() {
    return (
        <Suspense fallback={<GlobalLoading />}>
            <Switch>
                <Route path="/products" component={Product} />
                <Route path="/blogs" component={Blog} />
                <Route component={NotFound} />
            </Switch>
        </Suspense>        
    );
}

export default Main;