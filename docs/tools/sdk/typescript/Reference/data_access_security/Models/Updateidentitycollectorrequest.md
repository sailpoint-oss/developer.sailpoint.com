---
id: v1-updateidentitycollectorrequest-v1
title: UpdateidentitycollectorrequestV1
pagination_label: UpdateidentitycollectorrequestV1
sidebar_label: UpdateidentitycollectorrequestV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UpdateidentitycollectorrequestV1', 'v1UpdateidentitycollectorrequestV1']
slug: /tools/sdk/typescript/data_access_security/models/updateidentitycollectorrequest-v1
tags: ['SDK', 'Software Development Kit', 'UpdateidentitycollectorrequestV1', 'v1UpdateidentitycollectorrequestV1']
---

# UpdateidentitycollectorrequestV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The display name of the identity collector. Must be unique within the tenant. | [default to undefined]
**sourceId** | `string` | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | [default to undefined]
**type** | `string` | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | [default to undefined]

