---
id: searchdocument
title: Searchdocument
pagination_label: Searchdocument
sidebar_label: Searchdocument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Searchdocument', 'Searchdocument'] 
slug: /tools/sdk/powershell/search/models/searchdocument
tags: ['SDK', 'Software Development Kit', 'Searchdocument', 'Searchdocument']
---


# Searchdocument

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
**Owner** | [**BaseaccessOwner**](baseaccess-owner) |  | [optional] 
**Id** | **String** | ID of the role. | [required]
**Name** | **String** | Name of the role. | [required]
**Source** | [**IdentitydocumentAllOfSource**](identitydocument-all-of-source) |  | [optional] 
**Entitlements** | [**[]RoledocumentAllOfEntitlements**](roledocument-all-of-entitlements) | Entitlements included with the role. | [optional] 
**EntitlementCount** | **Int32** | Number of entitlements included with the role. | [optional] 
**Segments** | [**[]Basesegment**](basesegment) | Segments with the role. | [optional] 
**SegmentCount** | **Int32** | Number of segments with the role. | [optional] 
**Tags** | **[]String** | Tags that have been applied to the object. | [optional] 
**Apps** | [**[]App**](app) | List of applications the identity has access to. | [optional] 
**Action** | **String** | Name of the event as it's displayed in audit reports. | [optional] 
**Stage** | **String** | Activity's current stage. | [optional] 
**Status** | **String** | Identity's status in SailPoint. | [optional] 
**Requester** | [**Activityidentity**](activityidentity) |  | [optional] 
**Recipient** | [**Activityidentity**](activityidentity) |  | [optional] 
**TrackingNumber** | **String** | ID of the group of events. | [optional] 
**Errors** | **[]String** | Errors provided by the source while completing account actions. | [optional] 
**Warnings** | **[]String** | Warnings provided by the source while completing account actions. | [optional] 
**Approvals** | [**[]Approval**](approval) | Approvals performed on an item during activity. | [optional] 
**OriginalRequests** | [**[]Originalrequest**](originalrequest) | Original actions that triggered all individual source actions related to the account action. | [optional] 
**ExpansionItems** | [**[]Expansionitem**](expansionitem) | Controls that translated the attribute requests into actual provisioning actions on the source. | [optional] 
**AccountRequests** | [**[]Accountrequest**](accountrequest) | Account data for each individual source action triggered by the original requests. | [optional] 
**Sources** | **String** | Sources involved in the account activity. | [optional] 
**DisplayName** | **String** | Identity's display name. | [optional] 
**CloudGoverned** | **Boolean** | Indicates whether the entitlement is cloud governed. | [optional] [default to $false]
**Privileged** | **Boolean** | Indicates whether the entitlement is privileged. | [optional] [default to $false]
**Attribute** | **String** | Attribute information for the entitlement. | [optional] 
**Value** | **String** | Value of the entitlement. | [optional] 
**SourceSchemaObjectType** | **String** | Source schema object type of the entitlement. | [optional] 
**Schema** | **String** | Schema type of the entitlement. | [optional] 
**Hash** | **String** | Read-only calculated hash value of an entitlement. | [optional] 
**Attributes** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Map or dictionary of key/value pairs. | [optional] 
**TruncatedAttributes** | **[]String** | Truncated attributes of the entitlement. | [optional] 
**ContainsDataAccess** | **Boolean** | Indicates whether the entitlement contains data access. | [optional] [default to $false]
**ManuallyUpdatedFields** | [**EntitlementdocumentAllOfManuallyUpdatedFields**](entitlementdocument-all-of-manually-updated-fields) |  | [optional] 
**Permissions** | [**[]EntitlementdocumentAllOfPermissions**](entitlementdocument-all-of-permissions) |  | [optional] 
**Type** | **String** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**Actor** | [**EventdocumentActor**](eventdocument-actor) |  | [optional] 
**Target** | [**EventdocumentTarget**](eventdocument-target) |  | [optional] 
**Stack** | **String** | The event's stack. | [optional] 
**IpAddress** | **String** | Target system's IP address. | [optional] 
**Details** | **String** | ID of event's details. | [optional] 
**Objects** | **[]String** | Objects the event is happening to. | [optional] 
**Operation** | **String** | Operation, or action, performed during the event. | [optional] 
**TechnicalName** | **String** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 
**FirstName** | **String** | Identity's first name. | [optional] 
**LastName** | **String** | Identity's last name. | [optional] 
**Email** | **String** | Identity's primary email address. | [optional] 
**Phone** | **String** | Identity's phone number. | [optional] 
**Inactive** | **Boolean** | Indicates whether the identity is inactive. | [optional] [default to $false]
**Protected** | **Boolean** | Indicates whether the identity is protected. | [optional] [default to $false]
**EmployeeNumber** | **String** | Identity's employee number. | [optional] 
**Manager** | [**IdentitydocumentAllOfManager**](identitydocument-all-of-manager) |  | [optional] 
**IsManager** | **Boolean** | Indicates whether the identity is a manager of other identities. | [optional] 
**IdentityProfile** | [**IdentitydocumentAllOfIdentityProfile**](identitydocument-all-of-identity-profile) |  | [optional] 
**Disabled** | **Boolean** | Indicates whether the identity is disabled. | [optional] [default to $false]
**Locked** | **Boolean** | Indicates whether the identity is locked. | [optional] [default to $false]
**ProcessingState** | **String** | Identity's processing state. | [optional] 
**ProcessingDetails** | [**Processingdetails**](processingdetails) |  | [optional] 
**Accounts** | [**[]Baseaccount**](baseaccount) | List of accounts associated with the identity. | [optional] 
**AccountCount** | **Int32** | Number of accounts associated with the identity. | [optional] 
**AppCount** | **Int32** | Number of applications the identity has access to. | [optional] 
**Access** | [**[]Identityaccess**](identityaccess) | List of access items assigned to the identity. | [optional] 
**AccessCount** | **Int32** | Number of access items assigned to the identity. | [optional] 
**RoleCount** | **Int32** | Number of roles assigned to the identity. | [optional] 
**AccessProfileCount** | **Int32** | Number of access profiles included with the role. | [optional] 
**Owns** | [**[]Owns**](owns) | Access items the identity owns. | [optional] 
**OwnsCount** | **Int32** | Number of access items the identity owns. | [optional] 
**TagsCount** | **Int32** | Number of tags on the identity. | [optional] 
**VisibleSegments** | **[]String** | List of segments that the identity is in. | [optional] 
**VisibleSegmentCount** | **Int32** | Number of segments the identity is in. | [optional] 
**AccessProfiles** | [**[]Baseaccessprofile**](baseaccessprofile) | Access profiles included with the role. | [optional] 
**Dimensional** | **Boolean** |  | [optional] [default to $false]
**DimensionSchemaAttributeCount** | **Int32** | Number of dimension attributes included with the role. | [optional] 
**DimensionSchemaAttributes** | [**[]RoledocumentAllOfDimensionSchemaAttributes**](roledocument-all-of-dimension-schema-attributes) | Dimension attributes included with the role. | [optional] 
**Dimensions** | [**[]RoledocumentAllOfDimensions**](roledocument-all-of-dimensions) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Searchdocument = Initialize-Searchdocument  -Description Admin access `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -Synced 2018-06-25T20:22:33.104Z `
 -Enabled true `
 -Requestable true `
 -RequestCommentsRequired false `
 -Owner null `
 -Id 2c91808375d8e80a0175e1f88a575222 `
 -Name Branch Manager Access `
 -Source null `
 -Entitlements null `
 -EntitlementCount 3 `
 -Segments null `
 -SegmentCount 1 `
 -Tags ["TAG_1","TAG_2"] `
 -Apps null `
 -Action AddEntitlement `
 -Stage Completed `
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
 -CloudGoverned false `
 -Privileged false `
 -Attribute groups `
 -Value 1733ff75-441e-4327-9bfc-3ac445fd8cd1 `
 -SourceSchemaObjectType group `
 -Schema group `
 -Hash c6fab95235584cca98a454a2f51e5683bc77d6a0 `
 -Attributes {country=US, firstname=Carol, cloudStatus=UNREGISTERED} `
 -TruncatedAttributes null `
 -ContainsDataAccess null `
 -ManuallyUpdatedFields null `
 -Permissions null `
 -Type ACCESS_ITEM `
 -Actor null `
 -Target null `
 -Stack tpe `
 -IpAddress 52.52.97.85 `
 -Details 73b65dfbed1842548c207432a18c84b0 `
 -Objects null `
 -Operation ADD `
 -TechnicalName ENTITLEMENT_ADD_PASSED `
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
 -Disabled false `
 -Locked false `
 -ProcessingState ERROR `
 -ProcessingDetails null `
 -Accounts null `
 -AccountCount 3 `
 -AppCount 2 `
 -Access null `
 -AccessCount 5 `
 -RoleCount 1 `
 -AccessProfileCount 1 `
 -Owns null `
 -OwnsCount 5 `
 -TagsCount null `
 -VisibleSegments [All Employees] `
 -VisibleSegmentCount 1 `
 -AccessProfiles null `
 -Dimensional false `
 -DimensionSchemaAttributeCount 3 `
 -DimensionSchemaAttributes null `
 -Dimensions null
```

- Convert the resource to JSON
```powershell
$Searchdocument | ConvertTo-JSON
```


[[Back to top]](#) 

