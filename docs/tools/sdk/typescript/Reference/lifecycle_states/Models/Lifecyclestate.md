---
id: v1-lifecyclestate-v1
title: LifecyclestateV1
pagination_label: LifecyclestateV1
sidebar_label: LifecyclestateV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'LifecyclestateV1', 'v1LifecyclestateV1']
slug: /tools/sdk/typescript/lifecycle_states/models/lifecyclestate-v1
tags: ['SDK', 'Software Development Kit', 'LifecyclestateV1', 'v1LifecyclestateV1']
---

# LifecyclestateV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [readonly] [default to undefined]
**name** | `string` | Name of the Object | [default to undefined]
**created** | **(optional)** `string` | Creation date of the Object | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the Object | [readonly] [default to undefined]
**enabled** | **(optional)** `boolean` | Indicates whether the lifecycle state is enabled or disabled. | [default to false]
**technicalName** | `string` | The lifecycle state\'s technical name. This is for internal use. | [default to undefined]
**description** | **(optional)** `string` | Lifecycle state\'s description. | [default to undefined]
**identityCount** | **(optional)** `number` | Number of identities that have the lifecycle state. | [readonly] [default to undefined]
**emailNotificationOption** | **(optional)** `EmailnotificationoptionV1` |  | [default to undefined]
**accountActions** | **(optional)** `Array<AccountactionV1>` |  | [default to undefined]
**accessProfileIds** | **(optional)** `Array<string>` | List of unique access-profile IDs that are associated with the lifecycle state. | [default to undefined]
**identityState** | **(optional)** `string` | The lifecycle state\'s associated identity state. This field is generally \'null\'. | [default to undefined]
**accessActionConfiguration** | **(optional)** `AccessactionconfigurationV1` |  | [default to undefined]
**priority** | **(optional)** `number` | Used to control the order of lifecycle states when listing with `?sorters=priority`. Lower numbers appear first (ascending order). Out-of-the-box lifecycle states are assigned priorities in increments of 10. | [default to undefined]

