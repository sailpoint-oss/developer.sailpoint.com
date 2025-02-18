---
id: access-profile-document
title: AccessProfileDocument
pagination_label: AccessProfileDocument
sidebar_label: AccessProfileDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDocument', 'AccessProfileDocument'] 
slug: /tools/sdk/powershell/v3/models/access-profile-document
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocument', 'AccessProfileDocument']
---


# AccessProfileDocument

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
**Id** | **String** | Access profile's ID. | [required]
**Name** | **String** | Access profile's name. | [required]
**Source** | [**AccessProfileDocumentAllOfSource**](access-profile-document-all-of-source) |  | [optional] 
**Entitlements** | [**[]BaseEntitlement**](base-entitlement) | Entitlements the access profile has access to. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements. | [optional] 
**Segments** | [**[]BaseSegment**](base-segment) | Segments with the access profile. | [optional] 
**SegmentCount** | **Int32** | Number of segments with the access profile. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**Apps** | [**[]AccessApps**](access-apps) | Applications with the access profile | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDocument = Initialize-PSSailpoint.V3AccessProfileDocument  -Description Admin access `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Id 2c9180825a6c1adc015a71c9023f0818 `
 -Name Cloud Eng `
 -Source null `
 -Entitlements null `
 -EntitlementCount 5 `
 -Segments null `
 -SegmentCount 1 `
 -Tags [TAG_1, TAG_2] `
 -Apps null
```

- Convert the resource to JSON
```powershell
$AccessProfileDocument | ConvertTo-JSON
```


[[Back to top]](#) 

