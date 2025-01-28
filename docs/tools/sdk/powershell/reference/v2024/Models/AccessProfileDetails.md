---
id: v2024-access-profile-details
title: AccessProfileDetails
pagination_label: AccessProfileDetails
sidebar_label: AccessProfileDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDetails', 'V2024AccessProfileDetails'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-details
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetails', 'V2024AccessProfileDetails']
---


# AccessProfileDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The ID of the Access Profile | [optional] 
**Name** |  Pointer to **String** | Name of the Access Profile | [optional] 
**Description** |  Pointer to **String** | Information about the Access Profile | [optional] 
**Created** |  Pointer to **System.DateTime** | Date the Access Profile was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Date the Access Profile was last modified. | [optional] 
**Disabled** |  Pointer to **Boolean** | Whether the Access Profile is enabled. | [optional] [default to $true]
**Requestable** |  Pointer to **Boolean** | Whether the Access Profile is requestable via access request. | [optional] [default to $false]
**Protected** |  Pointer to **Boolean** | Whether the Access Profile is protected. | [optional] [default to $false]
**OwnerId** |  Pointer to **String** | The owner ID of the Access Profile | [optional] 
**SourceId** |  Pointer to **Int64** | The source ID of the Access Profile | [optional] 
**SourceName** |  Pointer to **String** | The source name of the Access Profile | [optional] 
**AppId** |  Pointer to **Int64** | The source app ID of the Access Profile | [optional] 
**AppName** |  Pointer to **String** | The source app name of the Access Profile | [optional] 
**ApplicationId** |  Pointer to **String** | The id of the application | [optional] 
**Type** |  Pointer to **String** | The type of the access profile | [optional] 
**Entitlements** |  Pointer to **[]String** | List of IDs of entitlements | [optional] 
**EntitlementCount** |  Pointer to **Int32** | The number of entitlements in the access profile | [optional] 
**Segments** |  Pointer to **[]String** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ApprovalSchemes** |  Pointer to **String** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RevokeRequestApprovalSchemes** |  Pointer to **String** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RequestCommentsRequired** |  Pointer to **Boolean** | Whether the access profile require request comment for access request. | [optional] [default to $false]
**DeniedCommentsRequired** |  Pointer to **Boolean** | Whether denied comment is required when access request is denied. | [optional] [default to $false]
**AccountSelector** |  Pointer to [**AccessProfileDetailsAccountSelector**](access-profile-details-account-selector) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDetails = Initialize-PSSailpoint.V2024AccessProfileDetails  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database `
 -Created 2021-03-01T22:32:58.104Z `
 -Modified 2021-03-02T20:22:28.104Z `
 -Disabled true `
 -Requestable true `
 -Protected false `
 -OwnerId 9870808a7190d06e01719938fcd20792 `
 -SourceId 10360661 `
 -SourceName AD Source `
 -AppId 10360661 `
 -AppName mail app `
 -ApplicationId edcb0951812949d085b60cd8bf35bc78 `
 -Type source `
 -Entitlements [2c9180857725c14301772a93bb77242d, c9dc28e148a24d65b3ccb5fb8ca5ddd9] `
 -EntitlementCount 12 `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -ApprovalSchemes accessProfileOwner `
 -RevokeRequestApprovalSchemes accessProfileOwner `
 -RequestCommentsRequired true `
 -DeniedCommentsRequired true `
 -AccountSelector null
```

- Convert the resource to JSON
```powershell
$AccessProfileDetails | ConvertTo-JSON
```


[[Back to top]](#) 

