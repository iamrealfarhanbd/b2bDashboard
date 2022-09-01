import React from "react";
import "./Cards.css";
import { cardsData } from "../../Data/Data";

import CardBox from "../Card/CardBox";
import {  Container, Row } from "react-bootstrap";

const Cards = () => {
  return (
      <Container>
        <Row>
        {cardsData.map((card, id) =><CardBox card={card}/> )}
        </Row>
      </Container>
 
  );
};

export default Cards;
