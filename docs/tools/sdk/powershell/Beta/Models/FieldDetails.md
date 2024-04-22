---
id: field-details
title: FieldDetails
pagination_label: FieldDetails
sidebar_label: FieldDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FieldDetails'] 
slug: /tools/sdk/powershell/beta/models/field-details
tags: ['SDK', 'Software Development Kit', 'FieldDetails']
---


# FieldDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Name of the FormItem | [optional] 
**DisplayName** |  Pointer to **String** | Display name of the field | [optional] 
**DisplayType** |  Pointer to **String** | Type of the field to display | [optional] 
**Required** |  Pointer to **Boolean** | True if the field is required | [optional] 
**AllowedValuesList** |  Pointer to [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | List of allowed values for the field | [optional] 
**Value** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | Value of the field | [optional] 

## Examples

- Prepare the resource
```powershell
$FieldDetails = Initialize-BetaFieldDetails  -Name Field1 `
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

