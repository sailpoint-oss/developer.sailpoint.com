---
id: v2024-cluster-manual-upgrade-jobs-inner
title: ClusterManualUpgradeJobsInner
pagination_label: ClusterManualUpgradeJobsInner
sidebar_label: ClusterManualUpgradeJobsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInner', 'V2024ClusterManualUpgradeJobsInner'] 
slug: /tools/sdk/powershell/v2024/models/cluster-manual-upgrade-jobs-inner
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInner', 'V2024ClusterManualUpgradeJobsInner']
---


# ClusterManualUpgradeJobsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Uuid** | **String** | Unique identifier for the upgrade job. | [required]
**Cookbook** | **String** | Identifier for the cookbook used in the upgrade job. | [required]
**State** | **String** | Current state of the upgrade job. | [required]
**Type** | **String** | The type of upgrade job (e.g., VA_UPGRADE). | [required]
**TargetId** | **String** | Unique identifier of the target for the upgrade job. | [required]
**ManagedProcessConfiguration** | [**ClusterManualUpgradeJobsInnerManagedProcessConfiguration**](cluster-manual-upgrade-jobs-inner-managed-process-configuration) |  | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInner = Initialize-V2024ClusterManualUpgradeJobsInner  -Uuid 4732440c-dacb-45b2-b2f8-ee2fa1327a07 `
 -Cookbook 4732440c-dacb-45b2-b2f8-ee2fa1327a07 `
 -State PENDING `
 -Type VA_UPGRADE `
 -TargetId 9fe8f1cc-2fd2-4675-a8cf-af4b43488ca2 `
 -ManagedProcessConfiguration null
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInner | ConvertTo-JSON
```


[[Back to top]](#) 

