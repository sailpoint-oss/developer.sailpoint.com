---
id: v1-subscription-v1
title: SubscriptionV1
pagination_label: SubscriptionV1
sidebar_label: SubscriptionV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SubscriptionV1', 'v1SubscriptionV1']
slug: /tools/sdk/typescript/triggers/models/subscription-v1
tags: ['SDK', 'Software Development Kit', 'SubscriptionV1', 'v1SubscriptionV1']
---

# SubscriptionV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Subscription ID. | [default to undefined]
**name** | `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**triggerId** | `string` | ID of trigger subscribed to. | [default to undefined]
**triggerName** | `string` | Trigger name of trigger subscribed to. | [default to undefined]
**type** | `SubscriptiontypeV1` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `HttpconfigV1` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `EventbridgeconfigV1` |  | [default to undefined]
**enabled** | `boolean` | Whether subscription should receive real-time trigger invocations or not. Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

