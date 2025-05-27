---
id: v2025-identity-entities-identity-entity
title: IdentityEntitiesIdentityEntity
pagination_label: IdentityEntitiesIdentityEntity
sidebar_label: IdentityEntitiesIdentityEntity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityEntitiesIdentityEntity', 'V2025IdentityEntitiesIdentityEntity'] 
slug: /tools/sdk/powershell/v2025/models/identity-entities-identity-entity
tags: ['SDK', 'Software Development Kit', 'IdentityEntitiesIdentityEntity', 'V2025IdentityEntitiesIdentityEntity']
---


# IdentityEntitiesIdentityEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | id of the resource to which the identity is associated | [optional] 
**Name** | **String** | name of the resource to which the identity is associated | [optional] 
**Type** | **String** | type of the resource to which the identity is associated | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityEntitiesIdentityEntity = Initialize-V2025IdentityEntitiesIdentityEntity  -Id 031034e97f094a4096c1be53f75f6b91 `
 -Name Gaston.800ddf9640a `
 -Type CAMPAIGN_CAMPAIGNER
```

- Convert the resource to JSON
```powershell
$IdentityEntitiesIdentityEntity | ConvertTo-JSON
```


[[Back to top]](#) 

