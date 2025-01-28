---
id: v2024-reviewable-role
title: ReviewableRole
pagination_label: ReviewableRole
sidebar_label: ReviewableRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableRole', 'V2024ReviewableRole'] 
slug: /tools/sdk/powershell/v2024/models/reviewable-role
tags: ['SDK', 'Software Development Kit', 'ReviewableRole', 'V2024ReviewableRole']
---


# ReviewableRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id for the Role | [optional] 
**Name** |  Pointer to **String** | The name of the Role | [optional] 
**Description** |  Pointer to **String** | Information about the Role | [optional] 
**Privileged** |  Pointer to **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] 
**Owner** |  Pointer to [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**Revocable** |  Pointer to **Boolean** | Indicates whether the Role can be revoked or requested | [optional] 
**EndDate** |  Pointer to **System.DateTime** | The date when a user's access expires. | [optional] 
**AccessProfiles** |  Pointer to [**[]ReviewableAccessProfile**](reviewable-access-profile) | The list of Access Profiles associated with this Role | [optional] 
**Entitlements** |  Pointer to [**[]ReviewableEntitlement**](reviewable-entitlement) | The list of entitlements associated with this Role | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableRole = Initialize-PSSailpoint.V2024ReviewableRole  -Id 2c91808a7190d06e0171993907fd0794 `
 -Name Accounting-Employees `
 -Description Role for members of the accounting department with the necessary Access Profiles `
 -Privileged false `
 -Owner null `
 -Revocable false `
 -EndDate 2021-12-25T00:00Z `
 -AccessProfiles null `
 -Entitlements null
```

- Convert the resource to JSON
```powershell
$ReviewableRole | ConvertTo-JSON
```


[[Back to top]](#) 

