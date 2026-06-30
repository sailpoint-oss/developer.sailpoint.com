---
id: v1-userapp-v1
title: UserappV1
pagination_label: UserappV1
sidebar_label: UserappV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'UserappV1', 'v1UserappV1']
slug: /tools/sdk/typescript/apps/models/userapp-v1
tags: ['SDK', 'Software Development Kit', 'UserappV1', 'v1UserappV1']
---

# UserappV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The user app id | [default to undefined]
**created** | **(optional)** `string` | Time when the user app was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the user app was last modified | [default to undefined]
**hasMultipleAccounts** | **(optional)** `boolean` | True if the owner has multiple accounts for the source | [default to false]
**useForPasswordManagement** | **(optional)** `boolean` | True if the source has password feature | [default to false]
**provisionRequestEnabled** | **(optional)** `boolean` | True if the app allows access request | [default to false]
**appCenterEnabled** | **(optional)** `boolean` | True if the app is visible in the request center | [default to true]
**sourceApp** | **(optional)** `UserappSourceAppV1` |  | [default to undefined]
**source** | **(optional)** `UserappSourceV1` |  | [default to undefined]
**account** | **(optional)** `UserappAccountV1` |  | [default to undefined]
**owner** | **(optional)** `UserappOwnerV1` |  | [default to undefined]

