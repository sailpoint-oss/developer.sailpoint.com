import React from "react";
import ConferenceTitle from '../Title'
import ThemeCard from '../ThemeCard'
import styles from "./styles.module.css";
export default function ConferenceTheme() {
  return (
    <div className={styles.main}>
      <ConferenceTitle           
        description={"What can you expect at the upcoming conference?"}
        title={"What to Expect"}
        image={"/conf/calendar-star-thin.svg"}>
      </ConferenceTitle>
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <ThemeCard title={"A deep dive into the extensibility offerings of SailPoint platforms"} image={"/conf/deep-dive.png"}></ThemeCard>
          <ThemeCard title={"Hear from identity experts developing real world solutions"} image={"/conf/expert-advice.png"}></ThemeCard>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <ThemeCard title={"Shipyard is a hands-on conference, you will build something in almost every session"} image={"/conf/workshops.png"}></ThemeCard>
          <ThemeCard title={"Shipyard will be all-virtual, open to everyone, and <b>at no cost<b>"} image={"/conf/virtual.png"}></ThemeCard>
        </div>
      </div>
    </div>

);
}
