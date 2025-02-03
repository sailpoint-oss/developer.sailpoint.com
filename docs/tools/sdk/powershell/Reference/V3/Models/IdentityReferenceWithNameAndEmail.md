---
id: identity-reference-with-name-and-email
title: IdentityReferenceWithNameAndEmail
pagination_label: IdentityReferenceWithNameAndEmail
sidebar_label: IdentityReferenceWithNameAndEmail
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityReferenceWithNameAndEmail', 'IdentityReferenceWithNameAndEmail'] 
slug: /tools/sdk/powershell/v3/models/identity-reference-with-name-and-email
tags: ['SDK', 'Software Development Kit', 'IdentityReferenceWithNameAndEmail', 'IdentityReferenceWithNameAndEmail']
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
$IdentityReferenceWithNameAndEmail = Initialize-PSSailpoint.V3IdentityReferenceWithNameAndEmail  -Type IDENTITY `
 -Id 5168015d32f890ca15812c9180835d2e `
 -Name Alison Ferguso `
 -Email alison.ferguso@identitysoon.com
```

- Convert the resource to JSON
```powershell
$IdentityReferenceWithNameAndEmail | ConvertTo-JSON
```


[[Back to top]](#) 

