---
id: sod-violation-check
title: SodViolationCheck
pagination_label: SodViolationCheck
sidebar_label: SodViolationCheck
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationCheck'] 
slug: /tools/sdk/powershell/v3/models/sod-violation-check
tags: ['SDK', 'Software Development Kit', 'SodViolationCheck']
---


# SodViolationCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  **String** | The id of the original request | 
**Created** |  Pointer to **System.DateTime** | The date-time when this request was created. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$SodViolationCheck = Initialize-PSSailpointSodViolationCheck  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Created 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$SodViolationCheck | ConvertTo-JSON
```


[[Back to top]](#) 

