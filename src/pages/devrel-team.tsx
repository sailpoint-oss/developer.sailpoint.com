import Layout from '@theme/Layout';
import HomepageBasics from '@site/src/components/homepage/HomepageBasics';
import HomepageTeam from '@site/src/components/homepage/HomepageTeam';

export default function DevRelTeam(): JSX.Element {
  return (
    <Layout
      title="Developer Relations team"
      description="Meet the SailPoint Developer Relations team and learn how to contact us.">
      <main>
        <HomepageBasics
          link="https://developer.sailpoint.com/discuss/new-message?groupname=developer_relations"
          description="The Developer Relations team creates resources, tools, and programs that improve the SailPoint developer experience. Reach out to us through the developer forum if you need help finding the right resource."
          title="Developer Relations"
          image="team"
          buttonText="Contact Developer Relations"
        />
        <HomepageTeam />
      </main>
    </Layout>
  );
}
