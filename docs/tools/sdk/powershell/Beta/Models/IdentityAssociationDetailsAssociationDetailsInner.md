---
id: identity-association-details-association-details-inner
title: IdentityAssociationDetailsAssociationDetailsInner
pagination_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/beta/models/identity-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetailsAssociationDetailsInner']
---


# IdentityAssociationDetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** |  Pointer to **String** | association type with the identity | [optional] 
**Entities** |  Pointer to [**[]IdentityEntities**](identity-entities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAssociationDetailsAssociationDetailsInner = Initialize-BetaIdentityAssociationDetailsAssociationDetailsInner  -AssociationType CAMPAIGN_OWNER `
 -Entities {id=b660a232f05b4e04812ca974b3011e0f, name=Gaston.800ddf9640a, type=CAMPAIGN_CAMPAIGNER}
```

- Convert the resource to JSON
```powershell
$IdentityAssociationDetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

