import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // Local state for search query
  const navigate = useNavigate();

  // Handle the search query for food or restaurant
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`); // Navigate to search results page with query
    }
  };

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {/* Add your brand name or logo here */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 menus">
              <li className="nav-item">
                <Link className="nav-link" to="/food">
                  Food Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popular">
                  Popular Food
                </Link>
              </li>
         
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Food or Restaurant"
                aria-label="Search"
                value={searchQuery} // Bind input value to local state
                onChange={(e) => setSearchQuery(e.target.value)} // Update local state on input change
              />
              <button className="btn btn-outline-success search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
