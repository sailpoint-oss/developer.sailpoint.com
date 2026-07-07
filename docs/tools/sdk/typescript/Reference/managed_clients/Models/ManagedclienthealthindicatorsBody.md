---
id: v1-managedclienthealthindicators-body-v1
title: ManagedclienthealthindicatorsBodyV1
pagination_label: ManagedclienthealthindicatorsBodyV1
sidebar_label: ManagedclienthealthindicatorsBodyV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ManagedclienthealthindicatorsBodyV1', 'v1ManagedclienthealthindicatorsBodyV1']
slug: /tools/sdk/typescript/managed_clients/models/managedclienthealthindicators-body-v1
tags: ['SDK', 'Software Development Kit', 'ManagedclienthealthindicatorsBodyV1', 'v1ManagedclienthealthindicatorsBodyV1']
---

# ManagedclienthealthindicatorsBodyV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alertKey** | **(optional)** `string` | Health indicator alert key | [readonly] [default to undefined]
**id** | `string` | Unique identifier for the health report | [default to undefined]
**clusterId** | `string` | Cluster ID the health report belongs to | [default to undefined]
**apiUser** | `string` | API user ID sending the health data | [default to undefined]
**ccg_etag** | **(optional)** `string` | ETag value for CCG version control | [default to undefined]
**ccg_pin** | **(optional)** `string` | PIN value for CCG validation | [default to undefined]
**cookbook_etag** | **(optional)** `string` | ETag for cookbook version | [default to undefined]
**hostname** | `string` | Hostname of the Managed Client | [default to undefined]
**internal_ip** | **(optional)** `string` | Internal IP address of the Managed Client | [default to undefined]
**lastSeen** | **(optional)** `string` | Epoch timestamp (in millis) when last seen | [default to undefined]
**sinceSeen** | **(optional)** `string` | Seconds since last seen | [default to undefined]
**sinceSeenMillis** | **(optional)** `string` | Milliseconds since last seen | [default to undefined]
**localDev** | **(optional)** `boolean` | Indicates if this is a local development instance | [default to false]
**stacktrace** | **(optional)** `string` | Stacktrace associated with any error, if available | [default to undefined]
**state** | **(optional)** `string` | Optional state value from the client | [default to undefined]
**status** | `string` | Status of the client at the time of report | [default to undefined]
**uuid** | **(optional)** `string` | Optional UUID from the client | [default to undefined]
**product** | `string` | Product type (e.g., idn) | [default to undefined]
**va_version** | **(optional)** `string` | VA version installed on the client | [default to undefined]
**platform_version** | `string` | Version of the platform on which VA is running | [default to undefined]
**os_version** | `string` | Operating system version | [default to undefined]
**os_type** | `string` | Operating system type | [default to undefined]
**hypervisor** | `string` | Virtualization platform used | [default to undefined]
**consolidatedHealthIndicatorsStatus** | `string` | Consolidated health indicator status | [default to undefined]
**lastNotifiedCcgVersion** | **(optional)** `string` | The last CCG version for which notification was sent | [default to undefined]
**deployed_processes** | **(optional)** `string` | Information about deployed processes | [default to undefined]
**health_indicators** | `ManagedclienthealthindicatorsBodyHealthIndicatorsV1` |  | [default to undefined]

