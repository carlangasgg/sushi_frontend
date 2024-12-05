import React, { useState, useEffect } from "react";
import { fetchLocales } from "../services/apiService";

const LocalesList = () => {
  const [items, setLocales] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLocales = async () => {
      try {
        const data = await fetchLocales();
        setLocales(data);
      } catch (err) {
        setError("Failed to fetch items");
      }
    };

    loadLocales();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Locales disponibles</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LocalesList;
