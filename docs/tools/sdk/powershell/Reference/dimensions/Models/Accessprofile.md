---
id: accessprofile
title: Accessprofile
pagination_label: Accessprofile
sidebar_label: Accessprofile
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessprofile', 'Accessprofile'] 
slug: /tools/sdk/powershell/dimensions/models/accessprofile
tags: ['SDK', 'Software Development Kit', 'Accessprofile', 'Accessprofile']
---


# Accessprofile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile ID. | [optional] [readonly] 
**Name** | **String** | Access profile name. | [required]
**Description** | **String** | Access profile description. | [optional] 
**Created** | **System.DateTime** | Date and time when the access profile was created. | [optional] [readonly] 
**Modified** | **System.DateTime** | Date and time when the access profile was last modified. | [optional] [readonly] 
**Enabled** | **Boolean** | Indicates whether the access profile is enabled. If it's enabled, you must include at least one entitlement. | [optional] [default to $false]
**Owner** | [**Ownerreference**](ownerreference) |  | [required]
**Source** | [**Accessprofilesourceref**](accessprofilesourceref) |  | [required]
**Entitlements** | [**[]Entitlementref**](entitlementref) | List of entitlements associated with the access profile. If `enabled` is false, this can be empty. Otherwise, it must contain at least one entitlement. | [optional] 
**Requestable** | **Boolean** | Indicates whether the access profile is requestable by access request. Currently, making an access profile non-requestable is only supported  for customers enabled with the new Request Center. Otherwise, attempting to create an access profile with a value  **false** in this field results in a 400 error. | [optional] [default to $true]
**AccessRequestConfig** | [**Requestability**](requestability) |  | [optional] 
**RevocationRequestConfig** | [**Revocability**](revocability) |  | [optional] 
**Segments** | **[]String** | List of segment IDs, if any, that the access profile is assigned to. | [optional] 
**AccessModelMetadata** | [**Attributedtolist**](attributedtolist) |  | [optional] 
**ProvisioningCriteria** | [**Provisioningcriterialevel1**](provisioningcriterialevel1) |  | [optional] 
**AdditionalOwners** | [**[]Additionalownerref**](additionalownerref) | List of additional owner references beyond the primary owner. Each entry may be an identity (IDENTITY) or a governance group (GOVERNANCE_GROUP). | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessprofile = Initialize-Accessprofile  -Id 2c91808a7190d06e01719938fcd20792 `
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
 -Segments ["f7b1b8a3-5fed-4fd4-ad29-82014e137e19","29cb6c06-1da8-43ea-8be4-b3125f248f2a"] `
 -AccessModelMetadata null `
 -ProvisioningCriteria null `
 -AdditionalOwners null
```

- Convert the resource to JSON
```powershell
$Accessprofile | ConvertTo-JSON
```


[[Back to top]](#) 

