---
id: field
title: Field
pagination_label: Field
sidebar_label: Field
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Field'] 
slug: /tools/sdk/powershell/beta/models/field
tags: ['SDK', 'Software Development Kit', 'Field']
---


# Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 
**DisplayName** |  Pointer to **String** | Display name of the field | [optional] 
**DisplayType** |  Pointer to **String** | Type of the field to display | [optional] 
**Required** |  Pointer to **Boolean** | True if the field is required | [optional] 
**AllowedValuesList** |  Pointer to [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of allowed values for the field | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Value of the field | [optional] 

## Examples

- Prepare the resource
```powershell
$Field = Initialize-PSSailpoint.BetaField  -Name Field1 `
 -DisplayName Field 1 `
 -DisplayType checkbox `
 -Required null `
 -AllowedValuesList [{Val1Display&#x3D;null, Val1Value&#x3D;null}, {Val2Display&#x3D;null, Val2Value&#x3D;null}] `
 -Value null
```

- Convert the resource to JSON
```powershell
$Field | ConvertTo-JSON
```


[[Back to top]](#) 

