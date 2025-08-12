---
id: v2024-account-source
title: AccountSource
pagination_label: AccountSource
sidebar_label: AccountSource
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountSource', 'V2024AccountSource'] 
slug: /tools/sdk/powershell/v2024/models/account-source
tags: ['SDK', 'Software Development Kit', 'AccountSource', 'V2024AccountSource']
---


# AccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [optional] 
**Name** | **String** | The human readable name of the referenced object. | [optional] 
**Type** | **String** | Type of source returned. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountSource = Initialize-V2024AccountSource  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type Delimited File
```

- Convert the resource to JSON
```powershell
$AccountSource | ConvertTo-JSON
```


[[Back to top]](#) 

