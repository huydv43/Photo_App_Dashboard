import './assets/scss/App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import  NotFound  from './components/NotFound/NotFound';
import GlobalLoading from './components/GlobalLoading/GlobalLoading';
import AuthenticatedRoute from './configs/AuthenticatedRoute';
import Header from './components/Header/Header';
import MainRoute from './configs/MainRoute';

// Lazy loading
const Home = React.lazy(() => import('./features/home/Home'));
const Login = React.lazy(() => import('./features/auth/Login'));

// Lazy loading


function App() {
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const handleSetAuth = (auth) => {
        setIsAuth(auth);
    }


    return (
        <>
            { loading ? (
                <GlobalLoading />
                )  :  (
                    <Router>
                        <div className="App">
                            <Suspense fallback={<GlobalLoading />}>
                                <Switch>
                                    <Route exact path="/login">
                                        <Login handleSetAuth={handleSetAuth} />
                                    </Route>
                                    <AuthenticatedRoute>
                                        <MainRoute />
                                    </AuthenticatedRoute>
                                </Switch>
                            </Suspense>
                            {/* common components */}
                        </div>
                    </Router>
                )
            }
        </>
    );
}

export default App;
