---
id: sodviolationcheck
title: Sodviolationcheck
pagination_label: Sodviolationcheck
sidebar_label: Sodviolationcheck
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodviolationcheck', 'Sodviolationcheck'] 
slug: /tools/sdk/powershell/sodviolations/models/sodviolationcheck
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheck', 'Sodviolationcheck']
---


# Sodviolationcheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The id of the original request | [required]
**Created** | **System.DateTime** | The date-time when this request was created. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Sodviolationcheck = Initialize-Sodviolationcheck  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Created 2020-01-01T00:00Z
```

- Convert the resource to JSON
```powershell
$Sodviolationcheck | ConvertTo-JSON
```


[[Back to top]](#) 

