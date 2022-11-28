import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
export default function SpeakerCard({ link, name, image }) {
  return (
    <Link to={link}>
      <div className={styles.card}>
        <div className={styles.cardFaceContainer}>
          <img className={styles.cardFace} src={useBaseUrl(image)}></img>
        </div>
        <div className={styles.cardText}>{name}</div>
      </div>
    </Link>
  );
}
