import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import Header from '../../Components/Header/Header';
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
    <Header/> 
    <div className="container p-5">
    <Card >
        <Card.Header className="container p-3">
        <Card.Title>Counter</Card.Title>

        </Card.Header>
      <Card.Body className="container p-5">
        <Card.Text>Count: {count}</Card.Text>
        
      </Card.Body>
      <Card.Footer className="container p-3">
        <Button variant="primary" onClick={increment}>Increment</Button>{' '}
        <Button variant="danger" onClick={decrement}>Decrement</Button>
      </Card.Footer>
    </Card>
    </div>
    </>
  );
};

export default Counter;