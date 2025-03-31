---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/powershell/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon']
---


# ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'charon' process. | [required]
**Path** | **String** | Path to the 'charon' process. | [required]
**Description** | **String** | A brief description of the 'charon' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon = Initialize-PSSailpoint.V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon  -Version 3047 `
 -Path sailpoint/charon `
 -Description version of charon used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationCharon | ConvertTo-JSON
```


[[Back to top]](#) 

