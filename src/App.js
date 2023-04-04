import React, {useState} from 'react';
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './App.css';
import mockBeers from "./mockBeers";

const App = () => {
const [beers, setBeers] = useState(mockBeers)



  return (
    <>
    <Header />
    <Routes> 
      <Route path="/" element={<Home/>} />
      <Route path="/beerindex" element={<BeerIndex/>} />
      <Route path="/beershow" element={<BeerShow/>} />
      <Route path="/beernew" element={<BeerNew/>} />
      <Route path="/beeredit" element={<BeerEdit/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
   
    <Footer />
    </>
  )
}

export default App;
