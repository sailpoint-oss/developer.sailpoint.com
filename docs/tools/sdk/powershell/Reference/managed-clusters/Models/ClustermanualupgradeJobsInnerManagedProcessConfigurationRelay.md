---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-relay
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-relay
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay']
---


# ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay

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
$ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay = Initialize-ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay  -Version 3000 `
 -Path sailpoint/relay `
 -Description version of relay used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay | ConvertTo-JSON
```


[[Back to top]](#) 

