---
id: v2025-dimension-attribute
title: DimensionAttribute
pagination_label: DimensionAttribute
sidebar_label: DimensionAttribute
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DimensionAttribute', 'V2025DimensionAttribute'] 
slug: /tools/sdk/powershell/v2025/models/dimension-attribute
tags: ['SDK', 'Software Development Kit', 'DimensionAttribute', 'V2025DimensionAttribute']
---


# DimensionAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute | [optional] 
**DisplayName** | **String** | Display name of the attribute | [optional] 
**Derived** | **Boolean** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$DimensionAttribute = Initialize-V2025DimensionAttribute  -Name city `
 -DisplayName City `
 -Derived true
```

- Convert the resource to JSON
```powershell
$DimensionAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

