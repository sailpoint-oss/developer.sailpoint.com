---
id: v2024-identity-association-details-association-details-inner
title: IdentityAssociationDetailsAssociationDetailsInner
pagination_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_label: IdentityAssociationDetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAssociationDetailsAssociationDetailsInner', 'V2024IdentityAssociationDetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/v2024/models/identity-association-details-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityAssociationDetailsAssociationDetailsInner', 'V2024IdentityAssociationDetailsAssociationDetailsInner']
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
$IdentityAssociationDetailsAssociationDetailsInner = Initialize-V2024IdentityAssociationDetailsAssociationDetailsInner  -AssociationType CAMPAIGN_OWNER `
 -Entities {id=b660a232f05b4e04812ca974b3011e0f, name=Gaston.800ddf9640a, type=CAMPAIGN_CAMPAIGNER}
```

- Convert the resource to JSON
```powershell
$IdentityAssociationDetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

