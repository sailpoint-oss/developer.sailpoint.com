---
id: identity
title: Identity
pagination_label: Identity
sidebar_label: Identity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identity'] 
slug: /tools/sdk/powershell/v2024/models/identity
tags: ['SDK', 'Software Development Kit', 'Identity']
---


# Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the identity | [optional] [readonly] 
**Name** |  **String** | The identity's name is equivalent to its Display Name attribute. | [required]
**Created** |  Pointer to **System.DateTime** | Creation date of the identity | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the identity | [optional] [readonly] 
**Alias** |  Pointer to **String** | The identity's alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [optional] 
**EmailAddress** |  Pointer to **String** | The email address of the identity | [optional] 
**ProcessingState** |  Pointer to  **Enum** [  "ERROR",    "OK" ] | The processing state of the identity | [optional] 
**IdentityStatus** |  Pointer to  **Enum** [  "UNREGISTERED",    "REGISTERED",    "PENDING",    "WARNING",    "DISABLED",    "ACTIVE",    "DEACTIVATED",    "TERMINATED",    "ERROR",    "LOCKED" ] | The identity's status in the system | [optional] 
**ManagerRef** |  Pointer to [**IdentityManagerRef**](identity-manager-ref) |  | [optional] 
**IsManager** |  Pointer to **Boolean** | Whether this identity is a manager of another identity | [optional] [default to $false]
**LastRefresh** |  Pointer to **System.DateTime** | The last time the identity was refreshed by the system | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A map with the identity attributes for the identity | [optional] 
**LifecycleState** |  Pointer to [**IdentityLifecycleState**](identity-lifecycle-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identity = Initialize-PSSailpoint.V2024Identity  -Id 01f04e428c484542a241dc89c303b178 `
 -Name Walter White `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Alias walter.white `
 -EmailAddress walter.white@example.com `
 -ProcessingState ERROR `
 -IdentityStatus LOCKED `
 -ManagerRef null `
 -IsManager true `
 -LastRefresh 2020-11-22T15:42:31.123Z `
 -Attributes {uid&#x3D;86754, firstname&#x3D;Walter, cloudStatus&#x3D;UNREGISTERED, displayName&#x3D;Walter White, identificationNumber&#x3D;86754, lastSyncDate&#x3D;1470348809380, email&#x3D;walter.white@example.com, lastname&#x3D;White} `
 -LifecycleState null
```

- Convert the resource to JSON
```powershell
$Identity | ConvertTo-JSON
```


[[Back to top]](#) 

