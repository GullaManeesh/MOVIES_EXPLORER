import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { FavContextProvider } from "./components/contexts/FavContext";
import Favorites from "./components/Favorites/Favorites";

const Layout = () => {
  return (
    <FavContextProvider>
      <div className="bg-black flex flex-col w-screen h-fit text-white ">
        <Header />
        <Outlet />
      </div>
    </FavContextProvider>
  );
};

export default Layout;
