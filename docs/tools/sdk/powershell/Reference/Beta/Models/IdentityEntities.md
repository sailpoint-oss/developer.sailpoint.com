---
id: beta-identity-entities
title: IdentityEntities
pagination_label: IdentityEntities
sidebar_label: IdentityEntities
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntities', 'BetaIdentityEntities'] 
slug: /tools/sdk/powershell/beta/models/identity-entities
tags: ['SDK', 'Software Development Kit', 'IdentityEntities', 'BetaIdentityEntities']
---


# IdentityEntities

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityEntity** | [**IdentityEntitiesIdentityEntity**](identity-entities-identity-entity) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntities = Initialize-BetaIdentityEntities  -IdentityEntity null
```

- Convert the resource to JSON
```powershell
$IdentityEntities | ConvertTo-JSON
```


[[Back to top]](#) 

