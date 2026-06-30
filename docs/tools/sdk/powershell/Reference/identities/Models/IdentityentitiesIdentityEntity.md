---
id: identityentities-identity-entity
title: IdentityentitiesIdentityEntity
pagination_label: IdentityentitiesIdentityEntity
sidebar_label: IdentityentitiesIdentityEntity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityentitiesIdentityEntity', 'IdentityentitiesIdentityEntity'] 
slug: /tools/sdk/powershell/identities/models/identityentities-identity-entity
tags: ['SDK', 'Software Development Kit', 'IdentityentitiesIdentityEntity', 'IdentityentitiesIdentityEntity']
---


# IdentityentitiesIdentityEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | id of the resource to which the identity is associated | [optional] 
**Name** | **String** | name of the resource to which the identity is associated | [optional] 
**Type** | **String** | type of the resource to which the identity is associated | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityentitiesIdentityEntity = Initialize-IdentityentitiesIdentityEntity  -Id 031034e97f094a4096c1be53f75f6b91 `
 -Name Gaston.800ddf9640a `
 -Type CAMPAIGN_CAMPAIGNER
```

- Convert the resource to JSON
```powershell
$IdentityentitiesIdentityEntity | ConvertTo-JSON
```


[[Back to top]](#) 

