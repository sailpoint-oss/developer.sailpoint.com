import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Main from "../components/stream/main";

export default function Stream() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Main></Main>
      </main>
    </Layout>
  );
}
