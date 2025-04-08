---
id: v2025-role-document
title: RoleDocument
pagination_label: RoleDocument
sidebar_label: RoleDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleDocument', 'V2025RoleDocument'] 
slug: /tools/sdk/powershell/v2025/models/role-document
tags: ['SDK', 'Software Development Kit', 'RoleDocument', 'V2025RoleDocument']
---


# RoleDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Access item's description. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** | **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** | **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** | [**BaseAccessOwner**](base-access-owner) |  | [optional] 
**Id** | **String** | ID of the role. | [required]
**Name** | **String** | Name of the role. | [required]
**AccessProfiles** | [**[]BaseAccessProfile**](base-access-profile) | Access profiles included with the role. | [optional] 
**AccessProfileCount** | **Int32** | Number of access profiles included with the role. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**Segments** | [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** | **Int32** | Number of segments with the role. | [optional] 
**Entitlements** | [**[]RoleDocumentAllOfEntitlements**](role-document-all-of-entitlements) | Entitlements included with the role. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements included with the role. | [optional] 
**Dimensional** | **Boolean** |  | [optional] [default to $false]
**DimensionSchemaAttributeCount** | **Int32** | Number of dimension attributes included with the role. | [optional] 
**DimensionSchemaAttributes** | [**[]RoleDocumentAllOfDimensionSchemaAttributes**](role-document-all-of-dimension-schema-attributes) | Dimension attributes included with the role. | [optional] 
**Dimensions** | [**[]RoleDocumentAllOfDimensions**](role-document-all-of-dimensions) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleDocument = Initialize-PSSailpoint.V2025RoleDocument  -Description Admin access `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name Branch Manager Access `
 -AccessProfiles null `
 -AccessProfileCount 1 `
 -Tags [TAG_1, TAG_2] `
 -Segments null `
 -SegmentCount 1 `
 -Entitlements null `
 -EntitlementCount 3 `
 -Dimensional false `
 -DimensionSchemaAttributeCount 3 `
 -DimensionSchemaAttributes null `
 -Dimensions null
```

- Convert the resource to JSON
```powershell
$RoleDocument | ConvertTo-JSON
```


[[Back to top]](#) 

