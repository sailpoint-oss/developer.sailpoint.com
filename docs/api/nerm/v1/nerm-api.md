# nerm-api

import ApiLogo from "@theme/ApiLogo";
import Heading from "@theme/Heading";
import SchemaTabs from "@theme/SchemaTabs";
import TabItem from "@theme/TabItem";
import Export from "@theme/ApiExplorer/Export";

<span
  className={"theme-doc-version-badge badge badge--secondary"}
  children={"Version: 1.0.0"}
>
</span>

<Export
  url={"https://github.com/sailpoint-oss/api-specs/releases/latest/download/deref-sailpoint-api.nerm.yaml"}
>
  
</Export>

<Heading
  as={"h1"}
  className={"openapi__heading"}
  children={"NERM API"}
>
</Heading>



The NERM API accesss and modifies resources in your environment.

<div
  style={{"marginBottom":"2rem"}}
>
  <Heading
    id={"authentication"}
    as={"h2"}
    className={"openapi-tabs__heading"}
    children={"Authentication"}
  >
  </Heading><SchemaTabs
    className={"openapi-tabs__security-schemes"}
  >
    <TabItem
      label={"OAuth 2.0: userAuth"}
      value={"userAuth"}
    >
      
      
      OAuth2 Bearer token (JWT) generated using either a [personal access token (PAT)](https://developer.sailpoint.com/docs/api/authentication/#generate-a-personal-access-token) or through the [authorization code flow](https://developer.sailpoint.com/docs/api/authentication/#request-access-token-with-authorization-code-grant-flow).
      
      Personal access tokens are associated with a user in Identity Security Cloud and relies on the user's [user level](https://documentation.sailpoint.com/saas/help/common/users/index.html) (ex. Admin, Helpdesk, etc.) to determine a base level of access.
      
      See [Identity Security Cloud REST API Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information.
      
      
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                Security Scheme Type:
              </th><td>
                oauth2
              </td>
            </tr><tr>
              <th>
                OAuth Flow (clientCredentials):
              </th><td>
                <div>
                  Token URL: https://example-tenant.api.identitynow.com/oauth/token
                </div><span>
                  Scopes:
                </span><ul>
                  <li>
                    sp:scopes:default: default scope
                  </li><li>
                    sp:scopes:all: access to all scopes
                  </li>
                </ul>
              </td>
            </tr><tr>
              <th>
                OAuth Flow (authorizationCode):
              </th><td>
                <div>
                  Token URL: https://example-tenant.api.identitynow.com/oauth/token
                </div><div>
                  Authorization URL: https://example-tenant.login.sailpoint.com/oauth/authorize
                </div><span>
                  Scopes:
                </span><ul>
                  <li>
                    sp:scopes:default: default scope
                  </li><li>
                    sp:scopes:all: access to all scopes
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </TabItem>
  </SchemaTabs>
</div><div
  style={{"marginBottom":"var(--ifm-paragraph-margin-bottom)"}}
>
  <h3
    style={{"marginBottom":"0.25rem"}}
  >
    License
  </h3>
</div>