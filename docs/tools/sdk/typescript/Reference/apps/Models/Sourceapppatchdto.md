---
id: v1-sourceapppatchdto-v1
title: SourceapppatchdtoV1
pagination_label: SourceapppatchdtoV1
sidebar_label: SourceapppatchdtoV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SourceapppatchdtoV1', 'v1SourceapppatchdtoV1']
slug: /tools/sdk/typescript/apps/models/sourceapppatchdto-v1
tags: ['SDK', 'Software Development Kit', 'SourceapppatchdtoV1', 'v1SourceapppatchdtoV1']
---

# SourceapppatchdtoV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The source app id | [default to undefined]
**cloudAppId** | **(optional)** `string` | The deprecated source app id | [default to undefined]
**name** | **(optional)** `string` | The source app name | [default to undefined]
**created** | **(optional)** `string` | Time when the source app was created | [default to undefined]
**modified** | **(optional)** `string` | Time when the source app was last modified | [default to undefined]
**enabled** | **(optional)** `boolean` | True if the source app is enabled | [default to false]
**provisionRequestEnabled** | **(optional)** `boolean` | True if the app allows access request | [default to false]
**description** | **(optional)** `string` | The description of the source app | [default to undefined]
**matchAllAccounts** | **(optional)** `boolean` | True if the source app match all accounts | [default to false]
**appCenterEnabled** | **(optional)** `boolean` | True if the app is visible in the request center | [default to true]
**accessProfiles** | **(optional)** `Array<string>` | List of IDs of access profiles | [default to undefined]
**accountSource** | **(optional)** `SourceappAccountSourceV1` |  | [default to undefined]
**owner** | **(optional)** `BasereferencedtoV1` | The owner of source app | [default to undefined]

