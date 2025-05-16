---
id: v2025-cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
title: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
pagination_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_label: ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent'] 
slug: /tools/sdk/powershell/v2025/models/cluster-manual-upgrade-jobs-inner-managed-process-configuration-otel-agent
tags: ['SDK', 'Software Development Kit', 'ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent', 'V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent']
---


# ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **String** | Version of the 'otel_agent' process. | [required]
**Path** | **String** | Path to the 'otel_agent' process. | [required]
**Description** | **String** | A brief description of the 'otel_agent' process. | [required]
**RestartNeeded** | **Boolean** | Indicates whether the process needs to be restarted. | [required]

## Examples

- Prepare the resource
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent = Initialize-V2025ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent  -Version 3003 `
 -Path sailpoint/otel_agent `
 -Description version of otel_agent used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClusterManualUpgradeJobsInnerManagedProcessConfigurationOtelAgent | ConvertTo-JSON
```


[[Back to top]](#) 

