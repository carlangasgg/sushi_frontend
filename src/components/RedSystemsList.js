import React, { useState, useEffect } from "react";
import { fetchRedSystems } from "../services/apiService";
import { ListGroup, Alert, Container } from "react-bootstrap";

const RedSystemsList = () => {
  const [items, setRedSystems] = useState([]);
  const [error, setError] = useState(null);

  const loadRedSystems = async () => {
    try {
      const data = await fetchRedSystems();
      setRedSystems(data);
      setError(null); // Clear previous errors, if any
    } catch (err) {
      setError("Failed to fetch items");
    }
  };

  useEffect(() => {
    // Initial load
    loadRedSystems();

    // Set interval for auto-refresh
    const intervalId = setInterval(() => {
      loadRedSystems();
    }, 15000); // 15 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container className="my-4">
      <h1 className="mb-3">Sistemas de red disponibles</h1>
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

export default RedSystemsList;
