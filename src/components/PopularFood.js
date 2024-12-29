


import React, { useState } from "react";
import GoaVeg1 from "../assets/GoaVeg1.jpg";
import GoaVeg2 from "../assets/GoaVeg2.jpg";
import GoaVeg3 from "../assets/GoaVeg3.jpg";
import GoaVeg5 from "../assets/GoaVeg5.jpg";

const PopularFood = () => {
  const [foodItems] = useState([
    { id: 1, name: "Goan Fish Curry", image: GoaVeg1, rating: 4.5, description: "A spicy and tangy fish curry with traditional Goan flavors." },
    { id: 2, name: "Prawn Balchão", image: GoaVeg2, rating: 4.7, description: "Pickled prawn curry with a tangy and spicy kick." },
    { id: 3, name: "Bebinca", image: GoaVeg3, rating: 4.8, description: "A traditional Goan dessert made from coconut milk and eggs." },
    { id: 4, name: "Goan Sannas", image: GoaVeg5, rating: 4.6, description: "Soft and fluffy Goan bread, often served with curries." },
  ]);

  const [selectedFood, setSelectedFood] = useState(null);
  const [page, setPage] = useState(1);

  const handlePre = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleNex = () => {
    if (foodItems.slice(page * 3, (page + 1) * 3).length > 0) {
      setPage(page + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleFoodClick = (food) => {
    setSelectedFood(food);
  };

  const renderFoodList = () => {
    return (
      <div className="row mb-3 mt-3">
        {foodItems
          .slice((page - 1) * 3, page * 3)
          .map((food) => (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              onClick={() => handleFoodClick(food)}
              key={food.id}
            >
              <img src={food.image} className="img-fluid" alt={food.name} />
              <h4>{food.name}</h4>
              <p>Rating: <strong>{food.rating}</strong></p>
            </div>
          ))}
      </div>
    );
  };

  const renderFoodDetail = () => {
    if (!selectedFood) return null;

    return (
      <div className="food-detail">
        <h2>{selectedFood.name}</h2>
        <img src={selectedFood.image} className="img-fluid" alt={selectedFood.name} />
        <p><strong>Rating:</strong> {selectedFood.rating}</p>
        <p><strong>Description:</strong> {selectedFood.description}</p>
        <button onClick={() => setSelectedFood(null)} className="btn btn-secondary">Back to List</button>
      </div>
    );
  };

  return (
    <div className="container">
      <h3>Popular Food Items</h3>
      {selectedFood ? renderFoodDetail() : renderFoodList()}
      <div className="row mb-3 mt-3">
        {foodItems.length > 0 && (
          <div className="pagination">
            <button className="btn btn-danger" onClick={handlePre}>Previous</button>
            <button className="btn btn-danger">{page}</button>
            <button className="btn btn-danger" onClick={handleNex}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopularFood;
