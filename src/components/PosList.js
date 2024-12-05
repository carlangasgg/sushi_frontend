import React, { useState, useEffect } from "react";
import { fetchPos } from "../services/apiService";

const PosList = () => {
  const [items, setPos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPos = async () => {
      try {
        const data = await fetchPos();
        setPos(data);
      } catch (err) {
        setError("Failed to fetch items");
      }
    };

    loadPos();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>PoS disponibles</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PosList;
