---
id: identity-attribute-names
title: IdentityAttributeNames
pagination_label: IdentityAttributeNames
sidebar_label: IdentityAttributeNames
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributeNames'] 
slug: /tools/sdk/powershell/beta/models/identity-attribute-names
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeNames']
---


# IdentityAttributeNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]String** | List of identity attributes&#39; technical names | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeNames = Initialize-BetaIdentityAttributeNames  -Ids [name, displayName]
```

- Convert the resource to JSON
```powershell
$IdentityAttributeNames | ConvertTo-JSON
```


[[Back to top]](#) 

