import React, { useState } from "react";

import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";

import css from "./HomeSearch.css";

export const HomeSearch = () => {
  const [results, setResults] = useState([]);

  const displaySuggestions = () => (results.length > 0 ? "block" : "none");

  // This function is going to be removed.
  const temporarySetResult = text =>
    setResults(text.length === 0 ? [] : text.split(" "));

  return (
    <>
      <InputGroup>
        <FormControl
          className={`${css.homeSearchFormControl}`}
          onChange={e => temporarySetResult(e.target.value)}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
        />

        <DropdownButton
          as={InputGroup.Append}
          title="Timisoara"
          id="input-group-dropdown-2">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>

      <Row
        className={css.homeSearchSuggestionsWrapper}
        style={{ display: displaySuggestions() }}>
        <Col lg={12}>
          <ListGroup className={css.homeSearchSuggestionsList}>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
