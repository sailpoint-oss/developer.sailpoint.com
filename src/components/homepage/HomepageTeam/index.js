import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import TeamCard from "../TeamCard";
export default function HomepageTeam() {
  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>
        <TeamCard link={"https://developer.sailpoint.com/discuss/new-message?username=colin_mckibben"} name={"Colin McKibben"} title={"DEVELOPER ADVOCATE"} expertise={"API, WORKFLOWS, EVENT TRIGGERS"} image={"/homepage/colin-mckibben.png"}></TeamCard>
        <TeamCard link={"https://developer.sailpoint.com/discuss/new-message?username=tyler_mairose"} name={"Tyler Mairose"} title={"DEVELOPER ADVOCATE"} expertise={"RULES, TRANSFORMS"} image={"/homepage/tyler-mairose.png"}></TeamCard>
        <TeamCard link={"https://developer.sailpoint.com/discuss/new-message?username=philip-ellis"} name={"Philip Ellis"} title={"DEVELOPER ADVOCATE"} expertise={"TOOLS, SAAS CONNECTIVITY"} image={"/homepage/phil-ellis.png"}></TeamCard>
        <TeamCard link={"https://developer.sailpoint.com/discuss/new-message?username=colin-mckibben"} name={"James Haytko"} title={"TECHNICAL WRITER"} expertise={"DEVELOPER DOCUMENTATION"} image={"/homepage/james-haytko.png"}></TeamCard>
      </div> 
    </div>
  );
}
