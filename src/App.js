import "./App.css";
// import React, {useState } from "react";
import Navbar from "./Navbar";
import News from "./News";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import React, { useState } from 'react';


 
const App=()=> {
  const pageSize=6;

  return (
    
      <div>
        <Router>
          <Navbar />
          
          <Routes>
          <Route exact path='/' element={<News key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/technology' element={<News key="technology" pageSize={pageSize} country="in" category="technology"/>}></Route>
          <Route exact path='/sports' element={<News key="sports" pageSize={pageSize} country="in" category="sports"/>}></Route>
          <Route exact path='/business' element={<News key="business" pageSize={pageSize} country="in" category="business"/>}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment"/>}></Route>
          <Route exact path='/general' element={<News key="general" pageSize={pageSize} country="in" category="general"/>}></Route>
          <Route exact path='/health' element={<News key="health" pageSize={pageSize} country="in" category="health"/>}></Route>
          <Route exact path='/science' element={<News key="science" pageSize={pageSize} country="in" category="science"/>}></Route>
          
          </Routes>
          </Router>
          </div>

    );
  }

  export default App;
