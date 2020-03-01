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

import WorkerSuggestionCard from "./suggestions/work/WorkerSuggestionCard";

import { homeSearchInputPlaceholder } from "../../constants/placeholders";
import { SEARCH_MODE_WORK } from "../../constants/search/searchModes";
import {
  SUGGESTION_TYPE_WORKER,
  SUGGESTION_TYPE_HIRER
} from "../../constants/search/suggestionTypes";
import { useSearchSuggestions } from "../../hooks/useSearchSuggestions";

import css from "./HomeSearch.css";

const HomeSearch = ({ searchMode = SEARCH_MODE_WORK }) => {
  const [searchKeyword, setSearchKeyword] = useState("zidar");
  const [suggestions] = useSearchSuggestions(searchKeyword, searchMode);

  const displaySuggestions = () => (suggestions.length > 0 ? "block" : "none");
  const getSuggestionCard = suggestion => {
    switch (suggestion.type) {
      case SUGGESTION_TYPE_WORKER:
        return (
          <ListGroup.Item key={Math.random()} action>
            <WorkerSuggestionCard worker={suggestion.model} />
          </ListGroup.Item>
        );
      case SUGGESTION_TYPE_HIRER:
        return (
          <ListGroup.Item key={Math.random()} action>
            <WorkerSuggestionCard worker={suggestion.model} />
          </ListGroup.Item>
        );
    }
  };

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
            {suggestions.map(s => getSuggestionCard(s))}
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default connect(state => state)(HomeSearch);
