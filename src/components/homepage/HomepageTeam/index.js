import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import TeamCard from "../TeamCard";
export default function HomepageTeam() {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        <TeamCard
          link={
            "https://developer.sailpoint.com/discuss/u/colin_mckibben/summary"
          }
          name={"Colin McKibben"}
          title={"DEVELOPER ADVOCATE"}
          expertise={"API, WORKFLOWS, EVENT TRIGGERS"}
          image={"/homepage/colin-mckibben.png"}
        ></TeamCard>
        <TeamCard
          link={
            "https://developer.sailpoint.com/discuss/u/tyler_mairose/summary"
          }
          name={"Tyler Mairose"}
          title={"DEVELOPER ADVOCATE"}
          expertise={"RULES, TRANSFORMS"}
          image={"/homepage/tyler-mairose.png"}
        ></TeamCard>
        <TeamCard
          link={
            "https://developer.sailpoint.com/discuss/u/philip-ellis/summary"
          }
          name={"Philip Ellis"}
          title={"DEVELOPER ADVOCATE"}
          expertise={"DEVELOPER TOOLS, SAAS CONNECTIVITY"}
          image={"/homepage/phil-ellis.png"}
        ></TeamCard>
        <TeamCard
          link={"https://developer.sailpoint.com/discuss/u/jthaytko/summary"}
          name={"James Haytko"}
          title={"TECHNICAL WRITER"}
          expertise={"DEVELOPER DOCUMENTATION"}
          image={"/homepage/james-haytko.png"}
        ></TeamCard>
      </div>
    </div>
  );
}
