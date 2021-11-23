import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import MainPage from "./views/MainPage"
import List from "./views/ListPage"
import Webpage from "./views/Webpage"

function App() {

  fetch('http://localhost:5000/greeting')
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/search" element={<MainPage />} />
          <Route path="/:webpage" element={<Webpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
