---
id: v2024-access-profile-document
title: AccessProfileDocument
pagination_label: AccessProfileDocument
sidebar_label: AccessProfileDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessProfileDocument', 'V2024AccessProfileDocument'] 
slug: /tools/sdk/powershell/v2024/models/access-profile-document
tags: ['SDK', 'Software Development Kit', 'AccessProfileDocument', 'V2024AccessProfileDocument']
---


# AccessProfileDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile's ID. | [required]
**Name** | **String** | Access profile's name. | [required]
**Description** | **String** | Access item's description. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** | **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** | **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** | **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** | [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 
**Type** |  **Enum** [  "accessprofile",    "accountactivity",    "account",    "aggregation",    "entitlement",    "event",    "identity",    "role" ] | Access profile's document type.  This enum represents the currently supported document types. Additional values may be added in the future without notice. | [required]
**Source** | [**AccessProfileDocumentAllOfSource**](access-profile-document-all-of-source) |  | [optional] 
**Entitlements** | [**[]BaseEntitlement**](base-entitlement) | Entitlements the access profile has access to. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfileDocument = Initialize-PSSailpoint.V2024AccessProfileDocument  -Id 2c9180825a6c1adc015a71c9023f0818 `
 -Name Cloud Eng `
 -Description The admin role `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Type accessprofile `
 -Source null `
 -Entitlements null `
 -EntitlementCount 5 `
 -Tags [TAG_1, TAG_2]
```

- Convert the resource to JSON
```powershell
$AccessProfileDocument | ConvertTo-JSON
```


[[Back to top]](#) 

