---
id: v2024-identity-manager-ref
title: IdentityManagerRef
pagination_label: IdentityManagerRef
sidebar_label: IdentityManagerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityManagerRef', 'V2024IdentityManagerRef'] 
slug: /tools/sdk/powershell/v2024/models/identity-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityManagerRef', 'V2024IdentityManagerRef']
---


# IdentityManagerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity's manager | [optional] 
**Id** | **String** | ID of identity's manager | [optional] 
**Name** | **String** | Human-readable display name of identity's manager | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityManagerRef = Initialize-PSSailpoint.V2024IdentityManagerRef  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityManagerRef | ConvertTo-JSON
```


[[Back to top]](#) 

