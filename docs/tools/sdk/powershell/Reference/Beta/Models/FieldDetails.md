---
id: beta-field-details
title: FieldDetails
pagination_label: FieldDetails
sidebar_label: FieldDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FieldDetails', 'BetaFieldDetails'] 
slug: /tools/sdk/powershell/beta/models/field-details
tags: ['SDK', 'Software Development Kit', 'FieldDetails', 'BetaFieldDetails']
---


# FieldDetails

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
$FieldDetails = Initialize-PSSailpoint.BetaFieldDetails  -Name Field1 `
 -DisplayName Field 1 `
 -DisplayType checkbox `
 -Required null `
 -AllowedValuesList [{Val1Display=null, Val1Value=null}, {Val2Display=null, Val2Value=null}] `
 -Value null
```

- Convert the resource to JSON
```powershell
$FieldDetails | ConvertTo-JSON
```


[[Back to top]](#) 

