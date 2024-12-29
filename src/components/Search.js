import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css"; // Optional: Add your custom styles
import GoaVeg1 from "../assets/GoaVeg1.jpg";
import GoaVeg2 from "../assets/GoaVeg2.jpg";
import GoaVeg3 from "../assets/GoaVeg3.jpg";
import GoaVeg5 from "../assets/GoaVeg5.jpg";
import GoaVeg6 from "../assets/GoaVeg6.jpg";
import GoaVeg7 from "../assets/GoaVeg7.jpg";
import GoaNonVeg1 from "../assets/GoaNonVeg1.jpg";
import GoaNonVeg2 from "../assets/GoaNonVeg2.jpg";
import GoaNonVeg3 from "../assets/GoaNonVeg3.jpg";
import GoaNonVeg4 from "../assets/GoaNonVeg4.jpg";
const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query"); // Get search query from URL
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [notFound, setNotFound] = useState(false);

  const foodItems = [
    { id: 1, name: "Goan Fish Curry", image: GoaVeg1, rating: 4.5 },
    { id: 2, name: "Prawn Balchão", image: GoaVeg2, rating: 4.7 },
    { id: 3, name: "Bebinca", image: GoaVeg3, rating: 4.8 },
    { id: 4, name: "Goan Sannas", image: GoaVeg5, rating: 4.6 },
    // Add more items as needed
  ];

  // Filter foods based on the search query
  useEffect(() => {
    if (searchQuery) {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filtered = foodItems.filter((food) =>
        food.name.toLowerCase().includes(lowerCaseQuery)
      );
      
      if (filtered.length > 0) {
        setFilteredFoods(filtered);
        setNotFound(false);
      } else {
        setFilteredFoods([]);
        setNotFound(true);
      }
    }
  }, [searchQuery]);

  return (
    <div className="container">
      <h3>Search Results for "{searchQuery}"</h3>
      <div className="row mb-3 mt-3">
        {notFound ? (
          <div className="col-12">
            <h4>No results found for "{searchQuery}"</h4>
          </div>
        ) : (
          filteredFoods.map((food) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={food.id}>
              <img
                src={food.image}
                className="img-fluid"
                alt={food.name}
              />
              <h4>{food.name}</h4>
              <p>
                Rating: <strong>{food.rating}</strong>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Search;
