import React from "react";
import { Amplify } from "aws-amplify";
import awsmobile from "../src/aws-exports";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";
import "../styles/globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

Amplify.configure({ ...awsmobile, ssr: true });

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <AmplifyAuthenticator>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AmplifyAuthenticator>
  );
}

export default MyApp;
