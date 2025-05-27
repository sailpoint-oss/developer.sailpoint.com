---
id: beta-field
title: Field
pagination_label: Field
sidebar_label: Field
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Field', 'BetaField'] 
slug: /tools/sdk/powershell/beta/models/field
tags: ['SDK', 'Software Development Kit', 'Field', 'BetaField']
---


# Field

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 
**DisplayName** | **String** | Display name of the field | [optional] 
**DisplayType** | **String** | Type of the field to display | [optional] 
**Required** | **Boolean** | True if the field is required | [optional] 
**AllowedValuesList** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of allowed values for the field | [optional] 
**Value** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Value of the field | [optional] 

## Examples

- Prepare the resource
```powershell
$Field = Initialize-BetaField  -Name Field1 `
 -DisplayName Field 1 `
 -DisplayType checkbox `
 -Required null `
 -AllowedValuesList [{Val1Display=null, Val1Value=null}, {Val2Display=null, Val2Value=null}] `
 -Value null
```

- Convert the resource to JSON
```powershell
$Field | ConvertTo-JSON
```


[[Back to top]](#) 

