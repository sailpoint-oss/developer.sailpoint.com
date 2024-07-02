---
id: public-identity
title: PublicIdentity
pagination_label: PublicIdentity
sidebar_label: PublicIdentity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PublicIdentity'] 
slug: /tools/sdk/powershell/v3/models/public-identity
tags: ['SDK', 'Software Development Kit', 'PublicIdentity']
---


# PublicIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Identity id | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of identity. | [optional] 
**Alias** |  Pointer to **String** | Alternate unique identifier for the identity. | [optional] 
**Email** |  Pointer to **String** | Email address of identity. | [optional] 
**Status** |  Pointer to **String** | The lifecycle status for the identity | [optional] 
**IdentityState** |  Pointer to  **Enum** [  "ACTIVE",    "INACTIVE_SHORT_TERM",    "INACTIVE_LONG_TERM",    "null" ] | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [optional] 
**Manager** |  Pointer to [**IdentityReference**](identity-reference) |  | [optional] 
**Attributes** |  Pointer to [**[]IdentityAttribute1**](identity-attribute1) | The public identity attributes of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentity = Initialize-PublicIdentity  -Id 2c9180857182305e0171993735622948 `
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
$PublicIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

