import React, { useState, useEffect } from "react";
import { fetchLocales } from "../services/apiService";
import { ListGroup, Container } from "react-bootstrap";

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
    <Container className="my-4">
      <h1 className="mb-3">Locales disponibles</h1>
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

export default LocalesList;
