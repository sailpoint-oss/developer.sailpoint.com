---
id: clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent
title: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent', 'ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent']
---


# ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent

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
$ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent = Initialize-ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent  -Version 3003 `
 -Path sailpoint/otel_agent `
 -Description version of otel_agent used by the va `
 -RestartNeeded true
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent | ConvertTo-JSON
```


[[Back to top]](#) 

