import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';

const alignstyle = styled.div`
 text-align: left;
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
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Sample Appli</h2>
      </div>
      <div className="container_login">
      <div className="App-intro">    
          <TextField
              style={{ 'width': '20%' }}
              hintText="Name"
              floatingLabelText="Your Name"              
              name="Name1"
              onChange={this.handleTextChange}
              value={this.state.name}                            
          />
          <br/>
      </div>
      <div>
        <alignstyle>
        <RaisedButton 
                label="Submit" 
                color="secondary" 
                lableStyle={{float: 'left'}} 
                onClick={this.handleSubmit} 
        />
        </alignstyle>
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
