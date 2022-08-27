import React from "react";
import { Routes, Route , BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import logo from "./img/LP_Retro_Logo.jpg";
import RecipeList from './components/recipeList';
import "./App.css";

function App() {

  return (
    <Router>
      <Container>
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
 
        <Routes>
          <Route path="/" element={<RecipeList />} />
          {/* <Route path="/recipe/:recipeId" element={<Recipe />} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
