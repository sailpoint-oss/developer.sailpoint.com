import React from 'react';
import {Card, CardContent} from '@site/src/components/ui/card';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Atropos from 'atropos/react';
import 'atropos/css';

export default function HomepageHeader() {
  return (
    <div className="grid place-content-center relative bg-white">
      <div className="flex">
        <div className="mt-28">
          <div
            style={{zIndex: 1}}
            className="bg-background px-20 w-96 h-64 absolute"></div>
          <img
            id="codeyleft"
            className="px-20 w-96 h-64 z-0 absolute transition-all ease-in-out duration-700"
            src={useBaseUrl('/img/not-found/codey.png')}
          />
        </div>

        <div className="mt-28 ml-72">
          <div style={{zIndex: 1}}
            className="bg-background ml-28 px-20 w-96 h-64 absolute"></div>
          <img
            id="codeyright"
            className="ml-20 px-20 w-96 h-64 z-0 absolute transition-all ease-in-out duration-700"
            src={useBaseUrl('/img/not-found/codey.png')}
          />
        </div>
      </div>
      <Atropos
        onRotate={(x, y) => {
          console.log(x, y);
          // ||
          if (x > 4 && y > 9) {
            document.getElementById('codeyleft').classList.remove('invisible');
            document.getElementById('codeyleft').classList.add('visible');
            document
              .getElementById('codeyleft')
              .classList.add('-translate-y-20');
          } else {
            document.getElementById('codeyleft').classList.remove('visible');
            document.getElementById('codeyleft').classList.add('invisible');
            document
              .getElementById('codeyleft')
              .classList.remove('-translate-y-20');
          }

          if (x > 6 && y < -9) {
            document.getElementById('codeyright').classList.remove('invisible');
            document.getElementById('codeyright').classList.add('visible');
            document
              .getElementById('codeyright')
              .classList.add('-translate-y-20');
          } else {
            document.getElementById('codeyright').classList.remove('visible');
            document.getElementById('codeyright').classList.add('invisible');
            document
              .getElementById('codeyright')
              .classList.remove('-translate-y-20');
          }
        }}
        alwaysActive
        shadow={false}
        highlight={false}
        className="my-atropos text-3xl flex flex-col gap-4 font-semibold text-center p-6 py-20 z-50 -mt-28">
        <div>
          <div>
            <p
              data-atropos-offset="1"
              style={{zIndex: 10}}
              className="py-2 my-0">
              Welcome to the
            </p>

            <h1
              data-atropos-offset="5"
              className="inline-block bg-clip-text text-[transparent] bg-gradient-to-r from-[#0033A1] from-40% via-[#004FB5] via-65% to-[#0071CE] to-100% z-50 px-20 text-4xl">
              SailPoint Developer Community
            </h1>

            {/* <img
          data-atropos-offset="7"
          className="z-50 px-20"
          src={useBaseUrl('/img/SailPoint-Developer-Community-Lockup.png')}
        /> */}

            <p data-atropos-offset="1" className="py-2 my-0">
              Where code meets community
            </p>
          </div>
        </div>
      </Atropos>
    </div>
  );
}
