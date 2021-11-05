import './App.css';
import React from 'react';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Components/NavBar';
import CreatePost from './Components/CreatePost';
import ViewPost from './Components/ViewPost';
import LoginForm from './Components/LoginForm';
import DeleteComment from './Components/DeleteComment';
import DeletePost from './Components/DeletePost';
import UpdatePost from './Components/UpdatePost';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/create' component={CreatePost}/>
        <Route exact path='/post/:id' component={ViewPost}/>
        <Route exact path='/login' component={LoginForm}/>
        <Route exact path='/post/:id/comment/:commentId' component={DeleteComment}/>;
        <Route exact path='/post/:id/delete' component={DeletePost}/>
        <Route exact path='/post/:id/update' component={UpdatePost}/>
      </Switch>
    </Router>
  );
}

export default App;
