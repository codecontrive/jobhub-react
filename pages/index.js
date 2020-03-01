import React, { useState } from "react";
import { connect } from "react-redux";

import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import { Layout } from "../reusable/layout/Layout";
import HomeSearch from "../reusable/search/HomeSearch";

import css from "./index.css";
import Image from "react-bootstrap/Image";
import logo from "../assets/logo_transparent.png";
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
