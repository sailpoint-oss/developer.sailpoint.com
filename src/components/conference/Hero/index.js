import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import { addDarkToFileName } from "../../../util/util";
import { Widget } from '@typeform/embed-react'
import { SliderButton } from '@typeform/embed-react'
import { PopupButton } from '@typeform/embed-react'
export default function ConferenceHero() {
  const background = '/conf/Shipyard-WaveBackground.png'
  const learnBuildDeploy = '/conf/LearnBuildDeploy-Light.png'
  const shipyardImage = '/conf/SailPoint-Shipyard-DeveloperConference-Logo.png'
  const sailpointImage = '/img/SailPoint-Logo-RGB-Color.png'

  function handleSubmit(e) {
    console.log(e)
  }

  return (
    <div className={styles.mainCard}>
      <div>
      <ThemedImage className={styles.background} sources={{light: useBaseUrl(background), dark: useBaseUrl(background)}}></ThemedImage>
      <ThemedImage className={styles.learnDeployText} sources={{light: useBaseUrl(learnBuildDeploy), dark: useBaseUrl(learnBuildDeploy)}}></ThemedImage>
      </div>

      <div className={styles.signUpSection}>
        <div className={styles.imageContainer}>
          <ThemedImage className={styles.sailpointImage} sources={{light: useBaseUrl(sailpointImage), dark: useBaseUrl(sailpointImage)}}></ThemedImage>
        </div>
        <div className={styles.imageContainer}>
        <ThemedImage className={styles.shipyardLogo} sources={{light: useBaseUrl(shipyardImage), dark: useBaseUrl(shipyardImage)}}></ThemedImage>
        </div>
        <div className={styles.welcomeContainer}>
          Welcome
        </div >
        <div className={styles.welcomeText}>
          Be the first to hear more about our innaugural conference for developers!
        </div>
        {/* <div className={styles.emailText}>
          Email Address
        </div>
        <input className={styles.emailInput} type="text" id="fname" name="fname" placeholder="user.name@email.com"></input> */}
        <SliderButton id="gVCODdMc" className={styles.button}>
            Join the Waitlist
        </SliderButton >
      </div>
    </div>
  );
}
