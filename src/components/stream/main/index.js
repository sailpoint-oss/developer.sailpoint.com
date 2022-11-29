import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import WidgetBot from '@widgetbot/react-embed'
import Room from "../room";
export default function Main() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>Let's talk platform</div>
          <div className={styles.timeText}>3:15 - 4:15 PM</div>
          <div className={styles.speakerText}>JANE DOE, ENGINEERING MANAGER</div>
        </div>

        <div className={styles.headerContent}>
          <div className={styles.buttonsContainer}>
            <div className={styles.buttonsContent}>
              <div className={styles.button}>Agenda</div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button}>Speakers</div>
            </div>
            <div className={styles.buttonsContent}>
              <div className={styles.button}>FAQ</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.stageButtonsContainer}>
          <div className={styles.stageButtonsContent}>
              <div className={styles.stageButton}>Main Stage</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton}>IdentityNow</div>
          </div>
          <div className={styles.stageButtonsContent}>
            <div className={styles.stageButton}>IdentityIQ</div>
          </div>
        </div>

      </div>
      <Room></Room>
    </div>
  );
}
