import GlobalLoading from 'components/GlobalLoading/GlobalLoading';
import Login from 'features/Login/Login';
import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from 'components/NotFound/NotFound';
import AuthenticatedRoute from 'configs/AuthenticatedRoute';
import DefaultLayouts from 'Layout/DefaultLayouts';



function App() {

    return (
        <div className="app">
            <BrowserRouter>
                <Suspense fallback={<GlobalLoading />}>
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <AuthenticatedRoute component={DefaultLayouts} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
