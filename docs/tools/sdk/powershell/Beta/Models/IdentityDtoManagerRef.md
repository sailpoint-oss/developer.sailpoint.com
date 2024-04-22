---
id: identity-dto-manager-ref
title: IdentityDtoManagerRef
pagination_label: IdentityDtoManagerRef
sidebar_label: IdentityDtoManagerRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDtoManagerRef'] 
slug: /tools/sdk/powershell/beta/models/identity-dto-manager-ref
tags: ['SDK', 'Software Development Kit', 'IdentityDtoManagerRef']
---


# IdentityDtoManagerRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "IDENTITY" ] | DTO type of identity&#39;s manager. | [optional] 
**Id** |  Pointer to **String** | ID of identity&#39;s manager. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity&#39;s manager. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDtoManagerRef = Initialize-BetaIdentityDtoManagerRef  -Type IDENTITY `
 -Id 2c4180a46faadee4016fb4e018c20626 `
 -Name Robert Robinson
```

- Convert the resource to JSON
```powershell
$IdentityDtoManagerRef | ConvertTo-JSON
```


[[Back to top]](#) 

