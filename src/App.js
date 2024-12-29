



import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header"; // Example header component

function App() {
  return (
    <>
      <Header />
      <Outlet /> {/* This is where child routes will render */}
    </>
  );
}

export default App;
