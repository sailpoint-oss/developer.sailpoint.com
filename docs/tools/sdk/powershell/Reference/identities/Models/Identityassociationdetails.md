---
id: identityassociationdetails
title: Identityassociationdetails
pagination_label: Identityassociationdetails
sidebar_label: Identityassociationdetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityassociationdetails', 'Identityassociationdetails'] 
slug: /tools/sdk/powershell/identities/models/identityassociationdetails
tags: ['SDK', 'Software Development Kit', 'Identityassociationdetails', 'Identityassociationdetails']
---


# Identityassociationdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | **String** | any additional context information of the http call result | [optional] 
**AssociationDetails** | [**[]IdentityassociationdetailsAssociationDetailsInner**](identityassociationdetails-association-details-inner) | list of all the resource associations for the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityassociationdetails = Initialize-Identityassociationdetails  -Message Identity cannot be deleted as it is owner of following resources `
 -AssociationDetails null
```

- Convert the resource to JSON
```powershell
$Identityassociationdetails | ConvertTo-JSON
```


[[Back to top]](#) 

