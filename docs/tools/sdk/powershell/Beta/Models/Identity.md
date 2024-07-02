---
id: identity
title: Identity
pagination_label: Identity
sidebar_label: Identity
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Identity'] 
slug: /tools/sdk/powershell/beta/models/identity
tags: ['SDK', 'Software Development Kit', 'Identity']
---


# Identity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** |  **String** | Name of the Object | 
**Created** |  Pointer to **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**Alias** |  Pointer to **String** | Alternate unique identifier for the identity | [optional] 
**EmailAddress** |  Pointer to **String** | The email address of the identity | [optional] 
**ProcessingState** |  Pointer to  **Enum** [  "ERROR",    "OK",    "null" ] | The processing state of the identity | [optional] 
**IdentityStatus** |  Pointer to  **Enum** [  "UNREGISTERED",    "REGISTERED",    "PENDING",    "WARNING",    "DISABLED",    "ACTIVE",    "DEACTIVATED",    "TERMINATED",    "ERROR",    "LOCKED" ] | The identity&#39;s status in the system | [optional] 
**ManagerRef** |  Pointer to [**IdentityDtoManagerRef**](identity-dto-manager-ref) |  | [optional] 
**IsManager** |  Pointer to **Boolean** | Whether this identity is a manager of another identity | [optional] [default to $false]
**LastRefresh** |  Pointer to **System.DateTime** | The last time the identity was refreshed by the system | [optional] 
**Attributes** |  Pointer to [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0 | A map with the identity attributes for the identity | [optional] 
**LifecycleState** |  Pointer to [**IdentityDtoLifecycleState**](identity-dto-lifecycle-state) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Identity = Initialize-BetaIdentity  -Id id12345 `
 -Name aName `
 -Created 2023-01-03T21:16:22.432Z `
 -Modified 2023-01-03T21:16:22.432Z `
 -Alias walter.white `
 -EmailAddress sender@example.com `
 -ProcessingState ERROR `
 -IdentityStatus LOCKED `
 -ManagerRef null `
 -IsManager true `
 -LastRefresh 2020-11-22T15:42:31.123Z `
 -Attributes {"uid":"Walter White","firstname":"walter","cloudStatus":"UNREGISTERED","displayName":"Walter White","identificationNumber":"942","lastSyncDate":1470348809380,"email":"walter@gmail.com","lastname":"white"} `
 -LifecycleState null
```

- Convert the resource to JSON
```powershell
$Identity | ConvertTo-JSON
```


[[Back to top]](#) 

