---
id: ssf-stream
title: SSF Stream Commands
pagination_label: SSF Stream Commands
sidebar_label: SSF Stream Commands
keywords: ['connectivity', 'connectors', 'ssf', 'shared signals', 'stream', 'caep']
description: Manage Shared Signals Framework (SSF) streams on a third-party transmitter.
slug: /connectivity/saas-connectivity/commands/ssf-stream
tags: ['Connectivity', 'Connector Command']
draft: true
---

## Description

The Shared Signals Framework (SSF) is an OpenID standard for sending security events between systems through streams. An example is a Continuous Access Evaluation Profile (CAEP) event that says a device is no longer compliant.

In these commands, SailPoint Identity Security is the SSF receiver. The source is the SSF transmitter, for example a device management or identity provider service. SailPoint Identity Security uses the connector to set up and manage a stream on the transmitter. The transmitter then sends its events to SailPoint Identity Security.

The connector is a transport layer. Each command sends one HTTP request to the transmitter and returns the result. The connector does not process the security events.

These commands are different from the [SSF transmitter APIs](/docs/api/create-stream-v-1) of SailPoint Identity Security. With those APIs, SailPoint Identity Security is the transmitter.

| Command | SDK method | What the connector does on the transmitter |
| :------ | :--------- | :----------------------------------------- |
| `std:ssf-stream:discover` | `stdSsfStreamDiscover` | Get the SSF configuration from `discoveryEndpoint`. |
| `std:ssf-stream:create` | `stdSsfStreamCreate` | Create a stream. |
| `std:ssf-stream:read` | `stdSsfStreamRead` | Get the stream configuration. |
| `std:ssf-stream:update` | `stdSsfStreamUpdate` | Change some fields of the stream configuration. |
| `std:ssf-stream:replace` | `stdSsfStreamReplace` | Replace the full stream configuration. |
| `std:ssf-stream:status-update` | `stdSsfStreamStatusUpdate` | Change the stream status, for example to `enabled` or `disabled`. |
| `std:ssf-stream:verify` | `stdSsfStreamVerify` | Ask the transmitter to send a verification event. |
| `std:ssf-stream:delete` | `stdSsfStreamDelete` | Delete the stream. |

To use a command, you must specify its value from the first column in the `commands` array.

## Input

Every command has the input `{ stream }`. The SDK types `stream` as `any`. SailPoint Identity Security sends this shape:

```json
{
    "stream": {
        "discoveryEndpoint": "https://transmitter.example.com/.well-known/ssf-configuration",
        "streamConfiguration": {
            "streamID": "ad013776-c43e-42c9-8020-520e8ab20573",
            "iss": "https://transmitter.example.com",
            "aud": ["https://example.com"],
            "eventsRequested": ["https://schemas.openid.net/secevent/caep/event-type/device-compliance-change"],
            "delivery": {
                "method": "urn:ietf:rfc:8935",
                "endpointUrl": "https://tenant.api.identitynow.com/ssf-event/54ea4518-5e54-48a7-ae86-22ef5ae6247b",
                "authorizationHeader": null
            },
            "description": "Events for the test environment",
            "streamStatus": "disabled"
        },
        "transmitterMetadata": {
            "configurationEndpoint": "https://transmitter.example.com/sse/v1/stream",
            "statusEndpoint": "https://transmitter.example.com/sse/v1/status",
            "verificationEndpoint": "https://transmitter.example.com/sse/v1/verification"
        }
    }
}
```

| Field | Description |
| :---- | :---------- |
| `discoveryEndpoint` | The URL of the SSF well-known configuration of the transmitter. |
| `streamConfiguration` | The SSF stream configuration, with camel-case field names. `delivery.endpointUrl` is the SailPoint Identity Security URL that receives the events. |
| `transmitterMetadata` | The endpoints of the transmitter, from its SSF configuration. Send create, read, update, replace, and delete requests to `configurationEndpoint`. Send status requests to `statusEndpoint` and verification requests to `verificationEndpoint`. |

If `streamConfiguration.delivery` or `delivery.endpointUrl` is missing, throw a `ConnectorError`.

The discover command returns the SSF configuration of the transmitter. SailPoint Identity Security uses its fields, for example `issuer`, `jwks_uri`, and the endpoints, to fill `transmitterMetadata` and to check the signatures of events.

## Authentication

Most transmitters protect their SSF endpoints with OAuth. Add the authentication fields that the transmitter needs to `sourceConfig` in `connector-spec.json`, for example an OAuth token or OAuth 2.0 client credentials.

## Implementation

This example registers the discover, create, and delete commands. The other commands follow the same pattern.

```typescript
import {
    ConnectorError,
    Context,
    createConnector,
    readConfig,
    Response,
    StdSsfStreamCreateInput,
    StdSsfStreamCreateOutput,
    StdSsfStreamDeleteInput,
    StdSsfStreamDeleteOutput,
    StdSsfStreamDiscoverInput,
    StdSsfStreamDiscoverOutput,
} from '@sailpoint/connector-sdk'
import { MyClient } from './my-client'

export const connector = async () => {
    const config = await readConfig()
    const client = new MyClient(config)

    return createConnector()
        .stdSsfStreamDiscover(async (context: Context, input: StdSsfStreamDiscoverInput, res: Response<StdSsfStreamDiscoverOutput>) => {
            const configuration = await client.get(input.stream.discoveryEndpoint)
            res.send(configuration)
        })
        .stdSsfStreamCreate(async (context: Context, input: StdSsfStreamCreateInput, res: Response<StdSsfStreamCreateOutput>) => {
            const { streamConfiguration, transmitterMetadata } = input.stream
            if (!streamConfiguration?.delivery?.endpointUrl) {
                throw new ConnectorError('The stream configuration has no delivery endpoint URL')
            }
            const stream = await client.post(transmitterMetadata.configurationEndpoint, streamConfiguration)
            res.send(stream)
        })
        .stdSsfStreamDelete(async (context: Context, input: StdSsfStreamDeleteInput, res: Response<StdSsfStreamDeleteOutput>) => {
            const { streamConfiguration, transmitterMetadata } = input.stream
            await client.delete(`${transmitterMetadata.configurationEndpoint}?stream_id=${streamConfiguration.streamID}`)
            res.send({})
        })
}
```

`MyClient` is your HTTP client for the transmitter. In this example, its methods return the parsed JSON response.
