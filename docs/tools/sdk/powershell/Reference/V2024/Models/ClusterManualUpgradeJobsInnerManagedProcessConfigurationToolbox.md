---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-toolbox
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox'] 
slug: /tools/sdk/powershell/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-toolbox
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox']
---


# ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'toolbox' process. | [required]
**Path** | **String** | Path to the 'toolbox' process. | [required]
**Description** | **String** | A brief description of the 'toolbox' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox = Initialize-V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox  -Version 3004 `
 -Path sailpoint/toolbox `
 -Description version of toolbox used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationToolbox | ConvertTo-JSON
```


[[Back to top]](#) 

