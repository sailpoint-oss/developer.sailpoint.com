import React from "react";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
import { addDarkToFileName } from "../../../util/util";
export default function ConferenceTitle({ image, title, description }) {
  return (
    <div className={styles.gettingStartedText}>
      <ThemedImage
        className={styles.gettingStartedCardIcon}
        sources={{ light: useBaseUrl(image), dark: useBaseUrl(image) }}
      ></ThemedImage>
      <div className={styles.gettingStartedOne}>{title}</div>
      <div
        className={styles.gettingStartedThree}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
    </div>
  );
}
