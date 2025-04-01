---
id: v2025-public-identity
title: PublicIdentity
pagination_label: PublicIdentity
sidebar_label: PublicIdentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentity', 'V2025PublicIdentity'] 
slug: /tools/sdk/powershell/v2025/models/public-identity
tags: ['SDK', 'Software Development Kit', 'PublicIdentity', 'V2025PublicIdentity']
---


# PublicIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity id | [optional] 
**Name** | **String** | Human-readable display name of identity. | [optional] 
**Alias** | **String** | Alternate unique identifier for the identity. | [optional] 
**Email** | **String** | Email address of identity. | [optional] 
**Status** | **String** | The lifecycle status for the identity | [optional] 
**IdentityState** |  **Enum** [  "ACTIVE",    "INACTIVE_SHORT_TERM",    "INACTIVE_LONG_TERM" ] | The current state of the identity, which determines how Identity Security Cloud interacts with the identity. An identity that is Active will be included identity picklists in Request Center, identity processing, and more. Identities that are Inactive will be excluded from these features.  | [optional] 
**Manager** | [**IdentityReference**](identity-reference) |  | [optional] 
**Attributes** | [**[]PublicIdentityAttributesInner**](public-identity-attributes-inner) | The public identity attributes of the identity | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentity = Initialize-PSSailpoint.V2025PublicIdentity  -Id 2c9180857182305e0171993735622948 `
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

