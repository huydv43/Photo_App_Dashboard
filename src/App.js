import './assets/scss/App.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import  NotFound  from './components/NotFound/NotFound';
import GlobalLoading from './components/GlobalLoading/GlobalLoading';
// import  Images from './assets/images/loader.svg';

// Lazy loading
const Home = React.lazy(() => import('./features/home/Home'));
const Login = React.lazy(() => import('./features/auth/Login'));

// Lazy loading


function App() {
    const [loading, setLoading] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    return (
        <>
            { loading ? (
                <GlobalLoading />
                )  :  (
                    <Router>
                        <div className="App">
                            {/* share componets */}


                            {/* routes */}
                            <Suspense fallback={<GlobalLoading />}>
                                <Switch>
                                    <Redirect exact from="/home" to="/" />

                                    <Route exact path="/login" component={Login} />
                                    <Route exact path="/" component={Home} />

                                    <Route component={NotFound} />
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
