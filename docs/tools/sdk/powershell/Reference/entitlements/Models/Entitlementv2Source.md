---
id: entitlementv2-source
title: Entitlementv2Source
pagination_label: Entitlementv2Source
sidebar_label: Entitlementv2Source
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementv2Source', 'Entitlementv2Source'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementv2-source
tags: ['SDK', 'Software Development Kit', 'Entitlementv2Source', 'Entitlementv2Source']
---


# Entitlementv2Source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The source ID | [optional] 
**Type** | **String** | The source type, will always be ""SOURCE"" | [optional] 
**Name** | **String** | The source name | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementv2Source = Initialize-Entitlementv2Source  -Id 2c9180827ca885d7017ca8ce28a000eb `
 -Type SOURCE `
 -Name ODS-AD-Source
```

- Convert the resource to JSON
```powershell
$Entitlementv2Source | ConvertTo-JSON
```


[[Back to top]](#) 

