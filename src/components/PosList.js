import React, { useState, useEffect } from "react";
import { fetchPos } from "../services/apiService";
import { ListGroup, Alert, Container } from "react-bootstrap";

const PosList = () => {
  const [items, setPos] = useState([]);
  const [error, setError] = useState(null);

  const loadPos = async () => {
    try {
      const data = await fetchPos();
      setPos(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  useEffect(() => {
    loadPos();

    const intervalId = setInterval(() => {
      loadPos();
    }, 15000);

    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="my-4">
      <h1 className="mb-3">PoS disponibles</h1>
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

export default PosList;
