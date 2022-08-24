import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import HomepageCard from "../HomepageCard";
import { getTopPosts } from "../../services/DiscourseService";
export default function HomepageDiscuss() {

  getTopPosts().then(response => {
    console.log(response)
  })

  return (
    <div className={styles.center}>
      <div className={styles.gridContainer}>

      </div> 
    </div>
  );
}
