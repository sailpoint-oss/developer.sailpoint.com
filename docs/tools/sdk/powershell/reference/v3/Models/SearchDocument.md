---
id: search-document
title: SearchDocument
pagination_label: SearchDocument
sidebar_label: SearchDocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SearchDocument', 'SearchDocument'] 
slug: /tools/sdk/powershell/v3/models/search-document
tags: ['SDK', 'Software Development Kit', 'SearchDocument', 'SearchDocument']
---


# SearchDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | The unique ID of the referenced object. | [required]
**Name** |  **String** | The human readable name of the referenced object. | [required]
**Description** |  Pointer to **String** | Access item's description. | [optional] 
**Created** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Modified** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the time when the object was last modified. | [optional] 
**Synced** |  Pointer to **System.DateTime** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Enabled** |  Pointer to **Boolean** | Indicates whether the access item is currently enabled. | [optional] [default to $false]
**Requestable** |  Pointer to **Boolean** | Indicates whether the access item can be requested. | [optional] [default to $true]
**RequestCommentsRequired** |  Pointer to **Boolean** | Indicates whether comments are required for requests to access the item. | [optional] [default to $false]
**Owner** |  Pointer to [**BaseAccessAllOfOwner**](base-access-all-of-owner) |  | [optional] 
**Type** |  [**DocumentType**](document-type) |  | [required]
**Source** |  Pointer to [**IdentityDocumentAllOfSource**](identity-document-all-of-source) |  | [optional] 
**Entitlements** |  Pointer to [**[]BaseEntitlement**](base-entitlement) | Entitlements included with the role. | [optional] 
**EntitlementCount** |  Pointer to **Int32** | Number of entitlements included with the role. | [optional] 
**Tags** |  Pointer to **[]String** | Tags that have been applied to the object. | [optional] 
**Action** |  Pointer to **String** | Name of the event as it's displayed in audit reports. | [optional] 
**Stage** |  Pointer to **String** | Activity's current stage. | [optional] 
**Origin** |  Pointer to **String** | Activity's origin. | [optional] 
**Status** |  Pointer to **String** | Identity's status in SailPoint. | [optional] 
**Requester** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**Recipient** |  Pointer to [**AccountSource**](account-source) |  | [optional] 
**TrackingNumber** |  Pointer to **String** | ID of the group of events. | [optional] 
**Errors** |  Pointer to **[]String** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** |  Pointer to **[]String** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** |  Pointer to [**[]Approval**](approval) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** |  Pointer to [**[]OriginalRequest**](original-request) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** |  Pointer to [**[]ExpansionItem**](expansion-item) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** |  Pointer to [**[]AccountRequest**](account-request) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** |  Pointer to **String** | Sources involved in the account activity. | [optional] 
**DisplayName** |  Pointer to **String** | Identity's display name. | [optional] 
**Segments** |  Pointer to [**[]BaseSegment**](base-segment) | Segments with the role. | [optional] 
**SegmentCount** |  Pointer to **Int32** | Number of segments with the role. | [optional] 
**CloudGoverned** |  Pointer to **Boolean** | Indicates whether the entitlement is cloud governed. | [optional] [default to $false]
**Privileged** |  Pointer to **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**IdentityCount** |  Pointer to **Int32** | Number of identities who have access to the entitlement. | [optional] 
**Type** |  Pointer to **String** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**Actor** |  Pointer to **String** | Name of the actor that generated the event. | [optional] 
**Target** |  Pointer to **String** | Name of the target, or recipient, of the event. | [optional] 
**Stack** |  Pointer to **String** | The event's stack. | [optional] 
**IpAddress** |  Pointer to **String** | Target system's IP address. | [optional] 
**Details** |  Pointer to **String** | ID of event's details. | [optional] 
**Attributes** |  Pointer to [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 
**Objects** |  Pointer to **[]String** | Objects the event is happening to. | [optional] 
**Operation** |  Pointer to **String** | Operation, or action, performed during the event. | [optional] 
**TechnicalName** |  Pointer to **String** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 
**FirstName** |  Pointer to **String** | Identity's first name. | [optional] 
**LastName** |  Pointer to **String** | Identity's last name. | [optional] 
**Email** |  Pointer to **String** | Identity's primary email address. | [optional] 
**Phone** |  Pointer to **String** | Identity's phone number. | [optional] 
**Inactive** |  Pointer to **Boolean** | Indicates whether the identity is inactive. | [optional] [default to $false]
**Protected** |  Pointer to **Boolean** | Indicates whether the identity is protected. | [optional] [default to $false]
**EmployeeNumber** |  Pointer to **String** | Identity's employee number. | [optional] 
**Manager** |  Pointer to [**IdentityDocumentAllOfManager**](identity-document-all-of-manager) |  | [optional] 
**IsManager** |  Pointer to **Boolean** | Indicates whether the identity is a manager of other identities. | [optional] 
**IdentityProfile** |  Pointer to [**IdentityDocumentAllOfIdentityProfile**](identity-document-all-of-identity-profile) |  | [optional] 
**ProcessingState** |  Pointer to **String** | Identity's processing state. | [optional] 
**ProcessingDetails** |  Pointer to [**ProcessingDetails**](processing-details) |  | [optional] 
**Accounts** |  Pointer to [**[]BaseAccount**](base-account) | List of accounts associated with the identity. | [optional] 
**AccountCount** |  Pointer to **Int32** | Number of accounts associated with the identity. | [optional] 
**Apps** |  Pointer to [**[]App**](app) | List of applications the identity has access to. | [optional] 
**AppCount** |  Pointer to **Int32** | Number of applications the identity has access to. | [optional] 
**Access** |  Pointer to [**[]IdentityAccess**](identity-access) | List of access items assigned to the identity. | [optional] 
**AccessCount** |  Pointer to **Int32** | Number of access items assigned to the identity. | [optional] 
**RoleCount** |  Pointer to **Int32** | Number of roles assigned to the identity. | [optional] 
**AccessProfileCount** |  Pointer to **Int32** | Number of access profiles included with the role. | [optional] 
**Owns** |  Pointer to [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**OwnsCount** |  Pointer to **Int32** | Number of access items the identity owns. | [optional] 
**AccessProfiles** |  Pointer to [**[]BaseAccessProfile**](base-access-profile) | Access profiles included with the role. | [optional] 

## Examples

- Prepare the resource
```powershell
$SearchDocument = Initialize-PSSailpoint.V3SearchDocument  -Id 2c91808568c529c60168cca6f90c1313 `
 -Name John Doe `
 -Description The admin role `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Type null `
 -Source null `
 -Entitlements null `
 -EntitlementCount 3 `
 -Tags [TAG_1, TAG_2] `
 -Action update `
 -Stage Completed `
 -Origin null `
 -Status UNREGISTERED `
 -Requester null `
 -Recipient null `
 -TrackingNumber 63f891e0735f4cc8bf1968144a1e7440 `
 -Errors null `
 -Warnings null `
 -Approvals null `
 -OriginalRequests null `
 -ExpansionItems null `
 -AccountRequests null `
 -Sources smartsheet-test, airtable-v4, IdentityNow `
 -DisplayName Carol.Adams `
 -Segments null `
 -SegmentCount 1 `
 -CloudGoverned false `
 -Privileged false `
 -IdentityCount 3 `
 -Type SYSTEM_CONFIG `
 -Actor System `
 -Target Carol.Adams `
 -Stack tpe `
 -IpAddress 52.52.97.85 `
 -Details 73b65dfbed1842548c207432a18c84b0 `
 -Attributes {country&#x3D;US, firstname&#x3D;Carol, cloudStatus&#x3D;UNREGISTERED} `
 -Objects null `
 -Operation REQUEST `
 -TechnicalName AUTHENTICATION_REQUEST_PASSED `
 -FirstName Carol `
 -LastName Adams `
 -Email Carol.Adams@sailpointdemo.com `
 -Phone +1 440-527-3672 `
 -Inactive false `
 -Protected false `
 -EmployeeNumber 1a2a3d4e `
 -Manager null `
 -IsManager false `
 -IdentityProfile null `
 -ProcessingState null `
 -ProcessingDetails null `
 -Accounts null `
 -AccountCount 3 `
 -Apps null `
 -AppCount 2 `
 -Access null `
 -AccessCount 5 `
 -RoleCount 1 `
 -AccessProfileCount 1 `
 -Owns null `
 -OwnsCount 5 `
 -AccessProfiles null
```

- Convert the resource to JSON
```powershell
$SearchDocument | ConvertTo-JSON
```


[[Back to top]](#) 

