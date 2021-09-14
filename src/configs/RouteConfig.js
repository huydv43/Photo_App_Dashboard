// import { ROUTES } from 'constants';
// import React from 'react';
// import { Route } from 'react-router';

// const App = React.lazy(() => import('App'));
// const Blog = React.lazy(() => import('features/blogs/Blog'));
// const Login = React.lazy(() => import('features/auth/Login'));



// const routes = [
//     {
//         path: ROUTES.HOME,
//         exact: true,
//         isProtect: true,
//         component: () => <App />,
//     },
//     {
//         path: ROUTES.LOGIN,
//         exact: true,
//         isProtect: true,
//         component: () => <Login />,
//     },

// ];


// const renderRoute = (routes, isAuth = false) => {
//     return routes.map((route, index) =>{
//         const {path, exact, component, isProtect} = route;
//         const LoginComponent = () => <Login /> 
//         const componentRender = !isProtect
//             ? component
//             : isAuth
//             ? component
//             : LoginComponent

//         return (
//             <Route
//                 path={path}
//                 exact={exact}
//                 key={index}
//                 component={componentRender}
//             />
//         );
//     })
// };

// export default {
//     routes,
//     renderRoute
// }