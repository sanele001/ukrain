import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "./components/nav";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="myapp">
      <Nav />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
