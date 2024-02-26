import React from 'react';
import {Card, CardContent} from '@site/src/components/ui/card';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Atropos from 'atropos/react';
import 'atropos/css';

export default function HomepageHeader() {
  return (
    <div className="grid place-content-center py-40">
      <Atropos
        alwaysActive
        highlight={false}
        className="my-atropos overflow-visible">
        <Card className="max-w-[800px] overflow-visible z-0">
          <CardContent className="z-20 text-3xl flex flex-col gap-4 overflow-visible font-semibold text-center p-6">
            <p data-atropos-offset="5" className="py-2 my-0 ">
              Welcome to the
            </p>

            <img
              data-atropos-offset="15"
              className="z-50"
              src={useBaseUrl('/img/SailPoint-Developer-Community-Lockup.png')}
            />

            <p data-atropos-offset="5" className="py-2 my-0">
              Where code meets community
            </p>
          </CardContent>
        </Card>
      </Atropos>
    </div>
  );
}
