---
id: v1-accessitemroleresponse-v1
title: AccessitemroleresponseV1
pagination_label: AccessitemroleresponseV1
sidebar_label: AccessitemroleresponseV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccessitemroleresponseV1', 'v1AccessitemroleresponseV1']
slug: /tools/sdk/typescript/identity_history/models/accessitemroleresponse-v1
tags: ['SDK', 'Software Development Kit', 'AccessitemroleresponseV1', 'v1AccessitemroleresponseV1']
---

# AccessitemroleresponseV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | the access item id | [default to undefined]
**accessType** | **(optional)** `string` | the access item type. role in this case | [default to undefined]
**displayName** | **(optional)** `string` | the role display name | [default to undefined]
**sourceName** | **(optional)** `string` | the associated source name if it exists | [default to undefined]
**description** | **(optional)** `string` | the description for the role | [default to undefined]
**startDate** | **(optional)** `string` | the date the access profile will be assigned to the specified identity, in case requested with a future start date | [default to undefined]
**removeDate** | **(optional)** `string` | the date the role is no longer assigned to the specified identity | [default to undefined]
**revocable** | `boolean` | indicates whether the role is revocable | [default to undefined]

