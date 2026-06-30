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

const API_VERSIONS: ApiVersion[] = [
  {
    key: 'beta',
    label: 'Beta',
    description: 'Beta API endpoints — features in active development, subject to change.',
  },
  {
    key: 'v3',
    label: 'V3',
    description: 'V3 API — stable, versioned ISC API collection.',
  },
  {
    key: 'v2024',
    label: 'V2024',
    description: '2024 release of the ISC API collection.',
  },
  {
    key: 'v2025',
    label: 'V2025',
    description: '2025 release of the ISC API collection.',
  },
  {
    key: 'v2026',
    label: 'V2026',
    description: '2026 release of the ISC API collection.',
  },
];

function specUrl(key: string, colorMode: string): string {
  const theme = colorMode === 'dark' ? 'dark' : 'light';
  return `/redoc/sailpoint-api-${key}-${theme}.html`;
}

function LegacyViewer({ activeKey }: { activeKey: string }) {
  const { colorMode } = useColorMode();

  return (
    <div className={styles.iframeWrapper}>
      {API_VERSIONS.map((version) => (
        <iframe
          key={`${version.key}-${colorMode}`}
          src={specUrl(version.key, colorMode)}
          title={`SailPoint ISC API — ${version.label}`}
          className={`${styles.frame} ${activeKey === version.key ? styles.frameVisible : styles.frameHidden}`}
          sandbox="allow-scripts allow-same-origin"
        />
      ))}
    </div>
  );
}

const LegacyApiDocs: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>(API_VERSIONS[0].key);

  return (
    <Layout
      title="Legacy API Specifications"
      description="Legacy versioned API specifications for SailPoint Identity Security Cloud, rendered via Redocly."
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Legacy API Specifications</h1>
          <p className={styles.subtitle}>
            These are the legacy versioned API collections for SailPoint Identity Security Cloud.
            For the latest API documentation, visit the{' '}
            <a href="/docs/api">API Specifications</a> page.
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

export default LegacyApiDocs;
