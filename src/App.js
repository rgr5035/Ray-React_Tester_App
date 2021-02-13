import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


function App() {

    return (
      <Router> 
        <div>
          <Navbar />
            
              <Route exact path ="/" component={Home}/>
            
        </div>
      </Router> 
    ) 
}

export default App;