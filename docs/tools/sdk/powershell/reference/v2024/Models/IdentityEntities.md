---
id: identity-entities
title: IdentityEntities
pagination_label: IdentityEntities
sidebar_label: IdentityEntities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntities'] 
slug: /tools/sdk/powershell/v2024/models/identity-entities
tags: ['SDK', 'Software Development Kit', 'IdentityEntities']
---


# IdentityEntities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityEntity** |  Pointer to [**IdentityEntitiesIdentityEntity**](identity-entities-identity-entity) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntities = Initialize-PSSailpoint.V2024IdentityEntities  -IdentityEntity null
```

- Convert the resource to JSON
```powershell
$IdentityEntities | ConvertTo-JSON
```


[[Back to top]](#) 

