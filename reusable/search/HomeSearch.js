import React from "react";

import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from "react-bootstrap";

import css from "./HomeSearch.css";

export const HomeSearch = () => {
  return (
    <InputGroup>
      <FormControl
        className={`${css.homeSearchFormControl}`}
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
  );
};
