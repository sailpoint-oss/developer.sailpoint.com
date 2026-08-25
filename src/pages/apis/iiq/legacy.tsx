import React, { useState } from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './legacy.module.css';

interface ApiVersion {
  key: string;
  label: string;
  description: string;
}

// Add older IdentityIQ specs here (e.g. 8.5) as they are archived. The current
// spec (9.0) is served as interactive docs at /docs/api/iiq, so it is not listed
// here. Each key must have matching Redoc bundles in static/redoc/
// (sailpoint-api-iiq-<key>-light.html and -dark.html).
const API_VERSIONS: ApiVersion[] = [
  {
    key: '8.3',
    label: '8.3',
    description: 'IdentityIQ 8.3 SCIM REST API.',
  },
];

function specUrl(key: string, colorMode: string): string {
  const theme = colorMode === 'dark' ? 'dark' : 'light';
  return `/redoc/sailpoint-api-iiq-${key}-${theme}.html`;
}

function LegacyViewer({ activeKey }: { activeKey: string }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.iframeWrapper}>
      {API_VERSIONS.map((version) => (
        <iframe
          key={`${version.key}-${colorMode}`}
          src={specUrl(version.key, colorMode)}
          title={`SailPoint IdentityIQ API — ${version.label}`}
          className={`${styles.frame} ${activeKey === version.key ? styles.frameVisible : styles.frameHidden}`}
          sandbox="allow-scripts allow-same-origin"
        />
      ))}
    </div>
  );
}

const LegacyIiqApiDocs: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(API_VERSIONS[0].key);

  return (
    <Layout
      title="Legacy IdentityIQ API Specifications"
      description="Legacy versioned API specifications for SailPoint IdentityIQ, rendered via Redocly."
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Legacy IdentityIQ API Specifications</h1>
          <p className={styles.subtitle}>
            These are the legacy versioned API collections for SailPoint IdentityIQ.
            For the latest API documentation, visit the{' '}
            <a href="/docs/api/iiq">IdentityIQ API Specifications</a> page.
          </p>
        </div>

        <div className={styles.tabBar}>
          {API_VERSIONS.map((version) => (
            <button
              key={version.key}
              className={`${styles.tab} ${activeKey === version.key ? styles.tabActive : ''}`}
              onClick={() => setActiveKey(version.key)}
              title={version.description}
            >
              {version.label}
            </button>
          ))}
        </div>

        <BrowserOnly fallback={<div className={styles.loading}>Loading API documentation…</div>}>
          {() => <LegacyViewer activeKey={activeKey} />}
        </BrowserOnly>
      </div>
    </Layout>
  );
};

export default LegacyIiqApiDocs;
