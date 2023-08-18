import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route} from "react-router-dom";

 function App() {
  
    return (
      <div>
        <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <News key="general" pagesize={5} country="us" category="general" />}/>
          <Route exact path="/general" element={ <News key="general" pagesize={5} country="us" category="general" />}/>
          <Route exact path="/sports" element={ <News key="sports" pagesize={5} country="us" category="sports" />}/>
          <Route exact path="/science" element={ <News key="science" pagesize={5} country="us" category="science" />}/>
          <Route exact path="/health" element={ <News key="health" pagesize={5} country="us" category="health" />}/>
          <Route exact path="/entertainment" element={ <News key="entertainment" pagesize={5} country="us" category="entertainment" />}/>
          <Route exact path="/business" element={ <News key="business" pagesize={5} country="us" category="business" />}/>
          <Route exact path="/technology" element={ <News key="technology" pagesize={5} country="us" category="technology" />}/>
       
        </Routes>
        </BrowserRouter>
      </div>
    );
  }

export default App;