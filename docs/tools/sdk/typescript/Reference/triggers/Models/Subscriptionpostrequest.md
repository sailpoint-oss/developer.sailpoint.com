---
id: v1-subscriptionpostrequest-v1
title: SubscriptionpostrequestV1
pagination_label: SubscriptionpostrequestV1
sidebar_label: SubscriptionpostrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SubscriptionpostrequestV1', 'v1SubscriptionpostrequestV1']
slug: /tools/sdk/typescript/triggers/models/subscriptionpostrequest-v1
tags: ['SDK', 'Software Development Kit', 'SubscriptionpostrequestV1', 'v1SubscriptionpostrequestV1']
---

# SubscriptionpostrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**triggerId** | `string` | ID of trigger subscribed to. | [default to undefined]
**type** | `SubscriptiontypeV1` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `HttpconfigV1` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `EventbridgeconfigV1` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

