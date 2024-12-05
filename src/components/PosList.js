import React, { useState, useEffect } from "react";
import { fetchPos } from "../services/apiService";
import { ListGroup, Container } from "react-bootstrap";

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
    <Container className="my-4">
      <h1 className="mb-3">PoS disponibles</h1>
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

export default PosList;
