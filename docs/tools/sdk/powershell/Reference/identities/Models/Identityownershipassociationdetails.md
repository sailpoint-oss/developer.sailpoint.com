---
id: identityownershipassociationdetails
title: Identityownershipassociationdetails
pagination_label: Identityownershipassociationdetails
sidebar_label: Identityownershipassociationdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityownershipassociationdetails', 'Identityownershipassociationdetails'] 
slug: /tools/sdk/powershell/identities/models/identityownershipassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityownershipassociationdetails', 'Identityownershipassociationdetails']
---


# Identityownershipassociationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationDetails** | [**[]IdentityownershipassociationdetailsAssociationDetailsInner**](identityownershipassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityownershipassociationdetails = Initialize-Identityownershipassociationdetails  -AssociationDetails null
```

- Convert the resource to JSON
```powershell
$Identityownershipassociationdetails | ConvertTo-JSON
```


[[Back to top]](#) 

