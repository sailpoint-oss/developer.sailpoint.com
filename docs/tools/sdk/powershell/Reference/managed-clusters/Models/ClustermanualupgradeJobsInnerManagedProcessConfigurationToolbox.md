---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox']
---


# ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox

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
$ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox = Initialize-ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox  -Version 3004 `
 -Path sailpoint/toolbox `
 -Description version of toolbox used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox | ConvertTo-JSON
```


[[Back to top]](#) 

