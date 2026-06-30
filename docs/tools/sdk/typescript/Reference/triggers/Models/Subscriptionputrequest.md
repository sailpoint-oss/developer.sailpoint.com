---
id: v1-subscriptionputrequest-v1
title: SubscriptionputrequestV1
pagination_label: SubscriptionputrequestV1
sidebar_label: SubscriptionputrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SubscriptionputrequestV1', 'v1SubscriptionputrequestV1']
slug: /tools/sdk/typescript/triggers/models/subscriptionputrequest-v1
tags: ['SDK', 'Software Development Kit', 'SubscriptionputrequestV1', 'v1SubscriptionputrequestV1']
---

# SubscriptionputrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | Subscription name. | [default to undefined]
**description** | **(optional)** `string` | Subscription description. | [default to undefined]
**type** | **(optional)** `SubscriptiontypeV1` |  | [default to undefined]
**responseDeadline** | **(optional)** `string` | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [default to 'PT1H']
**httpConfig** | **(optional)** `HttpconfigV1` |  | [default to undefined]
**eventBridgeConfig** | **(optional)** `EventbridgeconfigV1` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [default to true]
**filter** | **(optional)** `string` | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [default to undefined]

