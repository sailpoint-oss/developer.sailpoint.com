import React from 'react';
import {Card, CardContent} from '@site/src/components/ui/card';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Atropos from 'atropos/react';
import 'atropos/css';

export default function HomepageHeader() {
  return (
    <div className="grid place-content-center">
      <Atropos
        alwaysActive
        shadow={false}
        highlight={false}
        className="my-atropos overflow-visible text-3xl flex flex-col gap-4 font-semibold text-center p-6 py-60">
        <p data-atropos-offset="2" className="py-2 my-0 ">
          Welcome to the
        </p>

        <img
          data-atropos-offset="7"
          className="z-50 px-20"
          src={useBaseUrl('/img/SailPoint-Developer-Community-Lockup.png')}
        />

        <p data-atropos-offset="2" className="py-2 my-0">
          Where code meets community
        </p>
      </Atropos>
    </div>
  );
}
