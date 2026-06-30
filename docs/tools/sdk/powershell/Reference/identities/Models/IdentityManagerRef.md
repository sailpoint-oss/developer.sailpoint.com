---
id: identity-manager-ref
title: IdentityManagerRef
pagination_label: IdentityManagerRef
sidebar_label: IdentityManagerRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityManagerRef', 'IdentityManagerRef'] 
slug: /tools/sdk/powershell/identities/models/identity-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityManagerRef', 'IdentityManagerRef']
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
$IdentityManagerRef = Initialize-IdentityManagerRef  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityManagerRef | ConvertTo-JSON
```


[[Back to top]](#) 

