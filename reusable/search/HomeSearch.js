import React, { useState } from "react";
import { connect } from "react-redux";

import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  ListGroup
} from "react-bootstrap";

import { SEARCH_MODE_WORK } from "../../constants/search/searchModes";

import css from "./HomeSearch.css";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";
import { homeSearchInputPlaceholder } from "../../constants/placeholders";

const HomeSearch = ({ searchMode = SEARCH_MODE_WORK }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [suggestions] = useSearchSuggestions(searchKeyword, searchMode);

  const displaySuggestions = () => (suggestions.length > 0 ? "block" : "none");

  return (
    <>
      <InputGroup>
        <FormControl
          className={`${css.homeSearchFormControl}`}
          value={searchKeyword}
          onChange={e => setSearchKeyword(e.target.value)}
          placeholder={homeSearchInputPlaceholder(searchMode)}
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

export default connect(state => state)(HomeSearch);
