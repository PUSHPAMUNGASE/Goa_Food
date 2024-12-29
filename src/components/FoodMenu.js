import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
import "./Foodmenu.css";

const Foodmenu = () => {
  // Sample data for food items
  const menuData = {
    Veg: [
      {
        id: 1,
        name: "Paneer Tikka",
        price: "₹250",
        image: GoaVeg1,
        description: "Grilled paneer marinated in spices.",
      },
      {
        id: 2,
        name: "Veg Biryani",
        price: "₹200",
        image: GoaVeg2,
        description: "Aromatic rice with vegetables and spices.",
      },
    ],
    "Non-Veg": [
      {
        id: 3,
        name: "Chicken Curry",
        price: "₹350",
        image: GoaNonVeg1,
        description: "Spicy and flavorful chicken curry.",
      },
      {
        id: 7,
        name: "Chicken1 Curry",
        price: "₹350",
        image: GoaNonVeg3,
        description: "Spicy and flavorful chicken curry.",
      },
      {
        id: 8,
        name: "Chicken1 Curry",
        price: "₹350",
        image: GoaNonVeg3,
        description: "Spicy and flavorful chicken curry.",
      },
      {
        id: 9,
        name: "Chicken1 Curry",
        price: "₹350",
        image: GoaNonVeg3,
        description: "Spicy and flavorful chicken curry.",
      },
      {
        id: 4,
        name: "Fish Fry",
        price: "₹300",
        image: GoaNonVeg2,
        description: "Crispy fried fish with masala.",
      },
    ],
  };

  const { id } = useParams(); // Get the food item ID from the URL
  const [activeTab, setActiveTab] = useState("Veg");
  const [foodItem, setFoodItem] = useState(null);
  const navigate = useNavigate();

  // If we have an ID in the URL, find the specific food item
  useEffect(() => {
    if (id) {
      // Search for the food item by ID
      for (let category in menuData) {
        const item = menuData[category].find(item => item.id === parseInt(id));
        if (item) {
          setFoodItem(item);
          break;
        }
      }
    }
  }, [id]); // Trigger whenever the URL changes

  const handleKnowMore = (id) => {
    navigate(`/food-detail/${id}`);
  };

  if (id && foodItem) {
    // If on the food detail page
    return (
      <div className="food-detail-container">
        <h2>{foodItem.name}</h2>
        <img src={foodItem.image} alt={foodItem.name} />
        <p>{foodItem.description}</p>
        <p className="price">{foodItem.price}</p>
      </div>
    );
  }

  // If on the food menu page
  return (
    <div className="foodmenu-container">
      <div className="foodmenu-header">
        <h2>Our Food Menu</h2>
      </div>

      {/* Tabs for food categories */}
      <div className="foodmenu-tabs">
        {Object.keys(menuData).map((category) => (
          <button
            key={category}
            className={`foodmenu-tab ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Food items */}
      <div className="foodmenu-content">
        {menuData[activeTab].map((item) => (
          <div className="food-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p className="price">{item.price}</p>
            <button
              className="know-more-button"
              onClick={() => handleKnowMore(item.id)}
            >
              Know More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foodmenu;
