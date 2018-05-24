import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import './Constants/url.js';
import {Redirect} from 'react-router-dom';

const Alignstyle = styled.div`
 text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);    
    this.state = {
       name: 'Hello',
       nameError:'',
       passError:'' ,
       authSuccess:false
    }
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  };
  render() {
    if(this.state.authSuccess){
      return <Redirect to='/dashboard' />;
    }
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
              ref={(input) => { this.uname = input; }}                          
          />
          </div>
          <div className="ErrorMsg">{this.state.nameError}</div>
          <div>
          <TextField 
              style={{ 'width': '50%' }}
              ref={(input) => { this.password = input; }}
              hintText="Password"
              floatingLabelText="Password"
              type="password" 
          />
          </div>
          <div className="ErrorMsg">{this.state.passError}</div>         
      </div>
      <div>
        <Alignstyle>
        <RaisedButton 
                style={{ 'width': '50%' }}
                label="Login" 
                color="secondary"                 
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
   const pass=this.password.value;
   const uname=this.uname.value;
   if(uname ==""){
     this.setState({"nameError":"User Name is required"});
   }
   else if(pass==''){
    this.setState({"passError":"Password is required"});
   }
   else{
    this.state.authSuccess=true;
   }
   event.preventDefault();
  }
}

export default App;
