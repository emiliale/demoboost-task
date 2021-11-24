import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SearchPage from "./views/SearchPage"
import List from "./views/ListPage"
import Webpage from "./views/Webpage"

const App: React.FC = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:webpage" element={<Webpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
