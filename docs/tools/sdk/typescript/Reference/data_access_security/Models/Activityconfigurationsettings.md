---
id: v1-activityconfigurationsettings-v1
title: ActivityconfigurationsettingsV1
pagination_label: ActivityconfigurationsettingsV1
sidebar_label: ActivityconfigurationsettingsV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ActivityconfigurationsettingsV1', 'v1ActivityconfigurationsettingsV1']
slug: /tools/sdk/typescript/data_access_security/models/activityconfigurationsettings-v1
tags: ['SDK', 'Software Development Kit', 'ActivityconfigurationsettingsV1', 'v1ActivityconfigurationsettingsV1']
---

# ActivityconfigurationsettingsV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isEnabled** | **(optional)** `boolean` | Indicates whether the feature or configuration is enabled. | [default to false]
**clusterId** | **(optional)** `string` | The identifier of the cluster associated with this configuration, if applicable. | [default to undefined]
**retentionTimePeriod** | **(optional)** `number` | The time period for retaining activity logs. | [default to undefined]
**retentionTimeType** | **(optional)** `string` | The type of retention period (e.g., days, months, years). | [default to undefined]
**excludeUsers** | **(optional)** `Array<string>` | List of user identifiers to exclude from activity tracking. | [default to undefined]
**excludeFolders** | **(optional)** `Array<string>` | List of folder paths to exclude from activity tracking. | [default to undefined]
**excludeFileExtensions** | **(optional)** `Array<string>` | List of file extensions to exclude from activity tracking. | [default to undefined]
**excludeActions** | **(optional)** `Array<string>` | List of actions to exclude from activity tracking. | [default to undefined]

