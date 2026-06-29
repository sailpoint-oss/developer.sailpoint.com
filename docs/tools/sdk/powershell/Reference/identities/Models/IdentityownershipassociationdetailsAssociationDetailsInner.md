---
id: identityownershipassociationdetails-association-details-inner
title: IdentityownershipassociationdetailsAssociationDetailsInner
pagination_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_label: IdentityownershipassociationdetailsAssociationDetailsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'IdentityownershipassociationdetailsAssociationDetailsInner'] 
slug: /tools/sdk/powershell/identities/models/identityownershipassociationdetails-association-details-inner
tags: ['SDK', 'Software Development Kit', 'IdentityownershipassociationdetailsAssociationDetailsInner', 'IdentityownershipassociationdetailsAssociationDetailsInner']
---


# IdentityownershipassociationdetailsAssociationDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationType** | **String** | association type with the identity | [optional] 
**Entities** | [**[]Identityentities**](identityentities) | the specific resource this identity has ownership on | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityownershipassociationdetailsAssociationDetailsInner = Initialize-IdentityownershipassociationdetailsAssociationDetailsInner  -AssociationType ROLE_OWNER `
 -Entities {"id":"b660a232f05b4e04812ca974b3011e0f","name":"Gaston.800ddf9640a","type":"ROLE"}
```

- Convert the resource to JSON
```powershell
$IdentityownershipassociationdetailsAssociationDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

