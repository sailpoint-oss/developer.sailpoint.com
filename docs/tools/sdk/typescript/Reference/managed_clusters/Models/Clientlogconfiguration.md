---
id: v1-clientlogconfiguration-v1
title: ClientlogconfigurationV1
pagination_label: ClientlogconfigurationV1
sidebar_label: ClientlogconfigurationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClientlogconfigurationV1', 'v1ClientlogconfigurationV1']
slug: /tools/sdk/typescript/managed_clusters/models/clientlogconfiguration-v1
tags: ['SDK', 'Software Development Kit', 'ClientlogconfigurationV1', 'v1ClientlogconfigurationV1']
---

# ClientlogconfigurationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]
**rootLevel** | `StandardlevelV1` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]

