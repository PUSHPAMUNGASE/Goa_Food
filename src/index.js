import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import routing from "./routing"; // Import the router configuration

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={routing} /> {/* Corrected the property to 'router' */}
  </>
);
