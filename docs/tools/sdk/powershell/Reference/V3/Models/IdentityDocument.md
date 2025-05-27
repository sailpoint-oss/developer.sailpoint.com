---
id: identity-document
title: IdentityDocument
pagination_label: IdentityDocument
sidebar_label: IdentityDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityDocument', 'IdentityDocument'] 
slug: /tools/sdk/powershell/v3/models/identity-document
tags: ['SDK', 'Software Development Kit', 'IdentityDocument', 'IdentityDocument']
---


# IdentityDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the referenced object. | [required]
**Name** | **String** | The human readable name of the referenced object. | [required]
**DisplayName** | **String** | Identity's display name. | [optional] 
**FirstName** | **String** | Identity's first name. | [optional] 
**LastName** | **String** | Identity's last name. | [optional] 
**Email** | **String** | Identity's primary email address. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** | **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Phone** | **String** | Identity's phone number. | [optional] 
**Synced** | **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Inactive** | **Boolean** | Indicates whether the identity is inactive. | [optional] [default to $false]
**Protected** | **Boolean** | Indicates whether the identity is protected. | [optional] [default to $false]
**Status** | **String** | Identity's status in SailPoint. | [optional] 
**EmployeeNumber** | **String** | Identity's employee number. | [optional] 
**Manager** | [**IdentityDocumentAllOfManager**](identity-document-all-of-manager) |  | [optional] 
**IsManager** | **Boolean** | Indicates whether the identity is a manager of other identities. | [optional] 
**IdentityProfile** | [**IdentityDocumentAllOfIdentityProfile**](identity-document-all-of-identity-profile) |  | [optional] 
**Source** | [**IdentityDocumentAllOfSource**](identity-document-all-of-source) |  | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 
**Disabled** | **Boolean** | Indicates whether the identity is disabled. | [optional] [default to $false]
**Locked** | **Boolean** | Indicates whether the identity is locked. | [optional] [default to $false]
**ProcessingState** | **String** | Identity's processing state. | [optional] 
**ProcessingDetails** | [**ProcessingDetails**](processing-details) |  | [optional] 
**Accounts** | [**[]BaseAccount**](base-account) | List of accounts associated with the identity. | [optional] 
**AccountCount** | **Int32** | Number of accounts associated with the identity. | [optional] 
**Apps** | [**[]App**](app) | List of applications the identity has access to. | [optional] 
**AppCount** | **Int32** | Number of applications the identity has access to. | [optional] 
**Access** | [**[]IdentityAccess**](identity-access) | List of access items assigned to the identity. | [optional] 
**AccessCount** | **Int32** | Number of access items assigned to the identity. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements assigned to the identity. | [optional] 
**RoleCount** | **Int32** | Number of roles assigned to the identity. | [optional] 
**AccessProfileCount** | **Int32** | Number of access profiles assigned to the identity. | [optional] 
**Owns** | [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**OwnsCount** | **Int32** | Number of access items the identity owns. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**TagsCount** | **Int32** | Number of tags on the identity. | [optional] 
**VisibleSegments** | **[]String** | List of segments that the identity is in. | [optional] 
**VisibleSegmentCount** | **Int32** | Number of segments the identity is in. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocument = Initialize-IdentityDocument  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -DisplayName Carol.Adams `
 -FirstName Carol `
 -LastName Adams `
 -Email Carol.Adams@sailpointdemo.com `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Phone +1 440-527-3672 `
 -Synced null `
 -Inactive false `
 -Protected false `
 -Status UNREGISTERED `
 -EmployeeNumber 1a2a3d4e `
 -Manager null `
 -IsManager false `
 -IdentityProfile null `
 -Source null `
 -Attributes {country=US, firstname=Carol, cloudStatus=UNREGISTERED} `
 -Disabled false `
 -Locked false `
 -ProcessingState ERROR `
 -ProcessingDetails null `
 -Accounts null `
 -AccountCount 3 `
 -Apps null `
 -AppCount 2 `
 -Access null `
 -AccessCount 5 `
 -EntitlementCount 10 `
 -RoleCount 1 `
 -AccessProfileCount 1 `
 -Owns null `
 -OwnsCount 5 `
 -Tags [TAG_1, TAG_2] `
 -TagsCount null `
 -VisibleSegments [All Employees] `
 -VisibleSegmentCount 1
```

- Convert the resource to JSON
```powershell
$IdentityDocument | ConvertTo-JSON
```


[[Back to top]](#) 

