import React from 'react';
import NotFound from 'components/NotFound/NotFound';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import MainBlog from 'features/Blogs/pages/Main/MainBlog';
 
function Blog() {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={match.url} component={MainBlog} />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Blog;