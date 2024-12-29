


import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import FoodMenu from './components/FoodMenu';
import PopularFood from './components/PopularFood';
import Search from './components/Search'; // Import the Search component

const routing = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Parent component
    children: [
      {
        path: "food", // This route will render the FoodMenu component
        element: <FoodMenu />,
      },
      {
        path: "popular", // This route will render the PopularFood component
        element: <PopularFood />,
      },
    
       {path:"/food-detail/:id", element:<PopularFood  />} ,
      {
        path: "food-detail/:id", // Dynamic route with `id` parameter
        element: <FoodMenu />, // You can render the FoodMenu component here as well
      },
      {
        path: "search", // Search route to display the search results
        element: <Search />, // This will render the Search component
      },
    ],
  },
]);

export default routing;

