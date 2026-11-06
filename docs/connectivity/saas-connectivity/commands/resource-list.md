# Resource List

| Input/Output |        Data Type        |
| :----------- | :---------------------: |
| Input        |  StdResourceListInput   |
| Output       |  StdResourceListOutput  |

### Example StdResourceListInput

```javascript
{
    "datasetId": "github:repositories"
}
```

### Example StdResourceListOutput

```javascript
{
    "identity": "repo-1234",
    "resourceId": "github:repository",
    "attributes": {
        "id": "repo-1234",
        "name": "payments-service",
        "visibility": "private"
    }
}
```

## Description

The resource list command aggregates the resources in one dataset. A resource is an object on the source that is not an account or an entitlement. Examples are AI agents, credentials, devices, and cloud roles. A dataset is a group of resource types that SailPoint Identity Security aggregates together.

To use this command, you must specify this value in the `commands` array: `std:resource:list`

:::note SDK version

Version 1.2.1 of `@sailpoint/connector-sdk` does not have the `resourceId` field. Use version 1.2.3 or later.

:::

### Declare datasets and resources in the connector spec

Add two top-level arrays to `connector-spec.json`:

- `datasets` lists the datasets. Each dataset lists the IDs of the resource types that it contains.
- `resources` defines each resource type and its schema.

```json
{
    "commands": ["std:test-connection", "std:resource:list"],
    "datasets": [
        {
            "id": "github:repositories",
            "name": "GitHub Repositories",
            "description": "Repositories in the GitHub organization",
            "schedule": "0 */12 * * *",
            "requiredLicenses": [],
            "resources": [{ "id": "github:repository" }]
        }
    ],
    "resources": [
        {
            "id": "github:repository",
            "name": "GitHub Repository",
            "type": "std:capability",
            "identityAttribute": "id",
            "displayAttribute": "name",
            "schema": {
                "type": "object",
                "required": ["id", "name"],
                "properties": {
                    "id": { "type": "string" },
                    "name": { "type": "string" },
                    "visibility": { "type": "string" }
                }
            }
        }
    ]
}
```

| Property | Description |
| :------- | :---------- |
| `datasets[].schedule` | A cron expression for scheduled aggregations. Scheduled aggregations run only after an admin turns on aggregation for the dataset. |
| `datasets[].requiredLicenses` | The licenses that the tenant must have to see the dataset. The tenant must have all of them. If the list is empty or missing, every tenant sees the dataset. |
| `datasets[].resources` | The resource types in the dataset. Each resource type can be in only one dataset. |
| `resources[].id` | The ID of the resource type. The connector sends it as `resourceId`. |
| `resources[].type` | The kind of resource: `std:account`, `std:agent`, `std:application`, `std:capability`, `std:credential`, or `std:device`. |
| `resources[].identityAttribute` | The attribute that holds the unique ID of each resource. |
| `resources[].displayAttribute` | The attribute that SailPoint Identity Security shows as the name of each resource. |
| `resources[].schema` | A JSON Schema for the `attributes` of each resource. |

Values that `requiredLicenses` uses include `idn:machine-identity-security`, `idn:agentic-identity-governance`, and `saf:datasets`.

### When SailPoint Identity Security calls the command

SailPoint Identity Security sends one `std:resource:list` command for each dataset aggregation. `input.datasetId` tells you which dataset to list. You cannot aggregate only one resource type of a dataset. Return all resource types in the dataset.

An aggregation starts in one of these ways:

- An admin starts it from the source, or calls the [aggregate dataset API](/docs/api/import-source-dataset-v-1).
- If aggregation is on for the dataset, its `schedule` starts it.

### Output fields

| Field | Description |
| :---- | :---------- |
| `resourceId` | The `id` of the resource type in `connector-spec.json`, for example `github:repository`. It is not the ID of the object. |
| `identity` | The stable, native ID of the object on the source. |
| `attributes` | The attributes of the object. They must match the `schema` of the resource type. |

The SDK adds `datasetId` to each object that you send, so you do not need to add it yourself.

SailPoint Identity Security uses `attributes[identityAttribute]` as the native identity of the object. If that attribute is empty, it uses `identity`. The native identity must be unique in the source, across all datasets and resource types. If the source uses the same ID for two kinds of objects, add a prefix to make the IDs unique.

### Deleted resources

`std:resource:list` returns a full list of the dataset each time. After an aggregation finishes without errors, SailPoint Identity Security deletes the resources that the connector did not send. You do not need to mark deleted resources.

## Implementation

Call `res.send()` once for each resource. Do not send an array.

```typescript
import {
    ConnectorError,
    Context,
    createConnector,
    readConfig,
    Response,
    StdResourceListInput,
    StdResourceListOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdResourceList(async (context: Context, input: StdResourceListInput, res: Response<StdResourceListOutput>) => {
            if (input.datasetId !== 'github:repositories') {
                throw new ConnectorError(`Unsupported dataset: ${input.datasetId}`)
            }
            const repositories: { id: string; name: string; visibility: string }[] =
                await client.getRepositories()
            for (const repository of repositories) {
                res.send({
                    identity: repository.id,
                    resourceId: 'github:repository',
                    attributes: {
                        id: repository.id,
                        name: repository.name,
                        visibility: repository.visibility,
                    },
                })
            }
        })
}
```
