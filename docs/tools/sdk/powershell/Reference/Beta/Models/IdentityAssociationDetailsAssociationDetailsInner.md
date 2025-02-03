---
id: beta-identity-association-details-association-details-inner
title: IdentityAssociationDetailsAssociationDetailsInner
pagination_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAssociationDetailsAssociationDetailsInner', 'BetaIdentityAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/beta/models/identity-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetailsAssociationDetailsInner', 'BetaIdentityAssociationDetailsAssociationDetailsInner']
---


# IdentityAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | **String** | association type with the identity | [optional] 
**Entities** | [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAssociationDetailsAssociationDetailsInner = Initialize-PSSailpoint.BetaIdentityAssociationDetailsAssociationDetailsInner  -AssociationType CAMPAIGN_OWNER `
 -Entities {id&#x3D;b660a232f05b4e04812ca974b3011e0f, name&#x3D;Gaston.800ddf9640a, type&#x3D;CAMPAIGN_CAMPAIGNER}
```

- Convert the resource to JSON
```powershell
$IdentityAssociationDetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

