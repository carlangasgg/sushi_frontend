import React, { useState, useEffect } from "react";
import { fetchPrinters } from "../services/apiService";
import { ListGroup, Container } from "react-bootstrap";

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
    <Container className="my-4">
      <h1 className="mb-3">Impresoras disponibles</h1>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <span>{item.name}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default PrintersList;
