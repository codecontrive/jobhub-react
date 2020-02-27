import { Container, Tab, Row, Col, ListGroup } from "react-bootstrap";
import { Layout } from "../reusable/layout/Layout";
import { HomeSearch } from "../reusable/search/HomeSearch";

import css from "./index.css";

const Home = () => (
  <Layout>
    <Container className={css.homeContainer}>
      <Row className={css.homeBoxFullFlexWrapper}>
        <Col lg={12} className={css.homeLogoWrapper}>
          <h1>JobHub</h1>
          <p>Minimalist Jobs Platform. We love simplicity.</p>
        </Col>
        <Col lg={12} className={css.homeSearchSwitcherWrapper}>
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row className={css.homeSearchSwitcherRow}>
              <Col lg={12}>
                <ListGroup horizontal>
                  <ListGroup.Item action href="#link1">
                    Work
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    Hire
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
      <HomeSearch />
      <Row className={css.homeBoxFullFlexWrapper}>
        <Col lg={12}></Col>
      </Row>
    </Container>
  </Layout>
);

export default Home;
