---
id: v1-launcher-v1
title: LauncherV1
pagination_label: LauncherV1
sidebar_label: LauncherV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LauncherV1', 'v1LauncherV1']
slug: /tools/sdk/typescript/launchers/models/launcher-v1
tags: ['SDK', 'Software Development Kit', 'LauncherV1', 'v1LauncherV1']
---

# LauncherV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | ID of the Launcher | [default to undefined]
**created** | `string` | Date the Launcher was created | [default to undefined]
**modified** | `string` | Date the Launcher was last modified | [default to undefined]
**owner** | `LauncherOwnerV1` |  | [default to undefined]
**name** | `string` | Name of the Launcher, limited to 255 characters | [default to undefined]
**description** | `string` | Description of the Launcher, limited to 2000 characters | [default to undefined]
**type** | `string` | Launcher type | [default to undefined]
**disabled** | `boolean` | State of the Launcher | [default to undefined]
**reference** | **(optional)** `LauncherReferenceV1` |  | [default to undefined]
**config** | `string` | JSON configuration associated with this Launcher, restricted to a max size of 4KB  | [default to undefined]

