import React from 'react';
import './App.css';
import {Home} from "./components/Home";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import BottomNavigationBar from "./components/BottomNavigationBar";
import {Search} from "./components/Search";
import {Music} from "./components/Music";
import {Testimonies} from "./components/Testimonies";

function App() {
  return (
      <Router>
          <div className="app-container">
              <div className="main-content">
                  <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/search" element={<Search/>}/>
                      <Route path="/music" element={<Music/>}/>
                      <Route path="/testimonies" element={<Testimonies/>}/>
                  </Routes>
              </div>
              <BottomNavigationBar/>
              </div>
      </Router>
);
}

export default App;
