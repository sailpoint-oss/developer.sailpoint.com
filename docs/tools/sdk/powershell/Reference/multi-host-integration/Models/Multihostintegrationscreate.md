---
id: multihostintegrationscreate
title: Multihostintegrationscreate
pagination_label: Multihostintegrationscreate
sidebar_label: Multihostintegrationscreate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Multihostintegrationscreate', 'Multihostintegrationscreate'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrationscreate
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationscreate', 'Multihostintegrationscreate']
---


# Multihostintegrationscreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Multi-Host Integration's human-readable name. | [required]
**Description** | **String** | Multi-Host Integration's human-readable description. | [required]
**Owner** | [**MultihostintegrationsOwner**](multihostintegrations-owner) |  | [required]
**Cluster** | [**MultihostintegrationsCluster**](multihostintegrations-cluster) |  | [optional] 
**Connector** | **String** | Connector script name. | [required]
**ConnectorAttributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Multi-Host Integration specific configuration. User can add any number of additional attributes. e.g. maxSourcesPerAggGroup, maxAllowedSources etc. | [optional] 
**ManagementWorkgroup** | [**MultihostintegrationsManagementWorkgroup**](multihostintegrations-management-workgroup) |  | [optional] 
**Created** | **System.DateTime** | Date-time when the source was created | [optional] 
**Modified** | **System.DateTime** | Date-time when the source was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$Multihostintegrationscreate = Initialize-Multihostintegrationscreate  -Name My Multi-Host Integration `
 -Description This is the Multi-Host Integration. `
 -Owner null `
 -Cluster null `
 -Connector multihost-microsoft-sql-server `
 -ConnectorAttributes {"maxSourcesPerAggGroup":10,"maxAllowedSources":300} `
 -ManagementWorkgroup null `
 -Created 2022-02-08T14:50:03.827Z `
 -Modified 2024-01-23T18:08:50.897Z
```

- Convert the resource to JSON
```powershell
$Multihostintegrationscreate | ConvertTo-JSON
```


[[Back to top]](#) 

