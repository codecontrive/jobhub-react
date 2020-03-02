import React, { useState } from "react";
import { connect } from "react-redux";

import { Container, Tab, Row, Col, ListGroup, Image } from "react-bootstrap";
import { Layout } from "../reusable/layout/Layout";
import HomeSearch from "../reusable/search/HomeSearch";

import css from "./index.css";
import logo from "../assets/Images/logo_transparent.png";

import {
  SEARCH_MODE_WORK,
  SEARCH_MODE_HIRE
} from "../constants/search/searchModes";

const Home = () => {
  const [searchMode, setSearchMode] = useState(SEARCH_MODE_HIRE);

  return (
    <Layout>
      <Container className={css.homeContainer}>
        <Row className={css.homeBoxFullFlexWrapper}>
          <Col lg={12} className={css.homeLogoWrapper}>
            <Image className={css.logo} src={logo} fluid alt="JobHub" />
          </Col>
          <Col lg={12} className={css.homeSearchSwitcherWrapper}>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1">
              <Row className={css.homeSearchSwitcherRow}>
                <Col lg={12}>
                  <ListGroup horizontal>
                    <ListGroup.Item
                      active={searchMode === SEARCH_MODE_WORK}
                      onClick={() => setSearchMode(SEARCH_MODE_WORK)}>
                      Work
                    </ListGroup.Item>
                    <ListGroup.Item
                      active={searchMode === SEARCH_MODE_HIRE}
                      onClick={() => setSearchMode(SEARCH_MODE_HIRE)}>
                      Hire
                    </ListGroup.Item>
                    const listgrp = [{ title: "Work",active: false,onClick: () => {}},{title: "Hire", active: true,onClick: () => {}}
                    ,{title: "Work", active:true,onclick: ()=> {}}, {title: "Hire", active: false, onclick: () => {}}];

                    for (const i=0, i < listgrp.length; i++) {
                      const listz = listgrp(i);
                      switch (lists) {
                        case 0:

                          break;
                        case 1:

                          break;
                        case 2:

                          break;
                        case 3:

                          break;
                      }


                    }

                  </ListGroup>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
        <HomeSearch searchMode={searchMode} />
        <Row className={css.homeBoxFullFlexWrapper}>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default connect(state => state)(Home);


