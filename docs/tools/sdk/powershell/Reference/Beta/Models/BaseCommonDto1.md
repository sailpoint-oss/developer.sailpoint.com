---
id: beta-base-common-dto1
title: BaseCommonDto1
pagination_label: BaseCommonDto1
sidebar_label: BaseCommonDto1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseCommonDto1', 'BetaBaseCommonDto1'] 
slug: /tools/sdk/powershell/beta/models/base-common-dto1
tags: ['SDK', 'Software Development Kit', 'BaseCommonDto1', 'BetaBaseCommonDto1']
---


# BaseCommonDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$BaseCommonDto1 = Initialize-BetaBaseCommonDto1  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$BaseCommonDto1 | ConvertTo-JSON
```


[[Back to top]](#) 

