import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from "./containers/HomePage";
import Login from "./containers/Login";
import Header from "./containers/Header";

const App = function() {
    const [user, login] = useState({
        id: 1,
        username: 'dodododo',
        role: 'admin'
    });

    return (
        <Router>
            <Header />
            <Route exact path="/">
                <HomePage user={user}/>
            </Route>
            <Route exact path="/login">
                <Login />
            </Route>
        </Router>
    );
}

export default App;
