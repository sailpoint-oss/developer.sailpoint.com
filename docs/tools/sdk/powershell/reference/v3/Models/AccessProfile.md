---
id: access-profile
title: AccessProfile
pagination_label: AccessProfile
sidebar_label: AccessProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfile'] 
slug: /tools/sdk/powershell/v3/models/access-profile
tags: ['SDK', 'Software Development Kit', 'AccessProfile']
---


# AccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the Access Profile | [optional] [readonly] 
**Name** |  **String** | Name of the Access Profile | [required]
**Description** |  Pointer to **String** | Information about the Access Profile | [optional] 
**Created** |  Pointer to **System.DateTime** | Date the Access Profile was created | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Date the Access Profile was last modified. | [optional] [readonly] 
**Enabled** |  Pointer to **Boolean** | Whether the Access Profile is enabled. If the Access Profile is enabled then you must include at least one Entitlement. | [optional] [default to $true]
**Owner** |  [**OwnerReference**](owner-reference) |  | [required]
**Source** |  [**AccessProfileSourceRef**](access-profile-source-ref) |  | [required]
**Entitlements** |  Pointer to [**[]EntitlementRef**](entitlement-ref) | A list of entitlements associated with the Access Profile. If enabled is false this is allowed to be empty otherwise it needs to contain at least one Entitlement. | [optional] 
**Requestable** |  Pointer to **Boolean** | Whether the Access Profile is requestable via access request. Currently, making an Access Profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an Access Profile with a value  **false** in this field results in a 400 error. | [optional] [default to $true]
**AccessRequestConfig** |  Pointer to [**Requestability**](requestability) |  | [optional] 
**RevocationRequestConfig** |  Pointer to [**Revocability**](revocability) |  | [optional] 
**Segments** |  Pointer to **[]String** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ProvisioningCriteria** |  Pointer to [**ProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfile = Initialize-PSSailpoint.V3AccessProfile  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database `
 -Created 2021-03-01T22:32:58.104Z `
 -Modified 2021-03-02T20:22:28.104Z `
 -Enabled true `
 -Owner null `
 -Source null `
 -Entitlements null `
 -Requestable true `
 -AccessRequestConfig null `
 -RevocationRequestConfig null `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -ProvisioningCriteria null
```

- Convert the resource to JSON
```powershell
$AccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 

