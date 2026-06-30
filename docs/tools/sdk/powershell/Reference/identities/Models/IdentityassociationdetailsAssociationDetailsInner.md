---
id: identityassociationdetails-association-details-inner
title: IdentityassociationdetailsAssociationDetailsInner
pagination_label: IdentityassociationdetailsAssociationDetailsInner
sidebar_label: IdentityassociationdetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityassociationdetailsAssociationDetailsInner', 'IdentityassociationdetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/identities/models/identityassociationdetails-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityassociationdetailsAssociationDetailsInner', 'IdentityassociationdetailsAssociationDetailsInner']
---


# IdentityassociationdetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | **String** | association type with the identity | [optional] 
**Entities** | [**[]Identityentities**](identityentities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityassociationdetailsAssociationDetailsInner = Initialize-IdentityassociationdetailsAssociationDetailsInner  -AssociationType CAMPAIGN_OWNER `
 -Entities {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"CAMPAIGN_CAMPAIGNER"}
```

- Convert the resource to JSON
```powershell
$IdentityassociationdetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

