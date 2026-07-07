---
id: publicidentity
title: Publicidentity
pagination_label: Publicidentity
sidebar_label: Publicidentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Publicidentity', 'Publicidentity'] 
slug: /tools/sdk/powershell/customuserlevels/models/publicidentity
tags: ['SDK', 'Software Development Kit', 'Publicidentity', 'Publicidentity']
---


# Publicidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 
**Alias** | **String** | Alternate unique identifier for the identity. | [optional] 
**Email** | **String** | Email address of identity. | [optional] 
**Status** | **String** | The lifecycle status for the identity | [optional] 
**IdentityState** |  **Enum** [  "ACTIVE",    "INACTIVE_SHORT_TERM",    "INACTIVE_LONG_TERM" ] | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [optional] 
**Manager** | [**Identityreference**](identityreference) |  | [optional] 
**Attributes** | [**[]PublicidentityAttributesInner**](publicidentity-attributes-inner) | The public identity attributes of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$Publicidentity = Initialize-Publicidentity  -Id 2c9180857182305e0171993735622948 `
 -Name Alison Ferguso `
 -Alias alison.ferguso `
 -Email alison.ferguso@acme-solar.com `
 -Status Active `
 -IdentityState ACTIVE `
 -Manager null `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$Publicidentity | ConvertTo-JSON
```


[[Back to top]](#) 

