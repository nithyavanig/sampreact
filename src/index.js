import React from 'react';
import ReactDOM from 'react-dom';
import './Constants/url.js';
import {HashRouter,Link,Redirect,Router,Route} from 'react-router-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LoginComponent from './Components/Login.js';
import Profile from './Components/Profile.js';
import Grades from './Components/Grades.js';
import Dashboard from './Components/Dashboard.js';

ReactDOM.render(
<HashRouter>
<div>
<Route exact path="/" render={() => <LoginComponent/>} />
<Route exact path="/dashboard" render={() => <Dashboard/>} />
<Route exact path="/grades" render={() => <Grades/>} />
<Route exact path="/profile" render={() => <Profile/>} />
</div>
</HashRouter>
, document.getElementById('root'));
registerServiceWorker();
