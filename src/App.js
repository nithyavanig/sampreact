import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

const Alignstyle = styled.div`
 text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
       name: 'Hello'
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };
  render() {
    return (
    <MuiThemeProvider>
    <div className="App">     
      <div className="container_login">
      <h2 style={{textAlign:"center",fontWeight:"bold"}}>Ineve Creations</h2>
      <h4 style={{textAlign:"center",fontWeight:"bold"}}>Login</h4>
      <div className="App-intro">
          <div>    
          <TextField
              style={{ 'width': '50%' }}
              hintText="Name"
              floatingLabelText="Your Name"              
              name="Name1"
              onChange={this.handleTextChange}
              value={this.state.name}                            
          />
          </div>
          <div></div>
          <div>
          <TextField 
              style={{ 'width': '50%' }}
              ref='password'
              hintText="Password"
              floatingLabelText="Password"
              type="password" 
          />
          </div>         
      </div>
      <div>
        <Alignstyle>
        <RaisedButton 
                style={{ 'width': '50%' }}
                label="Login" 
                color="secondary" 
                lableStyle={{float: 'center'}} 
                onClick={this.handleSubmit} 
        />
        </Alignstyle>
      </div>
    </div>  
    </div>
    </MuiThemeProvider>
    );
  }
  handleTextChange(event) {
    this.setState({name: event.target.value})
  }
  handleSubmit(event) {
    alert('Welcome ..' + this.state.name);
    event.preventDefault();
  }
}

export default App;
