---
id: beta-multi-host-integrations-create
title: MultiHostIntegrationsCreate
pagination_label: MultiHostIntegrationsCreate
sidebar_label: MultiHostIntegrationsCreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MultiHostIntegrationsCreate', 'BetaMultiHostIntegrationsCreate'] 
slug: /tools/sdk/powershell/beta/models/multi-host-integrations-create
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsCreate', 'BetaMultiHostIntegrationsCreate']
---


# MultiHostIntegrationsCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Multi-Host Integration's human-readable name. | [required]
**Description** | **String** | Multi-Host Integration's human-readable description. | [required]
**Owner** | [**MultiHostIntegrationsOwner**](multi-host-integrations-owner) |  | [required]
**Cluster** | [**MultiHostIntegrationsCluster**](multi-host-integrations-cluster) |  | [optional] 
**Connector** | **String** | Connector script name. | [required]
**ConnectorAttributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**ManagementWorkgroup** | [**MultiHostIntegrationsManagementWorkgroup**](multi-host-integrations-management-workgroup) |  | [optional] 
**Created** | **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** | **System.DateTime** | Date-time when the source was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationsCreate = Initialize-PSSailpoint.BetaMultiHostIntegrationsCreate  -Name My Multi-Host Integration `
 -Description This is the Multi-Host Integration. `
 -Owner null `
 -Cluster null `
 -Connector multihost-microsoft-sql-server `
 -ConnectorAttributes {maxSourcesPerAggGroup&#x3D;10, maxAllowedSources&#x3D;300} `
 -ManagementWorkgroup null `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationsCreate | ConvertTo-JSON
```


[[Back to top]](#) 

