---
id: v2025-identity
title: Identity
pagination_label: Identity
sidebar_label: Identity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identity', 'V2025Identity'] 
slug: /tools/sdk/powershell/v2025/models/identity
tags: ['SDK', 'Software Development Kit', 'Identity', 'V2025Identity']
---


# Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the identity | [optional] [readonly] 
**Name** | **String** | The identity's name is equivalent to its Display Name attribute. | [required]
**Created** | **System.DateTime** | Creation date of the identity | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the identity | [optional] [readonly] 
**Alias** | **String** | The identity's alternate unique identifier is equivalent to its Account Name on the authoritative source account schema. | [optional] 
**EmailAddress** | **String** | The email address of the identity | [optional] 
**ProcessingState** |  **Enum** [  "ERROR",    "OK" ] | The processing state of the identity | [optional] 
**IdentityStatus** |  **Enum** [  "UNREGISTERED",    "REGISTERED",    "PENDING",    "WARNING",    "DISABLED",    "ACTIVE",    "DEACTIVATED",    "TERMINATED",    "ERROR",    "LOCKED" ] | The identity's status in the system | [optional] 
**ManagerRef** | [**IdentityManagerRef**](identity-manager-ref) |  | [optional] 
**IsManager** | **Boolean** | Whether this identity is a manager of another identity | [optional] [default to $false]
**LastRefresh** | **System.DateTime** | The last time the identity was refreshed by the system | [optional] 
**Attributes** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | A map with the identity attributes for the identity | [optional] 
**LifecycleState** | [**IdentityLifecycleState**](identity-lifecycle-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identity = Initialize-V2025Identity  -Id 01f04e428c484542a241dc89c303b178 `
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
 -Attributes {uid=86754, firstname=Walter, cloudStatus=UNREGISTERED, displayName=Walter White, identificationNumber=86754, lastSyncDate=1470348809380, email=walter.white@example.com, lastname=White} `
 -LifecycleState null
```

- Convert the resource to JSON
```powershell
$Identity | ConvertTo-JSON
```


[[Back to top]](#) 

