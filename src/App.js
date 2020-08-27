import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { login } from './actions/UserAction';

import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Header from "./containers/Header";
import AdminRoute from "./containers/AdminRoute";
import ListUserPage from "./containers/ListUserPage";

const App = function() {

    const user = useSelector(state => state.User);
    const dispatch = useDispatch();

    // useEffect(() => {
    //
    //     let loggedAccount = {
    //         id: 1,
    //         username: 'dodododo',
    //         role: 'admin'
    //     };
    //
    //     dispatch(login(loggedAccount));
    // }, []);

    return (
        <Router>
            <Header />
            <AdminRoute exact path="/users">
                <ListUserPage />
            </AdminRoute>
            <Route exact path="/" render={() => !user ? <Redirect to="/login" /> : <HomePage /> } />
            <Route exact path="/login" render={() => !user ? <Login /> : <Redirect to="/" /> }/>
        </Router>
    );
}

export default App;
