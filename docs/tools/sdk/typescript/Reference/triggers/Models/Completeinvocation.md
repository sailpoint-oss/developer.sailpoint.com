---
id: v1-completeinvocation-v1
title: CompleteinvocationV1
pagination_label: CompleteinvocationV1
sidebar_label: CompleteinvocationV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CompleteinvocationV1', 'v1CompleteinvocationV1']
slug: /tools/sdk/typescript/triggers/models/completeinvocation-v1
tags: ['SDK', 'Software Development Kit', 'CompleteinvocationV1', 'v1CompleteinvocationV1']
---

# CompleteinvocationV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**secret** | `string` | Unique invocation secret that was generated when the invocation was created. Required to authenticate to the endpoint. | [default to undefined]
**error** | **(optional)** `string` | The error message to indicate a failed invocation or error if any. | [default to undefined]
**output** | `object` | Trigger output to complete the invocation. Its schema is defined in the trigger definition. | [default to undefined]

