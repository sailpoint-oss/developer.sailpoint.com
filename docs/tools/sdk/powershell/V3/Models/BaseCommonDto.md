---
id: base-common-dto
title: BaseCommonDto
pagination_label: BaseCommonDto
sidebar_label: BaseCommonDto
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BaseCommonDto'] 
slug: /tools/sdk/powershell/v3/models/base-common-dto
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto']
---


# BaseCommonDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | 
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$BaseCommonDto = Initialize-BaseCommonDto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$BaseCommonDto | ConvertTo-JSON
```


[[Back to top]](#) 

