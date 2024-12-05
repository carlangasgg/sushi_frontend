import React, { useState, useEffect } from "react";
import { fetchRedSystems } from "../services/apiService";

const RedSystemsList = () => {
  const [items, setRedSystems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRedSystems = async () => {
      try {
        const data = await fetchRedSystems();
        setRedSystems(data);
      } catch (err) {
        setError("Failed to fetch items");
      }
    };

    loadRedSystems();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Sistemas de red disponibles</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RedSystemsList;
