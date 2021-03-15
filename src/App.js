
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPhotos from "./pages/ShowSearchPhotos";
import ShowProfile from "./pages/ShowProfile";

function App() {
  return (
    
     
 <div className="container">
        <h1 className="title" >My Stargram </h1>
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPhotos}/>
            <Route path="/profile/:id" component={ShowProfile}/>
          </Switch>
        </Router>
        </div>
    
  );
}
export default App;