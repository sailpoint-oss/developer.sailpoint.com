---
id: entitlement1-source
title: Entitlement1Source
pagination_label: Entitlement1Source
sidebar_label: Entitlement1Source
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlement1Source'] 
slug: /tools/sdk/powershell/v2024/models/entitlement1-source
tags: ['SDK', 'Software Development Kit', 'Entitlement1Source']
---


# Entitlement1Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The source ID | [optional] 
**Type** |  Pointer to **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** |  Pointer to **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlement1Source = Initialize-PSSailpoint.V2024Entitlement1Source  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$Entitlement1Source | ConvertTo-JSON
```


[[Back to top]](#) 

