import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from "./img/LP_Retro_Logo.jpg";
import Recipe from "./components/recipe";
import RecipeList from "./components/recipeList";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.lollyspantry.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Lolly&apos;s Pantry
          </a>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
