import { Container } from "react-bootstrap";
import { Layout } from "../reusable/layout/Layout";
import { HomeSearch } from "../reusable/search/HomeSearch";

import css from "./index.css";

const Home = () => (
  <Layout>
    <Container
      className={`${css.homeContainer} d-flex flex-column justify-content-center align-items-center`}
    >
      <h2>JobHub Romania</h2>
      <HomeSearch />
    </Container>
  </Layout>
);

export default Home;
