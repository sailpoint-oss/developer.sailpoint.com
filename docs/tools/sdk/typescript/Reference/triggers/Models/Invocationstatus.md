---
id: v1-invocationstatus-v1
title: InvocationstatusV1
pagination_label: InvocationstatusV1
sidebar_label: InvocationstatusV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'InvocationstatusV1', 'v1InvocationstatusV1']
slug: /tools/sdk/typescript/triggers/models/invocationstatus-v1
tags: ['SDK', 'Software Development Kit', 'InvocationstatusV1', 'v1InvocationstatusV1']
---

# InvocationstatusV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Invocation ID | [default to undefined]
**triggerId** | `string` | Trigger ID | [default to undefined]
**subscriptionName** | `string` | Subscription name | [default to undefined]
**subscriptionId** | `string` | Subscription ID | [default to undefined]
**type** | `InvocationstatustypeV1` |  | [default to undefined]
**created** | `string` | Invocation created timestamp. ISO-8601 in UTC. | [default to undefined]
**completed** | **(optional)** `string` | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [default to undefined]
**startInvocationInput** | `StartinvocationinputV1` |  | [default to undefined]
**completeInvocationInput** | **(optional)** `CompleteinvocationinputV1` |  | [default to undefined]

