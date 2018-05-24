import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import './Constants/url.js';

class Dashboard extends Component{
    constructor(props){
        super(props);  
    };

    render(){
        return(
            <MuiThemeProvider>
            <div>
                <label>Welcome</label>
            </div>
            </MuiThemeProvider>
        );
    }

}