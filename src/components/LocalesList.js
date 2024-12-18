import React, { useState, useEffect } from "react";
import { fetchLocales } from "../services/apiService";
import { ListGroup, Alert, Container } from "react-bootstrap";

const LocalesList = () => {
  const [items, setLocales] = useState([]);
  const [error, setError] = useState(null);

  const loadLocales = async () => {
    try {
      const data = await fetchLocales();
      setLocales(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  useEffect(() => {
    loadLocales();

    const intervalId = setInterval(() => {
      loadLocales();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="my-4">
      <h1 className="mb-3">Locales disponibles</h1>
      <ListGroup>
        {items.map((item) => (
          <ListGroup.Item key={item.id} className="d-flex justify-content-between align-items-center">
            <span>{item.name}</span>
            <span>{item.status}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default LocalesList;
