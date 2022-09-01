import React from "react";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardBox = ({ card }) => {
  return (
    <>
      <Col md={4}>
        <Card border="success" >
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.number}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardBox;
