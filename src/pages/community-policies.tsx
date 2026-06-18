import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageBasics from '@site/src/components/homepage/HomepageBasics';

export default function CommunityPolicies(): JSX.Element {
  return (
    <Layout
      title="Community policies"
      description="Policies and guidelines for participating in the SailPoint developer community.">
      <main>
        <HomepageBasics
          link="https://developer.sailpoint.com/discuss/c/community-feedback/8"
          description="Find policies and guidelines for participating in SailPoint developer spaces, including responsible AI usage and forum expectations."
          title="Community policies"
          image="discuss"
          buttonText="Ask a policy question"
        />
        <section className="container margin-bottom--xl">
          <div className="row">
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__body">
                  <h2>AI usage policy</h2>
                  <p>
                    Guidelines for responsible AI-assisted content in SailPoint
                    community spaces.
                  </p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary" to="/docs/ai-policy">
                    Read AI usage policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="col col--6 margin-bottom--lg">
              <div className="card">
                <div className="card__body">
                  <h2>Forum terms</h2>
                  <p>
                    Review the terms that apply when participating in the
                    SailPoint developer forum.
                  </p>
                </div>
                <div className="card__footer">
                  <Link
                    className="button button--secondary"
                    to="https://developer.sailpoint.com/discuss/tos">
                    Review forum terms
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
