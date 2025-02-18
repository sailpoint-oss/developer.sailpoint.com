---
id: entitlement-document
title: EntitlementDocument
pagination_label: EntitlementDocument
sidebar_label: EntitlementDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementDocument', 'EntitlementDocument'] 
slug: /tools/sdk/powershell/v3/models/entitlement-document
tags: ['SDK', 'Software Development Kit', 'EntitlementDocument', 'EntitlementDocument']
---


# EntitlementDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the referenced object. | [required]
**Name** | **String** | The human readable name of the referenced object. | [required]
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** | **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**DisplayName** | **String** | Entitlement's display name. | [optional] 
**Source** | [**EntitlementDocumentAllOfSource**](entitlement-document-all-of-source) |  | [optional] 
**Segments** | [**[]BaseSegment**](base-segment) | Segments with the entitlement. | [optional] 
**SegmentCount** | **Int32** | Number of segments with the role. | [optional] 
**Requestable** | **Boolean** | Indicates whether the entitlement is requestable. | [optional] [default to $false]
**CloudGoverned** | **Boolean** | Indicates whether the entitlement is cloud governed. | [optional] [default to $false]
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Privileged** | **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**Attribute** | **String** | Attribute information for the entitlement. | [optional] 
**Value** | **String** | Value of the entitlement. | [optional] 
**SourceSchemaObjectType** | **String** | Source schema object type of the entitlement. | [optional] 
**Schema** | **String** | Schema type of the entitlement. | [optional] 
**Hash** | **String** | Read-only calculated hash value of an entitlement. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Attributes of the entitlement. | [optional] 
**TruncatedAttributes** | **[]String** | Truncated attributes of the entitlement. | [optional] 
**ContainsDataAccess** | **Boolean** | Indicates whether the entitlement contains data access. | [optional] [default to $false]
**ManuallyUpdatedFields** | [**EntitlementDocumentAllOfManuallyUpdatedFields**](entitlement-document-all-of-manually-updated-fields) |  | [optional] 
**Permissions** | [**[]EntitlementDocumentAllOfPermissions**](entitlement-document-all-of-permissions) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocument = Initialize-PSSailpoint.V3EntitlementDocument  -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name john.doe `
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
 -Tags [TAG_1, TAG_2] `
 -Attribute groups `
 -Value 1733ff75-441e-4327-9bfc-3ac445fd8cd1 `
 -SourceSchemaObjectType group `
 -Schema group `
 -Hash c6fab95235584cca98a454a2f51e5683bc77d6a0 `
 -Attributes null `
 -TruncatedAttributes null `
 -ContainsDataAccess null `
 -ManuallyUpdatedFields null `
 -Permissions null
```

- Convert the resource to JSON
```powershell
$EntitlementDocument | ConvertTo-JSON
```


[[Back to top]](#) 

