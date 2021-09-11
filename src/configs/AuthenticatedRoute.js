import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom";
import PropTypes from 'prop-types';

AuthenticatedRoute.propTypes = {
    
};

function AuthenticatedRoute({ component: Component, ...rest }) {
    const [isAuth, setIsAuth] = useState(true);

    return (
        <Route
            {...rest}
            render = {(props) => {
                if (isAuth) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                from: props.location,
                                },
                            }}
                        />
                    );
                }
            }}
        />
    );
}

export default AuthenticatedRoute;