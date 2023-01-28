import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticaleListPage from "./pages/ArticaleListPage";
import ArticalePage from "./pages/ArticalePage";
import AboutPage from "./pages/AboutPage";
import NoteFoundPage from "./pages/NotFoundPage";
import NavBar from "./NavBar";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route exact path="/" element={<HomePage />}/>
              <Route exact path="/articale-list" element={<ArticaleListPage />}/>
              <Route exact path="/articale/:articleId" element={<ArticalePage />}/>
              <Route exact path="/about" element={<AboutPage />}/>
              <Route exact path="/login" element={<LoginPage />}/>
              <Route exact path="/create-account" element={<CreateAccountPage />}/>
              <Route exact path="*" element={<NoteFoundPage />}/>
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
