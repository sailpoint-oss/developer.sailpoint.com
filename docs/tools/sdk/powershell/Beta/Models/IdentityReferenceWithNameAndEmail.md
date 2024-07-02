---
id: identity-reference-with-name-and-email
title: IdentityReferenceWithNameAndEmail
pagination_label: IdentityReferenceWithNameAndEmail
sidebar_label: IdentityReferenceWithNameAndEmail
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityReferenceWithNameAndEmail'] 
slug: /tools/sdk/powershell/beta/models/identity-reference-with-name-and-email
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithNameAndEmail']
---


# IdentityReferenceWithNameAndEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **String** | The type can only be IDENTITY. This is read-only | [optional] 
**Id** |  Pointer to **String** | Identity id. | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity. This is read-only | [optional] 
**Email** |  Pointer to **String** | Email address of identity. This is read-only | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityReferenceWithNameAndEmail = Initialize-BetaIdentityReferenceWithNameAndEmail  -Type IDENTITY `
 -Id 5168015d32f890ca15812c9180835d2e `
 -Name Alison Ferguso `
 -Email alison.ferguso@identitysoon.com
```

- Convert the resource to JSON
```powershell
$IdentityReferenceWithNameAndEmail | ConvertTo-JSON
```


[[Back to top]](#) 

