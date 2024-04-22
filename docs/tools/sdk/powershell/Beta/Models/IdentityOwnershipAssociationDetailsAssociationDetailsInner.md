---
id: identity-ownership-association-details-association-details-inner
title: IdentityOwnershipAssociationDetailsAssociationDetailsInner
pagination_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityOwnershipAssociationDetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/beta/models/identity-ownership-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetailsAssociationDetailsInner']
---


# IdentityOwnershipAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** |  Pointer to **String** | association type with the identity | [optional] 
**Entities** |  Pointer to [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityOwnershipAssociationDetailsAssociationDetailsInner = Initialize-BetaIdentityOwnershipAssociationDetailsAssociationDetailsInner  -AssociationType ROLE_OWNER `
 -Entities {id=b660a232f05b4e04812ca974b3011e0f, name=Gaston.800ddf9640a, type=ROLE}
```

- Convert the resource to JSON
```powershell
$IdentityOwnershipAssociationDetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

