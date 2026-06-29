---
id: v1-managedclient-v1
title: ManagedclientV1
pagination_label: ManagedclientV1
sidebar_label: ManagedclientV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManagedclientV1', 'v1ManagedclientV1']
slug: /tools/sdk/typescript/managed_clients/models/managedclient-v1
tags: ['SDK', 'Software Development Kit', 'ManagedclientV1', 'v1ManagedclientV1']
---

# ManagedclientV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | ManagedClient ID | [readonly] [default to undefined]
**alertKey** | **(optional)** `string` | ManagedClient alert key | [readonly] [default to undefined]
**apiGatewayBaseUrl** | **(optional)** `string` |  | [default to undefined]
**cookbook** | **(optional)** `string` |  | [default to undefined]
**ccId** | **(optional)** `number` | Previous CC ID to be used in data migration. (This field will be deleted after CC migration!) | [default to undefined]
**clientId** | `string` | The client ID used in API management | [default to undefined]
**clusterId** | `string` | Cluster ID that the ManagedClient is linked to | [default to undefined]
**description** | `string` | ManagedClient description | [default to '']
**ipAddress** | **(optional)** `string` | The public IP address of the ManagedClient | [readonly] [default to undefined]
**lastSeen** | **(optional)** `string` | When the ManagedClient was last seen by the server | [readonly] [default to undefined]
**name** | **(optional)** `string` | ManagedClient name | [default to 'VA-$clientId']
**sinceLastSeen** | **(optional)** `string` | Milliseconds since the ManagedClient has polled the server | [readonly] [default to undefined]
**status** | **(optional)** `string` | Status of the ManagedClient | [readonly] [default to undefined]
**type** | `string` | Type of the ManagedClient (VA, CCG) | [default to undefined]
**clusterType** | **(optional)** `string` | Cluster Type of the ManagedClient | [readonly] [default to undefined]
**vaDownloadUrl** | **(optional)** `string` | ManagedClient VA download URL | [readonly] [default to undefined]
**vaVersion** | **(optional)** `string` | Version that the ManagedClient\'s VA is running | [readonly] [default to undefined]
**secret** | **(optional)** `string` | Client\'s apiKey | [default to undefined]
**createdAt** | **(optional)** `string` | The date/time this ManagedClient was created | [default to undefined]
**updatedAt** | **(optional)** `string` | The date/time this ManagedClient was last updated | [default to undefined]
**provisionStatus** | **(optional)** `string` | The provisioning status of the ManagedClient | [readonly] [default to undefined]

