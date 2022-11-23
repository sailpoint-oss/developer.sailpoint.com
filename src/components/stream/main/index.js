import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
export default function Main() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div>Lets talk platform</div>
          <div>3:15 - 4:15 PM</div>
          <div>Jane Doe, Engineering Manager</div>
        </div>

        <div className={styles.headerContent}>
          <span>Agenda</span>
          <span>Speakers</span>
          <span>FAQ</span>
        </div>
      </div>
      <div className={styles.stageButtonsContainer}>
        <div className={styles.stageButtonsContent}>Main Stage</div>
        <div className={styles.stageButtonsContent}>IdentityNow</div>
        <div className={styles.stageButtonsContent}>IdentityIQ</div>
      </div>
      <div className={styles.stageContainer}>
        <div className={styles.stageContent}>Video Player</div>
        <div className={styles.stageContent}>Chat Window</div>
      </div>
    </div>
  );
}
