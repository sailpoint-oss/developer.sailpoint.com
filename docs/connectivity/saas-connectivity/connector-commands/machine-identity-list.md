---
id: machine-identity-list
title: Machine Identity List
pagination_label: Machine Identity List
sidebar_label: Machine Identity List
keywords: ['connectivity', 'connectors', 'machine identity list', 'agent list', 'dataset']
description: Aggregate machine identities from one or more datasets on the source.
slug: /connectivity/saas-connectivity/commands/machine-identity-list
tags: ['Connectivity', 'Connector Command']
---

| Input/Output |            Data Type            |
| :----------- | :-----------------------------: |
| Input        |   StdMachineIdentityListInput   |
| Output       |  StdMachineIdentityListOutput   |

### Example StdMachineIdentityListInput

```javascript
{
    "datasetId": "gcp:vertex",
    "datasetSchema": {
        "name": "GCP Vertex",
        "displayAttribute": "name",
        "identityAttribute": "identity",
        "attributes": [
            {
                "name": "identity",
                "description": "The unique identifier of the agent.",
                "type": "string"
            },
            {
                "name": "name",
                "description": "The resource name of the agent.",
                "type": "string"
            }
        ],
        "config": {
            "datasetType": "std:machine-identity",
            "datasetId": "gcp:vertex"
        }
    }
}
```

### Example StdMachineIdentityListOutput

```javascript
{
    "identity": "agent-5678",
    "attributes": {
        "identity": "agent-5678",
        "name": "Support agent",
        "projectId": "my-project",
        "locationId": "us-central1"
    }
}
```

## Description

The machine identity list command aggregates machine identities from the source. A machine identity is an identity that a person does not use directly, for example an AI agent, a service account, or a bot. Sailpoint Identity Security shows the results on the **Machine Identity Aggregations** page of the source.

The tenant must have a Machine Identity Security or an Agent Identity Security license.

To use this command, you must specify this value in the `commands` array: `std:machine-identity:list`

:::note Agent list is deprecated

The SDK also has `stdAgentList` (`std:agent:list`), which has the same input and output. Machine identity aggregation replaces AI agent aggregation, and it supports more kinds of machine identities. Use `stdMachineIdentityList` in new connectors. Some tenants still send `std:agent:list` during the change, so existing connectors can implement both commands with the same handler.

:::

### Declare datasets in the connector spec

Add a `datasets` object to `connector-spec.json`. Each key is a dataset ID. Set `type` to `std:machine-identity`.

```json
{
    "commands": ["std:test-connection", "std:machine-identity:list"],
    "datasets": {
        "gcp:vertex": {
            "type": "std:machine-identity",
            "name": "GCP Vertex",
            "identityAttribute": "identity",
            "displayAttribute": "name",
            "schema": {
                "type": "object",
                "properties": {
                    "projectId": { "type": "string", "description": "The identifier of the project in which agent resides." },
                    "locationId": { "type": "string", "description": "GCP region/location in which agent resides" },
                    "name": { "type": "string", "description": "The resource name of the agent." },
                    "identity": { "type": "string", "description": "The unique identifier of the agent." }
                },
                "required": ["projectId", "locationId"]
            }
        }
    }
}
```

Older connectors use `"type": "std:agent"` with `std:agent:list`. For new connectors, use `std:machine-identity`.

Use only simple types in the schema: strings, numbers, booleans, and arrays of these. For example, use an array of strings, not an array of objects.

### When SailPoint Identity Security calls the command

An admin starts a machine identity aggregation from the source, or calls the [start machine identity aggregation API](/docs/api/start-machine-identity-aggregation-v-1). Admins can also schedule it. An aggregation can include all dataset types or only some of them.

SailPoint Identity Security sends one command with a list of dataset IDs. The SDK calls your handler once for each dataset, with the ID and schema of that dataset. The SDK adds `datasetId` to each object that you send, so you do not need to add it yourself.

Each aggregation creates, updates, and deletes machine identities in SailPoint Identity Security. Admins can set deletion thresholds to protect against accidental deletes.

### Output fields

| Field | Description |
| :---- | :---------- |
| `identity` | The native identity of the machine identity. It must be unique in the source. SailPoint Identity Security uses it to correlate machine accounts to the machine identity. |
| `attributes` | The attributes of the machine identity. They must match the schema of the dataset. Include `identity` and `name` in `attributes`. |

## Implementation

Call `res.send()` once for each machine identity.

```typescript
import {
    ConnectorError,
    Context,
    createConnector,
    readConfig,
    Response,
    StdMachineIdentityListInput,
    StdMachineIdentityListOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdMachineIdentityList(async (context: Context, input: StdMachineIdentityListInput, res: Response<StdMachineIdentityListOutput>) => {
            if (input.datasetId !== 'gcp:vertex') {
                throw new ConnectorError(`Unsupported dataset: ${input.datasetId}`)
            }
            const agents: { id: string; name: string; projectId: string; locationId: string }[] =
                await client.getAgents()
            for (const agent of agents) {
                res.send({
                    identity: agent.id,
                    attributes: {
                        identity: agent.id,
                        name: agent.name,
                        projectId: agent.projectId,
                        locationId: agent.locationId,
                    },
                })
            }
        })
}
```
