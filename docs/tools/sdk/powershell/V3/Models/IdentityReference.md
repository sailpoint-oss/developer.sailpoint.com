---
id: identity-reference
title: IdentityReference
pagination_label: IdentityReference
sidebar_label: IdentityReference
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityReference'] 
slug: /tools/sdk/powershell/v3/models/identity-reference
tags: ['SDK', 'Software Development Kit', 'IdentityReference']
---


# IdentityReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **String** | Identity id | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityReference = Initialize-IdentityReference  -Type null `
 -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name Thomas Edison
```

- Convert the resource to JSON
```powershell
$IdentityReference | ConvertTo-JSON
```


[[Back to top]](#) 

