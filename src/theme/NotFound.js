import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';
import {PageMetadata} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: 'theme.NotFound.title',
          message: 'Page Not Found',
        })}
      />
      <Layout>
        <main style={{textAlign:"center"}} className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <h1 className="hero__title">
                Page Not Found
              </h1>
                <img height="60%" src="img/not-found/codey.png"/>
              <p>
                If you think this document should exist, <a href="https://developer.sailpoint.com/discuss/docs-request" target="_blank" rel="noopener noreferrer">let us know</a>.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
