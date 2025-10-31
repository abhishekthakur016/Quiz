import React from "react";
import Navbar from "./components/Navbar";
import Scroller from "./components/Scroller";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="scroller" style={{ paddingTop: "6px" }}>
        <Scroller />
      </div>
       <Home />
      
      <Footer/>
    </div>
  );
};

export default App;
