import React, { Component } from 'react';
import '../App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import '../Constants/url.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Profile';
import Login from './Grades';

class Dashboard extends Component{
    constructor(props){
        super(props);  
    };

    render(){
        return(
            <MuiThemeProvider>
            <div>
            <Router>
                <div>
                <ul>
                    <li>
                    <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to="/grades">Grades</Link>
                    </li>
                    <li>
                    <Link to="/classes">Classes</Link>
                    </li>
                    <li>
                    <Link to="/">Logout</Link>
                    </li>
                </ul>
                <hr />
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                </div>  
            </Router>
            </div>
            </MuiThemeProvider>
        );
    }

}
export default Dashboard;