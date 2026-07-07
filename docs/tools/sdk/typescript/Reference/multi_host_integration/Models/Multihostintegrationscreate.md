---
id: v1-multihostintegrationscreate-v1
title: MultihostintegrationscreateV1
pagination_label: MultihostintegrationscreateV1
sidebar_label: MultihostintegrationscreateV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MultihostintegrationscreateV1', 'v1MultihostintegrationscreateV1']
slug: /tools/sdk/typescript/multi_host_integration/models/multihostintegrationscreate-v1
tags: ['SDK', 'Software Development Kit', 'MultihostintegrationscreateV1', 'v1MultihostintegrationscreateV1']
---

# MultihostintegrationscreateV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Multi-Host Integration\'s human-readable name. | [default to undefined]
**description** | `string` | Multi-Host Integration\'s human-readable description. | [default to undefined]
**owner** | `MultihostintegrationsOwnerV1` |  | [default to undefined]
**cluster** | **(optional)** `MultihostintegrationsClusterV1` |  | [default to undefined]
**connector** | `string` | Connector script name. | [default to undefined]
**connectorAttributes** | **(optional)**  | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [default to undefined]
**managementWorkgroup** | **(optional)** `MultihostintegrationsManagementWorkgroupV1` |  | [default to undefined]
**created** | **(optional)** `string` | Date-time when the source was created | [default to undefined]
**modified** | **(optional)** `string` | Date-time when the source was last modified. | [default to undefined]

