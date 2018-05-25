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
            <div className="Dashboard-body">
                <label>Welcome</label>
            </div>
            </MuiThemeProvider>
        );
    }

}
export default Dashboard;