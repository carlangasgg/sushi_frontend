import React, { useState, useEffect } from "react";
import { fetchPrinters } from "../services/apiService";

const PrintersList = () => {
  const [items, setPrinters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPrinters = async () => {
      try {
        const data = await fetchPrinters();
        setPrinters(data);
      } catch (err) {
        setError("Failed to fetch items");
      }
    };

    loadPrinters();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Impresoras disponibles</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrintersList;
