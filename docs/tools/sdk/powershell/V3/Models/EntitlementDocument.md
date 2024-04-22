---
id: entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementDocument'] 
slug: /tools/sdk/powershell/v3/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument']
---


# EntitlementDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** |  | 
**Name** |  **String** |  | 
**Type** |  [**DocumentType**](document-type) |  | 
**Modified** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** |  Pointer to **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**DisplayName** |  Pointer to **String** | Entitlement&#39;s display name. | [optional] 
**Source** |  Pointer to [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**Segments** |  Pointer to [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** |  Pointer to **Int32** | Number of segments with the role. | [optional] 
**Requestable** |  Pointer to **Boolean** | Indicates whether the entitlement is requestable. | [optional] [default to $false]
**CloudGoverned** |  Pointer to **Boolean** | Indicates whether the entitlement is cloud governed. | [optional] [default to $false]
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Privileged** |  Pointer to **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**IdentityCount** |  Pointer to **Int32** | Number of identities who have access to the entitlement. | [optional] 
**Tags** |  Pointer to **[]String** | Tags that have been applied to the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocument = Initialize-EntitlementDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
 -Type null `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced null `
 -DisplayName Admin `
 -Source null `
 -Segments null `
 -SegmentCount 1 `
 -Requestable false `
 -CloudGoverned false `
 -Created 2018-06-25T20:22:28.104Z `
 -Privileged false `
 -IdentityCount 3 `
 -Tags [TAG_1, TAG_2]
```

- Convert the resource to JSON
```powershell
$EntitlementDocument | ConvertTo-JSON
```


[[Back to top]](#) 

