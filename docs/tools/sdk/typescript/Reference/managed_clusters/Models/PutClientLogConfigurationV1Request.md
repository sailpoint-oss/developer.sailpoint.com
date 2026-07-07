---
id: v1-put-client-log-configuration-v1-request-v1
title: PutClientLogConfigurationV1RequestV1
pagination_label: PutClientLogConfigurationV1RequestV1
sidebar_label: PutClientLogConfigurationV1RequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PutClientLogConfigurationV1RequestV1', 'v1PutClientLogConfigurationV1RequestV1']
slug: /tools/sdk/typescript/managed_clusters/models/put-client-log-configuration-v1-request-v1
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationV1RequestV1', 'v1PutClientLogConfigurationV1RequestV1']
---

# PutClientLogConfigurationV1RequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clientId** | **(optional)** `string` | Log configuration\'s client ID | [default to undefined]
**durationMinutes** | **(optional)** `number` | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [default to 240]
**rootLevel** | `StandardlevelV1` |  | [default to undefined]
**logLevels** | **(optional)**  | Mapping of identifiers to Standard Log Level values | [default to undefined]
**expiration** | **(optional)** `string` | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [default to undefined]

