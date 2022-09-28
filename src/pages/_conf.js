import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import Hero from "../components/conference/Hero";
import Waitlist from "../components/conference/Waitlist";
import Theme from "../components/conference/Theme";
import Speakers from "../components/conference/Speakers";
import Sponsors from "../components/conference/Sponsors";
import FAQ from "../components/conference/FAQ";

export default function Conference() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <main>
        <Waitlist></Waitlist>
        <Hero></Hero>
        <Theme></Theme>
        <Speakers></Speakers>
        <FAQ></FAQ>
        <Sponsors></Sponsors>
      </main>
    </Layout>
  );
}
