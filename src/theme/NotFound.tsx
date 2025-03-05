import React from 'react';
import Translate, { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import Layout from '@theme/Layout';

const NotFound: React.FC = () => {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main style={{ textAlign: 'center' }} className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">Page Not Found</h1>
              <p>
                Our docs and API specifications have recently moved—checkout the navbar at the top of this page to find
                their new home. If you can't find the document you're looking for,{' '}
                <a
                  href="https://developer.sailpoint.com/discuss/docs-request"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  let us know
                </a>
                .
              </p>
              <ThemedImage
                height="60%"
                sources={{
                  light: useBaseUrl('img/not-found/codey.png'),
                  dark: useBaseUrl('img/not-found/codey.png'),
                }}
              />
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default NotFound;
