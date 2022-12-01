import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { addDarkToFileName } from "../../../util/util";
import ThemedImage from '@theme/ThemedImage';
export default function FAQ({title, image, description}) {
  return (
    <div className={styles.faq}>
        <div className={styles.gettingStartedText}>
          <ThemedImage className={styles.gettingStartedCardIcon} sources={{light: useBaseUrl(image), dark: useBaseUrl(addDarkToFileName(image)),}}></ThemedImage>
          <div className={styles.gettingStartedOne}>{title}</div>
          <div className={styles.gettingStartedThree} dangerouslySetInnerHTML={{ __html: description }} ></div>
        </div>
    </div>
  );
}
