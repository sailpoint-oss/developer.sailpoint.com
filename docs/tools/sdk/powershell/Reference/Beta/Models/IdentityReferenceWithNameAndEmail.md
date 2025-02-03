---
id: beta-identity-reference-with-name-and-email
title: IdentityReferenceWithNameAndEmail
pagination_label: IdentityReferenceWithNameAndEmail
sidebar_label: IdentityReferenceWithNameAndEmail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityReferenceWithNameAndEmail', 'BetaIdentityReferenceWithNameAndEmail'] 
slug: /tools/sdk/powershell/beta/models/identity-reference-with-name-and-email
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithNameAndEmail', 'BetaIdentityReferenceWithNameAndEmail']
---


# IdentityReferenceWithNameAndEmail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The type can only be IDENTITY. This is read-only. | [optional] 
**Id** | **String** | Identity ID. | [optional] 
**Name** | **String** | Identity's human-readable display name. This is read-only. | [optional] 
**Email** | **String** | Identity's email address. This is read-only. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityReferenceWithNameAndEmail = Initialize-PSSailpoint.BetaIdentityReferenceWithNameAndEmail  -Type IDENTITY `
 -Id 5168015d32f890ca15812c9180835d2e `
 -Name Alison Ferguso `
 -Email alison.ferguso@identitysoon.com
```

- Convert the resource to JSON
```powershell
$IdentityReferenceWithNameAndEmail | ConvertTo-JSON
```


[[Back to top]](#) 

