import React from "react";
import Navbar from "./Navbar/Navbar";
import Getintouch from "./Getintouch/Getintouch";
import Footer from "./Footer/Footer";
import Feature from "./Feature/Feature";
import Jumbotron from "./Jumbotron/Jumbotron";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Feature />
      <Getintouch />
      <Footer />
    </div>
  );
};

export default App;
