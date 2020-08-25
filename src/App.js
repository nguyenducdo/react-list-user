import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import UserInfo from "./containers/UserInfo";
import Login from "./containers/Login";
import Header from "./containers/Header";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: true,
            user: null
        }
        this.hideHeader = this.hideHeader.bind(this);
    }

    hideHeader() {
        this.setState({header: false})
    }

    login(account) {
        this.setState({account});
    }

    render() {
        return (
            <Router>
                { this.state.header ? <Header /> : null }
                <Route exact path="/" component={UserInfo}/>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Router>
        );
    }
}

export default App;
