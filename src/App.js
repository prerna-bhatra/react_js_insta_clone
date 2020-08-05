import React from 'react';
import NavBar from './components/navbar';
import Home from './components/screens/Home';
import Profile from './components/screens/profile';
import SignUp from './components/screens/signup';
import Login from './components/screens/login';
import CreatePost from './components/screens/CreatePost';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
   // <h1>Hello</h1>
   <BrowserRouter>
   <NavBar/>
   <Route path="/login">
    <Login/>
   </Route>
    <Route path="/signup">
    <SignUp/>
   </Route>
   <Route path="/Home">
    <Home/>
   </Route>
   <Route path="/profile">
    <Profile/>
   </Route>
   <Route path="/CreatePost">
    <CreatePost/>
   </Route>
  
   </BrowserRouter>
  );
}

export default App;
