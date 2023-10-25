import "./app.css";
import Header from "./header/Header";
import Main from "./main/Main";
import Krugloshlif from "./main/shlifovalnie/Krugloshlif";
import Ploskoshlif from "./main/shlifovalnie/Ploskoshlif";
import Vnutrishlif from "./main/shlifovalnie/Vnutrishlif";
import Tokarnie from "./main/tochenie/Tokarnie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/main/shlifovalnie/Krugloshlif" element={<Krugloshlif />} />
            <Route path="/main/shlifovalnie/Ploskoshlif" element={<Ploskoshlif />} />
            <Route path="/main/shlifovalnie/Vnutrishlif" element={<Vnutrishlif />} />
            <Route path="/main/tokarnie/Tokarno-vintoreznie" element={<Tokarnie />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
