import React, { useState, useEffect } from "react";
import { fetchRedSystems } from "../services/apiService";
import { ListGroup, Container } from "react-bootstrap";

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
    <Container className="my-4">
      <h1 className="mb-3">Sistemas de red disponibles</h1>
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

export default RedSystemsList;
