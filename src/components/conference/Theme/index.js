import React from "react";
import ConferenceTitle from '../Title'
import ThemeCard from '../ThemeCard'
import styles from "./styles.module.css";
export default function ConferenceTheme() {
  return (
    <div>
      <ConferenceTitle           
        description={"What can you expect at the upcoming conference?"}
        title={"What to Expect"}
        image={"/conf/calendar-star.png"}>
      </ConferenceTitle>
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <ThemeCard name={"DEEP DIVE"} title={"A deep dive into the SailPoint platform"} image={"/conf/webdev.svg"}></ThemeCard>
          <ThemeCard name={"EXPERT ADVICE"}  title={"The world's leading identity management speakers"} image={"/conf/travel.svg"}></ThemeCard>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.gridContainer}>
          <ThemeCard name={"WORKSHOPS"}  title={"In-person classes and virtual tutorials"} image={"/conf/education.svg"}></ThemeCard>
          <ThemeCard name={"VIRTUAL"}  title={"Attend the conference from home and get full access"} image={"/conf/leisure.svg"}></ThemeCard>
        </div>
      </div>
    </div>

);
}
