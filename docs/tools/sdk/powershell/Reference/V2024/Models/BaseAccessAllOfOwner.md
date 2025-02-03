---
id: v2024-base-access-all-of-owner
title: BaseAccessAllOfOwner
pagination_label: BaseAccessAllOfOwner
sidebar_label: BaseAccessAllOfOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccessAllOfOwner', 'V2024BaseAccessAllOfOwner'] 
slug: /tools/sdk/powershell/v2024/models/base-access-all-of-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessAllOfOwner', 'V2024BaseAccessAllOfOwner']
---


# BaseAccessAllOfOwner

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

