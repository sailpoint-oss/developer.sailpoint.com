---
id: role-document
title: RoleDocument
pagination_label: RoleDocument
sidebar_label: RoleDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocument'] 
slug: /tools/sdk/powershell/v2024/models/role-document
tags: ['SDK', 'Software Development Kit', 'RoleDocument']
---


# RoleDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the referenced object. | [required]
**Name** |  **String** | The human readable name of the referenced object. | [required]
**Type** |  [**DocumentType**](document-type) |  | [required]
**Description** |  Pointer to **String** | Access item's description. | [optional] 
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** |  Pointer to **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** |  Pointer to **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** |  Pointer to **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** |  Pointer to [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 
**AccessProfiles** |  Pointer to [**[]BaseAccessProfile**](base-access-profile) | Access profiles included with the role. | [optional] 
**AccessProfileCount** |  Pointer to **Int32** | Number of access profiles included with the role. | [optional] 
**Tags** |  Pointer to **[]String** | Tags that have been applied to the object. | [optional] 
**Segments** |  Pointer to [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** |  Pointer to **Int32** | Number of segments with the role. | [optional] 
**Entitlements** |  Pointer to [**[]BaseEntitlement**](base-entitlement) | Entitlements included with the role. | [optional] 
**EntitlementCount** |  Pointer to **Int32** | Number of entitlements included with the role. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocument = Initialize-PSSailpoint.V2024RoleDocument  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type null `
 -Description The admin role `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -AccessProfiles null `
 -AccessProfileCount 1 `
 -Tags [TAG_1, TAG_2] `
 -Segments null `
 -SegmentCount 1 `
 -Entitlements null `
 -EntitlementCount 3
```

- Convert the resource to JSON
```powershell
$RoleDocument | ConvertTo-JSON
```


[[Back to top]](#) 

