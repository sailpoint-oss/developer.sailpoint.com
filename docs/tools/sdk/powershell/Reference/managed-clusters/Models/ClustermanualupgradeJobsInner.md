---
id: clustermanualupgrade-jobs-inner
title: ClustermanualupgradeJobsInner
pagination_label: ClustermanualupgradeJobsInner
sidebar_label: ClustermanualupgradeJobsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInner', 'ClustermanualupgradeJobsInner'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInner', 'ClustermanualupgradeJobsInner']
---


# ClustermanualupgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | Unique identifier for the upgrade job. | [required]
**Cookbook** | **String** | Identifier for the cookbook used in the upgrade job. | [required]
**State** | **String** | Current state of the upgrade job. | [required]
**Type** | **String** | The type of upgrade job (e.g., VA_UPGRADE). | [required]
**TargetId** | **String** | Unique identifier of the target for the upgrade job. | [required]
**ManagedProcessConfiguration** | [**ClustermanualupgradeJobsInnerManagedProcessConfiguration**](clustermanualupgrade-jobs-inner-managed-process-configuration) |  | [required]

## Examples

- Prepare the resource
```powershell
$ClustermanualupgradeJobsInner = Initialize-ClustermanualupgradeJobsInner  -Uuid 4732440c-dacb-45b2-b2f8-ee2fa1327a07 `
 -Cookbook 4732440c-dacb-45b2-b2f8-ee2fa1327a07 `
 -State PENDING `
 -Type VA_UPGRADE `
 -TargetId 9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2 `
 -ManagedProcessConfiguration null
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInner | ConvertTo-JSON
```


[[Back to top]](#) 

