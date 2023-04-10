import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BeerEdit from "./pages/BeerEdit";
import BeerIndex from "./pages/BeerIndex";
import BeerNew from "./pages/BeerNew";
import BeerShow from "./pages/BeerShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import mockBeers from "./mockBeers";

const App = () => {
  // holds mock beer data in state
  const [beers, setBeers] = useState(mockBeers);

  useEffect(() => {
    readBeer();
  }, []);

  // function to read from the server and set the list of all beers to State
  const readBeer = () => {
    fetch("http://localhost:3000/beers")
      .then((response) => response.json())
      .then((payload) => setBeers(payload))
      .catch((error) => console.log(error));
  };

  //fucntion to like a beer
  const likeBeer = (beer, id) => {
    // post liked beer to likedbeer database
    fetch("http://localhost:3000/liked_beers", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readBeer())
      .catch((errors) => console.log("Beer Create Errors:", errors));
    // remove liked beer from database
    fetch(`http://localhost:3000/beers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => console.log(payload))
      .then(() => readBeer())
      .catch((errors) => console.log("delete errors:", errors));
  };

  // function to carry out the creation of new beers
  const createBeer = (beer) => {
    fetch("http://localhost:3000/beers", {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => readBeer())
      .catch((errors) => console.log("Beer Create Errors:", errors));
  };
  // function to carry out the updating of beers
  const updateBeer = (beer, id) => {
    fetch(`http://localhost:3000/beers/${id}`, {
      body: JSON.stringify(beer),
      headers: {
        "Content-Type": "application/json",
      },
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => readBeer())
      .catch((errors) => console.log("Beer Update Errors:", errors));
  };
  // function to handle the deletion of beers - something about this process is completley busted
  const deleteBeer = (id) => {
    fetch(`http://localhost:3000/beers/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => console.log(payload))
      .then(() => readBeer())
      .catch((errors) => console.log("delete errors:", errors));
  };

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/beerindex"
          element={<BeerIndex beers={beers} likeBeer={likeBeer} />}
        />
        <Route
          path="/beershow/:id"
          element={<BeerShow beers={beers} deleteBeer={deleteBeer} />}
        />
        <Route path="/beernew" element={<BeerNew createBeer={createBeer} />} />
        <Route
          path="/beeredit/:id"
          element={<BeerEdit updateBeer={updateBeer} beers={beers} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
