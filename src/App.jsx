import React, { useState } from "react";
import "./App.css";

function SearchBar() {
  const items = [
    { name: "Imli", id: 1 },
    { name: "Kamli", id: 2 },
    { name: "Pamli", id: 3 },
    { name: "Samli", id: 4 },
    { name: "Jejroqjiowqkdn", id: 5 },
    { name: "Adjkbajkbjwa", id: 6 },
    { name: "Srikanth", id: 7 },
    { name: "Bisai", id: 8 },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{
          border: "2px solid red",
          borderRadius: "10px",
          padding: "20px",
          marginBottom: "20px",
          fontSize: "20px",
          fontFamily: "serif",
          width: "100%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* Map through the filteredItems array to render the cards */}
        {filteredItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "20px",
              width: "200px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "24px" }}>{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
