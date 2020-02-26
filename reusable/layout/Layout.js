import Head from "next/head";

export const Layout = ({ children }) => (
  <>
    <Head>
      <title>JobHub Romania</title>
    </Head>
    {children}
  </>
);
