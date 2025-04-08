---
id: v2024-cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/powershell/v2024/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay', 'V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay']
---


# ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'relay' process. | [required]
**Path** | **String** | Path to the 'relay' process. | [required]
**Description** | **String** | A brief description of the 'relay' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay = Initialize-PSSailpoint.V2024ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay  -Version 3000 `
 -Path sailpoint/relay `
 -Description version of relay used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationRelay | ConvertTo-JSON
```


[[Back to top]](#) 

