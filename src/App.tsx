import * as React from "react";
import "./App.scss";
import "./components/FontawesomeIcons";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/homepage";
import Client from "./sections/client/client";
import Pro from "./sections/professionnel/pro";
import Card from "./sections/card/card";
import Faq from "./sections/faq/faq";

function App() {
  return (
      <div className="all">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/client" element={ <Client />} />
          <Route path="/professionnel" element={ <Pro />} />
          <Route path="/card" element={ <Card />} />
          <Route path="/faq" element={ <Faq />} />
        </Routes>
      </div>
  );
}

export default App;
