import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { addDarkToFileName } from "../../../util/util";

export default function ThemeCard({ title, name, image }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardFaceContainer}>
        <img className={styles.cardFace} src={useBaseUrl(image)}></img>
      </div>
      <div className={styles.cardText}>{name}</div>
      <div
        className={styles.titleText}
        dangerouslySetInnerHTML={{ __html: title }}
      ></div>
    </div>
  );
}
