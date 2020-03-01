import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import css from "./WorkerSuggestionCard.css";

const WorkerSuggestionCard = ({ worker }) => {
  return (
    <Row className={css.suggestionCardWrapper}>
      <div className={css.suggestionCardImageContainer}>
        <Col lg={12}>
          <Image src={worker.profilePicture} />
        </Col>
      </div>
      <div className={css.suggestionCardDetailContainer}>
        <Col lg={12}>
          <h5>
            {worker.firstName} {worker.lastName}
          </h5>
        </Col>
        <Col lg={12}>
          <p className={css.suggestionCardOccupation}>{worker.profession}</p>
        </Col>
      </div>
    </Row>
  );
};

export default WorkerSuggestionCard;
