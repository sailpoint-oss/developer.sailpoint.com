---
id: beta-identity-ownership-association-details
title: IdentityOwnershipAssociationDetails
pagination_label: IdentityOwnershipAssociationDetails
sidebar_label: IdentityOwnershipAssociationDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityOwnershipAssociationDetails', 'BetaIdentityOwnershipAssociationDetails'] 
slug: /tools/sdk/powershell/beta/models/identity-ownership-association-details
tags: ['SDK', 'Software Development Kit', 'IdentityOwnershipAssociationDetails', 'BetaIdentityOwnershipAssociationDetails']
---


# IdentityOwnershipAssociationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociationDetails** | [**[]IdentityOwnershipAssociationDetailsAssociationDetailsInner**](identity-ownership-association-details-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityOwnershipAssociationDetails = Initialize-BetaIdentityOwnershipAssociationDetails  -AssociationDetails null
```

- Convert the resource to JSON
```powershell
$IdentityOwnershipAssociationDetails | ConvertTo-JSON
```


[[Back to top]](#) 

