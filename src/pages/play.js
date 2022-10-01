import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Playground, store } from "graphql-playground-react";

export default function Conference() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => {
        return ReactDOM.render(
          <Provider store={store}>
            <Playground endpoint="https://api.graph.cool/simple/v1/swapi" />
          </Provider>,
          document.body
        );
      }}
    </BrowserOnly>
  );
}
