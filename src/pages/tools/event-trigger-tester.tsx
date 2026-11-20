import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {DEFAULT_API_BASE_URL} from '../../components/event-trigger-tester/api';

/**
 * UI for the Event Triggers Demo API, a disposable webhook receiver for
 * testing ISC event triggers. The backend is deployed from the
 * `event-triggers-web-demo` repository.
 */
export default function EventTriggerTesterPage() {
  const {siteConfig} = useDocusaurusContext();
  const configured = siteConfig.customFields?.EVENT_TRIGGER_TESTER_API_ENDPOINT;
  const apiBaseUrl =
    typeof configured === 'string' && configured
      ? configured
      : DEFAULT_API_BASE_URL;

  return (
    <Layout
      title="Event Trigger Tester"
      description="Create a disposable webhook URL, point an ISC event trigger at it, and inspect and chart the events that arrive.">
      <main className="container margin-vert--lg">
        {/* The tool reads localStorage and the clipboard, so it renders in the browser only. */}
        <BrowserOnly fallback={<p>Loading…</p>}>
          {() => {
            const EventTriggerTester =
              require('../../components/event-trigger-tester/EventTriggerTester').default;
            return <EventTriggerTester apiBaseUrl={apiBaseUrl} />;
          }}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
