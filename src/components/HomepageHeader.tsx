import React from 'react';
import {Card, CardContent} from '@site/src/components/ui/card';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Atropos from 'atropos/react';
import 'atropos/css';

export default function HomepageHeader() {
  return (
    <div className="grid place-content-center relative bg-gradient-to-r dark:from-[#0071CE]  dark:via-[#004FB5] via-65% dark:to-[#0033A1] from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100%">
      <Atropos
        alwaysActive
        shadow={false}
        highlight={false}
        className="my-atropos text-3xl flex flex-col gap-4 font-semibold text-center p-6 pt-36 pb-20 z-50 -mt-28">
        <div>
          <div>
            <p
              data-atropos-offset="1"
              style={{zIndex: 10, color: 'white'}}
              className="py-2 my-0">
              Welcome to the
            </p>

            <h1
              data-atropos-offset="5"
              style={{color: 'white'}}
              className="inline-block bg-clip-text text-[transparent] z-50 px-20 text-4xl">
              SailPoint Developer Community
            </h1>

            {/* <img
          data-atropos-offset="7"
          className="z-50 px-20"
          src={useBaseUrl('/img/SailPoint-Developer-Community-Lockup.png')}
        /> */}

            <p data-atropos-offset="1" style={{color: 'white'}} className="py-2 my-0">
              Where code meets community
            </p>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
