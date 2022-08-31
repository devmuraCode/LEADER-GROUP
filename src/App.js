import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Our from "./components/Our";
// import Who from "./components/Who";
import Services from "./components/Services";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Our/>
      {/* <Who/> */}
      <Approach/>
      <Cards/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
