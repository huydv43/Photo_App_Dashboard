import GlobalLoading from 'components/GlobalLoading/GlobalLoading';
import AuthenticatedRoute from 'configs/AuthenticatedRoute';
import MainRoute from 'configs/MainRoute';
import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/css/grid.css';
import './assets/scss/App.scss';

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
                                    <AuthenticatedRoute component={MainRoute} />
                                        
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
