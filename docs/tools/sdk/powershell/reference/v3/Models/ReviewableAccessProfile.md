---
id: reviewable-access-profile
title: ReviewableAccessProfile
pagination_label: ReviewableAccessProfile
sidebar_label: ReviewableAccessProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableAccessProfile'] 
slug: /tools/sdk/powershell/v3/models/reviewable-access-profile
tags: ['SDK', 'Software Development Kit', 'ReviewableAccessProfile']
---


# ReviewableAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id of the Access Profile | [optional] 
**Name** |  Pointer to **String** | Name of the Access Profile | [optional] 
**Description** |  Pointer to **String** | Information about the Access Profile | [optional] 
**Privileged** |  Pointer to **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] 
**CloudGoverned** |  Pointer to **Boolean** | True if the entitlement is cloud governed | [optional] 
**EndDate** |  Pointer to **System.DateTime** | The date at which a user's access expires | [optional] 
**Owner** |  Pointer to [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**Entitlements** |  Pointer to [**[]ReviewableEntitlement**](reviewable-entitlement) | A list of entitlements associated with this Access Profile | [optional] 
**Created** |  Pointer to **System.DateTime** | Date the Access Profile was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date the Access Profile was last modified. | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableAccessProfile = Initialize-PSSailpoint.V3ReviewableAccessProfile  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database `
 -Privileged false `
 -CloudGoverned false `
 -EndDate 2021-12-25T00:00Z `
 -Owner null `
 -Entitlements null `
 -Created 2021-01-01T22:32:58.104Z `
 -Modified 2021-02-01T22:32:58.104Z
```

- Convert the resource to JSON
```powershell
$ReviewableAccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 

