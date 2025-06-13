import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Favorites from "./components/Favorites/Favorites";
import About from "./components/About/About";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
