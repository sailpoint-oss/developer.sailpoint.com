---
id: v1-clustermanualupgrade-jobs-inner-v1
title: ClustermanualupgradeJobsInnerV1
pagination_label: ClustermanualupgradeJobsInnerV1
sidebar_label: ClustermanualupgradeJobsInnerV1
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ClustermanualupgradeJobsInnerV1', 'v1ClustermanualupgradeJobsInnerV1']
slug: /tools/sdk/typescript/managed_clusters/models/clustermanualupgrade-jobs-inner-v1
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerV1', 'v1ClustermanualupgradeJobsInnerV1']
---

# ClustermanualupgradeJobsInnerV1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uuid** | `string` | Unique identifier for the upgrade job. | [default to undefined]
**cookbook** | `string` | Identifier for the cookbook used in the upgrade job. | [default to undefined]
**state** | `string` | Current state of the upgrade job. | [default to undefined]
**type** | `string` | The type of upgrade job (e.g., VA_UPGRADE). | [default to undefined]
**targetId** | `string` | Unique identifier of the target for the upgrade job. | [default to undefined]
**managedProcessConfiguration** | `ClustermanualupgradeJobsInnerManagedProcessConfigurationV1` |  | [default to undefined]

