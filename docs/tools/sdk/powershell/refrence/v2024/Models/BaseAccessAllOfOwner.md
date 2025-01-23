---
id: base-access-all-of-owner
title: BaseAccessAllOfOwner
pagination_label: BaseAccessAllOfOwner
sidebar_label: BaseAccessAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccessAllOfOwner'] 
slug: /tools/sdk/powershell/v2024/models/base-access-all-of-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessAllOfOwner']
---


# BaseAccessAllOfOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | Owner's DTO type. | [optional] 
**Id** |  Pointer to **String** | Owner's identity ID. | [optional] 
**Name** |  Pointer to **String** | Owner's display name. | [optional] 
**Email** |  Pointer to **String** | Owner's email. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccessAllOfOwner = Initialize-PSSailpoint.V2024BaseAccessAllOfOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -Email cloud-support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$BaseAccessAllOfOwner | ConvertTo-JSON
```


[[Back to top]](#) 

