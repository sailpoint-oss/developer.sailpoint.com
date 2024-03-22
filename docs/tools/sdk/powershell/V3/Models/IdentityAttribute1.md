---
id: identity-attribute1
title: IdentityAttribute1
pagination_label: IdentityAttribute1
sidebar_label: IdentityAttribute1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttribute1'] 
slug: /tools/sdk/powershell/v3/models/identity-attribute1
tags: ['SDK', 'Software Development Kit', 'IdentityAttribute1']
---


# IdentityAttribute1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The attribute key | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the attribute | [optional] 
**Value** |  Pointer to **String** | The attribute value | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttribute1 = Initialize-PSSailpointIdentityAttribute1  -Key country `
 -Name Country `
 -Value US
```

- Convert the resource to JSON
```powershell
$IdentityAttribute1 | ConvertTo-JSON
```


[[Back to top]](#) 

