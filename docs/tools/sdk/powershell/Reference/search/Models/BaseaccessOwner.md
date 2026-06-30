---
id: baseaccess-owner
title: BaseaccessOwner
pagination_label: BaseaccessOwner
sidebar_label: BaseaccessOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseaccessOwner', 'BaseaccessOwner'] 
slug: /tools/sdk/powershell/search/models/baseaccess-owner
tags: ['SDK', 'Software Development Kit', 'BaseaccessOwner', 'BaseaccessOwner']
---


# BaseaccessOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** | **String** | Owner's identity ID. | [optional] 
**Name** | **String** | Owner's display name. | [optional] 
**Email** | **String** | Owner's email. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseaccessOwner = Initialize-BaseaccessOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -Email cloud-support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$BaseaccessOwner | ConvertTo-JSON
```


[[Back to top]](#) 

