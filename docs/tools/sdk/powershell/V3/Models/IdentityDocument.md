---
id: identity-document
title: IdentityDocument
pagination_label: IdentityDocument
sidebar_label: IdentityDocument
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityDocument'] 
slug: /tools/sdk/powershell/v3/models/identity-document
tags: ['SDK', 'Software Development Kit', 'IdentityDocument']
---


# IdentityDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the referenced object. | 
**Name** |  **String** | The human readable name of the referenced object. | 
**Type** |  [**DocumentType**](document-type) |  | 
**DisplayName** |  Pointer to **String** | Identity&#39;s display name. | [optional] 
**FirstName** |  Pointer to **String** | Identity&#39;s first name. | [optional] 
**LastName** |  Pointer to **String** | Identity&#39;s last name. | [optional] 
**Email** |  Pointer to **String** | Identity&#39;s primary email address. | [optional] 
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Phone** |  Pointer to **String** | Identity&#39;s phone number. | [optional] 
**Synced** |  Pointer to **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the &#x60;synced&#x60; time and the time when the updated data is actually available in the search API.  | [optional] 
**Inactive** |  Pointer to **Boolean** | Indicates whether the identity is inactive. | [optional] [default to $false]
**Protected** |  Pointer to **Boolean** | Indicates whether the identity is protected. | [optional] [default to $false]
**Status** |  Pointer to **String** | Identity&#39;s status in SailPoint. | [optional] 
**EmployeeNumber** |  Pointer to **String** | Identity&#39;s employee number. | [optional] 
**Manager** |  Pointer to [**IdentityDocumentAllOfManager**](identity-document-all-of-manager) |  | [optional] 
**IsManager** |  Pointer to **Boolean** | Indicates whether the identity is a manager of other identities. | [optional] 
**IdentityProfile** |  Pointer to [**IdentityDocumentAllOfIdentityProfile**](identity-document-all-of-identity-profile) |  | [optional] 
**Source** |  Pointer to [**IdentityDocumentAllOfSource**](identity-document-all-of-source) |  | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**](any-type) | Map or dictionary of key/value pairs. | [optional] 
**ProcessingState** |  Pointer to **String** | Identity&#39;s processing state. | [optional] 
**ProcessingDetails** |  Pointer to [**ProcessingDetails**](processing-details) |  | [optional] 
**Accounts** |  Pointer to [**[]BaseAccount**](base-account) | List of accounts associated with the identity. | [optional] 
**AccountCount** |  Pointer to **Int32** | Number of accounts associated with the identity. | [optional] 
**Apps** |  Pointer to [**[]App**](app) | List of applications the identity has access to. | [optional] 
**AppCount** |  Pointer to **Int32** | Number of applications the identity has access to. | [optional] 
**Access** |  Pointer to [**[]IdentityAccess**](identity-access) | List of access items assigned to the identity. | [optional] 
**AccessCount** |  Pointer to **Int32** | Number of access items assigned to the identity. | [optional] 
**EntitlementCount** |  Pointer to **Int32** | Number of entitlements assigned to the identity. | [optional] 
**RoleCount** |  Pointer to **Int32** | Number of roles assigned to the identity. | [optional] 
**AccessProfileCount** |  Pointer to **Int32** | Number of access profiles assigned to the identity. | [optional] 
**Owns** |  Pointer to [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**OwnsCount** |  Pointer to **Int32** | Number of access items the identity owns. | [optional] 
**Tags** |  Pointer to **[]String** | Tags that have been applied to the object. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityDocument = Initialize-PSSailpointIdentityDocument  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Type null `
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
 -Attributes {country&#x3D;US, firstname&#x3D;Carol, cloudStatus&#x3D;UNREGISTERED} `
 -ProcessingState null `
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
 -Tags [TAG_1, TAG_2]
```

- Convert the resource to JSON
```powershell
$IdentityDocument | ConvertTo-JSON
```


[[Back to top]](#) 

