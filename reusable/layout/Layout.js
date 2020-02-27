import Head from "next/head";
import { Container } from "react-bootstrap";

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>JobHub Romania</title>
      <link
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>
    </Head>
    <Container>{children}</Container>
  </>
);
