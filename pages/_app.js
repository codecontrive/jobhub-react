import React from "react";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import store from "../store/store";

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return pageProps;
};

export default withRedux(store)(MyApp);
