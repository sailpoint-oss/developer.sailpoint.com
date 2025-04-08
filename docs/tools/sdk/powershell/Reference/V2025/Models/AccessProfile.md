---
id: v2025-access-profile
title: AccessProfile
pagination_label: AccessProfile
sidebar_label: AccessProfile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfile', 'V2025AccessProfile'] 
slug: /tools/sdk/powershell/v2025/models/access-profile
tags: ['SDK', 'Software Development Kit', 'AccessProfile', 'V2025AccessProfile']
---


# AccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile ID. | [optional] [readonly] 
**Name** | **String** | Access profile name. | [required]
**Description** | **String** | Access profile description. | [optional] 
**Created** | **System.DateTime** | Date and time when the access profile was created. | [optional] [readonly] 
**Modified** | **System.DateTime** | Date and time when the access profile was last modified. | [optional] [readonly] 
**Enabled** | **Boolean** | Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement. | [optional] [default to $false]
**Owner** | [**OwnerReference**](owner-reference) |  | [required]
**Source** | [**AccessProfileSourceRef**](access-profile-source-ref) |  | [required]
**Entitlements** | [**[]EntitlementRef**](entitlement-ref) | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [optional] 
**Requestable** | **Boolean** | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [optional] [default to $true]
**AccessRequestConfig** | [**Requestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | [**Revocability**](revocability) |  | [optional] 
**Segments** | **[]String** | List of segment IDs, if any, that the access profile is assigned to. | [optional] 
**ProvisioningCriteria** | [**ProvisioningCriteriaLevel1**](provisioning-criteria-level1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfile = Initialize-PSSailpoint.V2025AccessProfile  -Id 2c91808a7190d06e01719938fcd20792 `
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

