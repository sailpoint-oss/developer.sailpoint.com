---
id: v1-trigger-v1
title: TriggerV1
pagination_label: TriggerV1
sidebar_label: TriggerV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TriggerV1', 'v1TriggerV1']
slug: /tools/sdk/typescript/triggers/models/trigger-v1
tags: ['SDK', 'Software Development Kit', 'TriggerV1', 'v1TriggerV1']
---

# TriggerV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique identifier of the trigger. | [default to undefined]
**name** | `string` | Trigger Name. | [default to undefined]
**type** | `TriggertypeV1` |  | [default to undefined]
**description** | **(optional)** `string` | Trigger Description. | [default to undefined]
**inputSchema** | `string` | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | [default to undefined]
**exampleInput** | `TriggerExampleInputV1` |  | [default to undefined]
**outputSchema** | **(optional)** `string` | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of `REQUEST_RESPONSE`. | [default to undefined]
**exampleOutput** | **(optional)** `TriggerExampleOutputV1` |  | [default to undefined]

