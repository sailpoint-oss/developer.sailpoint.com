---
id: beta-identity-ownership-association-details-association-details-inner
title: IdentityOwnershipAssociationDetailsAssociationDetailsInner
pagination_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner', 'BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/beta/models/identity-ownership-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner', 'BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner']
---


# IdentityOwnershipAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | **String** | association type with the identity | [optional] 
**Entities** | [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityOwnershipAssociationDetailsAssociationDetailsInner = Initialize-PSSailpoint.BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner  -AssociationType ROLE_OWNER `
 -Entities {id&#x3D;b660a232f05b4e04812ca974b3011e0f, name&#x3D;Gaston.800ddf9640a, type&#x3D;ROLE}
```

- Convert the resource to JSON
```powershell
$IdentityOwnershipAssociationDetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

