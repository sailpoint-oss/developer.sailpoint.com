import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { addDarkToFileName } from "../../../util/util";
import ThemedImage from "@theme/ThemedImage";
import { getSpeaker } from "../../../services/StreamService";
export default function Speakers({ title, image, description }) {
  const [speakers, setSpeakers] = React.useState([]);

  const getSpeakers = async () => {
    const data = await getSpeaker();
    setSpeakers(data);
  };
  React.useEffect(() => {
    getSpeakers();
  }, []);

  let itemsList = speakers.map((item, index) => {
    return (
      <div>
        <li className="text-xl font-bold" key={index}>
          {item?.name}
        </li>
        <div className={styles.speakerTitle} key={index}>
          {item?.title}
        </div>
      </div>
    );
  });

  return (
    <div className="">
      <div className={styles.gettingStartedText}>
        <ThemedImage
          className={styles.gettingStartedCardIcon}
          sources={{
            light: useBaseUrl(image),
            dark: useBaseUrl(addDarkToFileName(image)),
          }}
        ></ThemedImage>
        <div className={styles.gettingStartedOne}>{title}</div>
        <div
          className={styles.gettingStartedThree}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </div>

      <ul className="p-8">{itemsList}</ul>
    </div>
  );
}
