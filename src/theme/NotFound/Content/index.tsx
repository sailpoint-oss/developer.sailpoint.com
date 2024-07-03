import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';


export default function NotFoundContent({className}: Props): JSX.Element {
  return (
    <main className={clsx('container margin-vert--xl', className)} style={{textAlign: "center"}}>
      <div className="row">
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
                Our docs and API specifications have recently moved—checkout the
                navbar at the top of this page to find their new home. If you
                can't find the document you're looking for,{' '}
                <a
                  href="https://developer.sailpoint.com/discuss/docs-request"
                  target="_blank"
                  rel="noopener noreferrer">
                  let us know
                </a>
                .
              </p>
              <ThemedImage
                height="60%"
                sources={{
                  light: useBaseUrl('img/not-found/codey.png'),
                  dark: useBaseUrl('img/not-found/codey.png'),
                }}></ThemedImage>
        </div>
      </div>
    </main>
  );
}
