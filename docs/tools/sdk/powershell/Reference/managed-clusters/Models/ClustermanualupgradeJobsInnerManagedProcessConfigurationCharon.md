---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-charon
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-charon
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon']
---


# ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon

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
$ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon = Initialize-ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon  -Version 3047 `
 -Path sailpoint/charon `
 -Description version of charon used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon | ConvertTo-JSON
```


[[Back to top]](#) 

