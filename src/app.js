import React from 'react';
import {Home, Browse, Signin, Signup} from './pages';
import {BrowserRouter as Router} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import {IsUserRedirect} from './helpers/routes';
import {ProtectedRoute} from './helpers/routes';
import {useAuthListener} from './hooks';

export default function App() {
    const {user} = useAuthListener();


 return (
 <Router>

    <IsUserRedirect 
    user = {user}
    loggedInPath = {ROUTES.BROWSE}
    path = {ROUTES.SIGN_IN}
    >
    <Signin />
    </IsUserRedirect>

    
    <IsUserRedirect 
    user = {user}
    loggedInPath = {ROUTES.BROWSE}
    path = {ROUTES.SIGN_UP}
    >
    <Signup />
    </IsUserRedirect>

    <ProtectedRoute
    user = {user} 
    path = {ROUTES.BROWSE}
    >
    <Browse />
    </ProtectedRoute>

    <IsUserRedirect
    user = {user}
    loggedInPath = {ROUTES.BROWSE}
    path = {ROUTES.HOME}
    exact
    >   
    <Home />
    </IsUserRedirect>

 </Router>
 );
}

