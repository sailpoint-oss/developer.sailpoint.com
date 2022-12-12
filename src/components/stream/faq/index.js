import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { addDarkToFileName } from "../../../util/util";
import ThemedImage from '@theme/ThemedImage';
import { getFAQ } from "../../../services/StreamService";
export default function FAQ({title, image, description}) {

  const [faqs, setFaqs] = React.useState([]);

  const getFaqs = async () => {
    const data = await getFAQ()
    setFaqs(data);
  };
  React.useEffect(() => {
    getFaqs();
  }, []);


  let itemsList = faqs.map((item, index)=> {
    return (
    <div>
      <li className={styles.faqQuestion} key={index}>{item?.question}</li>
      <div className={styles.faqAnswer} key={index}>{item?.answer}</div>
    </div>
    )
  })

  return (
    <div className={styles.faq}>
        <div className={styles.gettingStartedText}>
          <ThemedImage className={styles.gettingStartedCardIcon} sources={{light: useBaseUrl(image), dark: useBaseUrl(addDarkToFileName(image)),}}></ThemedImage>
          <div className={styles.gettingStartedOne}>{title}</div>
          <div className={styles.gettingStartedThree} dangerouslySetInnerHTML={{ __html: description }} ></div>
        </div>

        <ul  className={styles.faqContent}>
          {itemsList}
        </ul>
    </div>
  );
}
