# Application Discovery List

| Input/Output |                  Data Type                   |
| :----------- | :------------------------------------------: |
| Input        |       StdApplicationDiscoveryListInput       |
| Output       |      StdApplicationDiscoveryListOutput       |

### Example StdApplicationDiscoveryListInput

```javascript
{
    "datasetId": "sso-okta:applications"
}
```

### Example StdApplicationDiscoveryListOutput

```javascript
{
    "id": "app-5678",
    "primaryAppName": "Slack",
    "description": "Team messaging",
    "status": "ACTIVE",
    "connectorCategory": "sso",
    "appUrl": "https://example.slack.com",
    "usersCount": "250",
    "riskLevel": "Low"
}
```

## Description

The application discovery list command returns the applications that the source knows about. For example, an identity provider (SSO) or a configuration management database (CMDB) tracks the apps that a company uses. SailPoint Identity Security shows the results in Application Discovery.

The tenant must have the Application Discovery license (`idn:application-discovery`).

To use this command, you must specify this value in the `commands` array: `std:application-discovery:list`

### Declare datasets in the connector spec

Add a `datasets` object to `connector-spec.json`. Each key is a dataset ID. Set `type` to `std:application_discovery`.

```json
{
    "commands": ["std:test-connection", "std:application-discovery:list"],
    "datasets": {
        "sso-okta:applications": {
            "type": "std:application_discovery",
            "name": "discovered-application",
            "identityAttribute": "id",
            "displayAttribute": "primaryAppName",
            "schema": {
                "type": "object",
                "properties": {
                    "id": { "type": "string" },
                    "primaryAppName": { "type": "string" },
                    "description": { "type": "string" }
                },
                "required": ["id", "primaryAppName", "description"]
            }
        }
    }
}
```

### When SailPoint Identity Security calls the command

An application discovery starts in one of these ways:

- An admin calls the [start application discovery API](/docs/api/start-application-discovery-v-1) with the dataset IDs. On-demand runs have a daily limit for each source.
- A source schedule of type `APPLICATION_DISCOVERY` starts it. The schedule has a cron expression and the dataset IDs:

```json
{
    "type": "APPLICATION_DISCOVERY",
    "cronExpression": "15 * * * *",
    "config": {
        "datasetIds": ["sso-okta:applications"]
    }
}
```

SailPoint Identity Security sends `input.datasetIds` with the datasets to discover. SailPoint Identity Security can also send `additionalParameters` to pass extra data to some SailPoint connectors, for example the location of a file to read. Your connector does not need to use it.

If an application is missing from two discovery runs in a row, SailPoint Identity Security sets its status to `INACTIVE`.

### Output fields

Each application needs `id`, `primaryAppName`, and `description`. All other fields are optional.

| Field | Values |
| :---- | :----- |
| `status` | A string, for example `ACTIVE` or `INACTIVE`. |
| `connectorCategory` | The kind of source, for example `sso` or `cmdb`. |
| `riskLevel` | `High`, `Medium`, or `Low`. |
| `riskScore` | A number. |
| `usersCount` | A string. Convert numbers with `String()`. |

The application list in SailPoint Identity Security shows the name, description, category, discovery connector, business criticality, status, and the first and last discovery dates. The details page of each application shows the other fields.

## Implementation

The SDK has two ways to register this command, but only one can be used at a time.

| Method | Use it when |
| :----- | :---------- |
| `stdApplicationDiscoveryListWithDataset` | Your connector declares datasets. This is the method for new connectors. |
| `stdApplicationDiscoveryList` | Your connector has no datasets. The input is an empty object. |

With `stdApplicationDiscoveryListWithDataset`, the SDK calls your handler once for each dataset ID and adds `datasetId` to each object that you send.

Call `res.send()` once for each application.

```typescript
import {
    Context,
    createConnector,
    readConfig,
    Response,
    StdApplicationDiscoveryListInput,
    StdApplicationDiscoveryListOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdApplicationDiscoveryListWithDataset(async (context: Context, input: StdApplicationDiscoveryListInput, res: Response<StdApplicationDiscoveryListOutput>) => {
            const apps: { id: string; name: string; description: string; url: string; userCount: number; active: boolean }[] =
                await client.getApplications(input.datasetId)
            for (const app of apps) {
                res.send({
                    id: app.id,
                    primaryAppName: app.name,
                    description: app.description,
                    status: app.active ? 'ACTIVE' : 'INACTIVE',
                    connectorCategory: 'sso',
                    appUrl: app.url,
                    usersCount: String(app.userCount),
                })
            }
        })
}
```
