---
id: clustermanualupgrade-jobs-inner-managed-process-configuration
title: ClustermanualupgradeJobsInnerManagedProcessConfiguration
pagination_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_label: ClustermanualupgradeJobsInnerManagedProcessConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration'] 
slug: /tools/sdk/powershell/managedclusters/models/clustermanualupgrade-jobs-inner-managed-process-configuration
tags: ['SDK', 'Software Development Kit', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration', 'ClustermanualupgradeJobsInnerManagedProcessConfiguration']
---


# ClustermanualupgradeJobsInnerManagedProcessConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charon** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCharon**](clustermanualupgrade-jobs-inner-managed-process-configuration-charon) |  | [optional] 
**Ccg** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationCcg**](clustermanualupgrade-jobs-inner-managed-process-configuration-ccg) |  | [optional] 
**OtelAgent** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationOtelAgent**](clustermanualupgrade-jobs-inner-managed-process-configuration-otel-agent) |  | [optional] 
**Relay** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationRelay**](clustermanualupgrade-jobs-inner-managed-process-configuration-relay) |  | [optional] 
**Toolbox** | [**ClustermanualupgradeJobsInnerManagedProcessConfigurationToolbox**](clustermanualupgrade-jobs-inner-managed-process-configuration-toolbox) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfiguration = Initialize-ClustermanualupgradeJobsInnerManagedProcessConfiguration  -Charon null `
 -Ccg null `
 -OtelAgent null `
 -Relay null `
 -Toolbox null
```

- Convert the resource to JSON
```powershell
$ClustermanualupgradeJobsInnerManagedProcessConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

