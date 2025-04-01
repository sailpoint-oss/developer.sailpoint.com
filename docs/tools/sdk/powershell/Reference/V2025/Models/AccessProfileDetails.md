---
id: v2025-access-profile-details
title: AccessProfileDetails
pagination_label: AccessProfileDetails
sidebar_label: AccessProfileDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDetails', 'V2025AccessProfileDetails'] 
slug: /tools/sdk/powershell/v2025/models/access-profile-details
tags: ['SDK', 'Software Development Kit', 'AccessProfileDetails', 'V2025AccessProfileDetails']
---


# AccessProfileDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the Access Profile | [optional] 
**Name** | **String** | Name of the Access Profile | [optional] 
**Description** | **String** | Information about the Access Profile | [optional] 
**Created** | **System.DateTime** | Date the Access Profile was created | [optional] 
**Modified** | **System.DateTime** | Date the Access Profile was last modified. | [optional] 
**Disabled** | **Boolean** | Whether the Access Profile is enabled. | [optional] [default to $true]
**Requestable** | **Boolean** | Whether the Access Profile is requestable via access request. | [optional] [default to $false]
**Protected** | **Boolean** | Whether the Access Profile is protected. | [optional] [default to $false]
**OwnerId** | **String** | The owner ID of the Access Profile | [optional] 
**SourceId** | **Int64** | The source ID of the Access Profile | [optional] 
**SourceName** | **String** | The source name of the Access Profile | [optional] 
**AppId** | **Int64** | The source app ID of the Access Profile | [optional] 
**AppName** | **String** | The source app name of the Access Profile | [optional] 
**ApplicationId** | **String** | The id of the application | [optional] 
**Type** | **String** | The type of the access profile | [optional] 
**Entitlements** | **[]String** | List of IDs of entitlements | [optional] 
**EntitlementCount** | **Int32** | The number of entitlements in the access profile | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Access Profile is assigned. | [optional] 
**ApprovalSchemes** | **String** | Comma-separated list of approval schemes. Each approval scheme is one of - manager - appOwner - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RevokeRequestApprovalSchemes** | **String** | Comma-separated list of revoke request approval schemes. Each approval scheme is one of - manager - sourceOwner - accessProfileOwner - workgroup:&lt;workgroupId&gt;  | [optional] 
**RequestCommentsRequired** | **Boolean** | Whether the access profile require request comment for access request. | [optional] [default to $false]
**DeniedCommentsRequired** | **Boolean** | Whether denied comment is required when access request is denied. | [optional] [default to $false]
**AccountSelector** | [**AccessProfileDetailsAccountSelector**](access-profile-details-account-selector) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDetails = Initialize-PSSailpoint.V2025AccessProfileDetails  -Id 2c91808a7190d06e01719938fcd20792 `
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

