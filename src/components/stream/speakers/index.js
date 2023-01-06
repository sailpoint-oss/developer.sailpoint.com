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
    console.log(data);
    setSpeakers(data);
  };
  React.useEffect(() => {
    getSpeakers();
  }, []);

  let itemsList = speakers.map((item, index) => {
    return (
      <a target="_blank" rel="noreferrer" href={item?.link}>
        <div className="card_src-components-homepage-TeamCard-styles-module !h-fit p-4 flex flex-row gap-2">
          <img
            className="!h-16 !w-16 rounded-full"
            src={item?.image}
            key={`${index}-image`}
          ></img>
          <div>
            <p className="text-xl font-bold" key={`${index}-name`}>
              {item?.name}
            </p>
            <p className="" key={`${index}-title`}>
              {item?.title}
            </p>
          </div>
        </div>
      </a>
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

      <ul className="p-8 flex flex-col gap-1">{itemsList}</ul>
    </div>
  );
}
