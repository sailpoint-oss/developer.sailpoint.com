---
id: v1-testinvocation-v1
title: TestinvocationV1
pagination_label: TestinvocationV1
sidebar_label: TestinvocationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'TestinvocationV1', 'v1TestinvocationV1']
slug: /tools/sdk/typescript/triggers/models/testinvocation-v1
tags: ['SDK', 'Software Development Kit', 'TestinvocationV1', 'v1TestinvocationV1']
---

# TestinvocationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**triggerId** | `string` | Trigger ID | [default to undefined]
**input** | **(optional)** `object` | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [default to undefined]
**contentJson** | `object` | JSON map of invocation metadata. | [default to undefined]
**subscriptionIds** | **(optional)** `Array<string>` | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [default to undefined]

