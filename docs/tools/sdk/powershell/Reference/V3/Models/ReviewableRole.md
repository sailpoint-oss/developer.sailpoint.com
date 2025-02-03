---
id: reviewable-role
title: ReviewableRole
pagination_label: ReviewableRole
sidebar_label: ReviewableRole
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReviewableRole', 'ReviewableRole'] 
slug: /tools/sdk/powershell/v3/models/reviewable-role
tags: ['SDK', 'Software Development Kit', 'ReviewableRole', 'ReviewableRole']
---


# ReviewableRole

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the Role | [optional] 
**Name** | **String** | The name of the Role | [optional] 
**Description** | **String** | Information about the Role | [optional] 
**Privileged** | **Boolean** | Indicates if the entitlement is a privileged entitlement | [optional] 
**Owner** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 
**Revocable** | **Boolean** | Indicates whether the Role can be revoked or requested | [optional] 
**EndDate** | **System.DateTime** | The date when a user's access expires. | [optional] 
**AccessProfiles** | [**[]ReviewableAccessProfile**](reviewable-access-profile) | The list of Access Profiles associated with this Role | [optional] 
**Entitlements** | [**[]ReviewableEntitlement**](reviewable-entitlement) | The list of entitlements associated with this Role | [optional] 

## Examples

- Prepare the resource
```powershell
$ReviewableRole = Initialize-PSSailpoint.V3ReviewableRole  -Id 2c91808a7190d06e0171993907fd0794 `
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

