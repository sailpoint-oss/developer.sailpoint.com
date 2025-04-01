---
id: v2025-base-access-owner
title: BaseAccessOwner
pagination_label: BaseAccessOwner
sidebar_label: BaseAccessOwner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BaseAccessOwner', 'V2025BaseAccessOwner'] 
slug: /tools/sdk/powershell/v2025/models/base-access-owner
tags: ['SDK', 'Software Development Kit', 'BaseAccessOwner', 'V2025BaseAccessOwner']
---


# BaseAccessOwner

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
$BaseAccessOwner = Initialize-PSSailpoint.V2025BaseAccessOwner  -Type IDENTITY `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Support `
 -Email cloud-support@sailpoint.com
```

- Convert the resource to JSON
```powershell
$BaseAccessOwner | ConvertTo-JSON
```


[[Back to top]](#) 

