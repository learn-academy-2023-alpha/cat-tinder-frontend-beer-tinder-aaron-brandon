import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import "./App.css";
import mockBeers from "./mockBeers";

const App = () => {
  // holds mock beer data in state
  const [beers, setBeers] = useState(mockBeers);
  
  const createBeer = (beer) => {
    fetch("http://localhost:3000/beers", {
      body:JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then((payload) => readBeer())
    .catch((errors) => console.log("Beer Create Errors:", errors))
  }  


  const readBeer = () => {
    fetch("http://localhost:3000/beers")
    .then((response) => response.json())
    .then((payload) => setBeers(payload))
    .catch((error) => console.log(error))
  }


  useEffect(() =>{
    readBeer()
  }, [])



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beerindex" element={<BeerIndex beers={beers} />} />
        <Route path="/beershow/:id" element={<BeerShow beers={beers} />} />
        <Route path="/beernew" element={<BeerNew createBeer={createBeer}/>} />
        <Route path="/beeredit" element={<BeerEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
