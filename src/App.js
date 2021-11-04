import './App.css';
import React from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import CreatePost from './Components/CreatePost';
import ViewPost from './Components/ViewPost';
import LoginForm from './Components/LoginForm';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={CreatePost}/>
        <Route exact path='/post/:id' component={ViewPost}/>
        <Route exact path='/login' component={LoginForm}/>
      </Switch>
    </Router>
  );
}

export default App;
