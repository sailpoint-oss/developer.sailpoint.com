---
id: v2024-role
title: Role
pagination_label: Role
sidebar_label: Role
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Role', 'V2024Role'] 
slug: /tools/sdk/powershell/v2024/models/role
tags: ['SDK', 'Software Development Kit', 'Role', 'V2024Role']
---


# Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Role. This field must be left null when creating an Role, otherwise a 400 Bad Request error will result. | [optional] 
**Name** | **String** | The human-readable display name of the Role | [required]
**Created** | **System.DateTime** | Date the Role was created | [optional] [readonly] 
**Modified** | **System.DateTime** | Date the Role was last modified. | [optional] [readonly] 
**Description** | **String** | A human-readable description of the Role | [optional] 
**Owner** | [**OwnerReference**](owner-reference) |  | [required]
**AccessProfiles** | [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** | [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** | [**RoleMembershipSelector**](role-membership-selector) |  | [optional] 
**LegacyMembershipInfo** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | This field is not directly modifiable and is generally expected to be *null*. In very rare instances, some Roles may have been created using membership selection criteria that are no longer fully supported. While these Roles will still work, they should be migrated to STANDARD or IDENTITY_LIST selection criteria. This field exists for informational purposes as an aid to such migration. | [optional] 
**Enabled** | **Boolean** | Whether the Role is enabled or not. | [optional] [default to $false]
**Requestable** | **Boolean** | Whether the Role can be the target of access requests. | [optional] [default to $false]
**AccessRequestConfig** | [**RequestabilityForRole**](requestability-for-role) |  | [optional] 
**RevocationRequestConfig** | [**RevocabilityForRole**](revocability-for-role) |  | [optional] 
**Segments** | **[]String** | List of IDs of segments, if any, to which this Role is assigned. | [optional] 
**Dimensional** | **Boolean** | Whether the Role is dimensional. | [optional] [default to $false]
**DimensionRefs** | [**[]DimensionRef**](dimension-ref) | List of references to dimensions to which this Role is assigned. This field is only relevant if the Role is dimensional. | [optional] 
**AccessModelMetadata** | [**AttributeDTOList**](attribute-dto-list) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Role = Initialize-V2024Role  -Id 2c918086749d78830174a1a40e121518 `
 -Name Role 2567 `
 -Created 2021-03-01T22:32:58.104Z `
 -Modified 2021-03-02T20:22:28.104Z `
 -Description Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor. `
 -Owner null `
 -AccessProfiles null `
 -Entitlements null `
 -Membership null `
 -LegacyMembershipInfo {type=IDENTITY_LIST} `
 -Enabled true `
 -Requestable true `
 -AccessRequestConfig null `
 -RevocationRequestConfig null `
 -Segments [f7b1b8a3-5fed-4fd4-ad29-82014e137e19, 29cb6c06-1da8-43ea-8be4-b3125f248f2a] `
 -Dimensional null `
 -DimensionRefs null `
 -AccessModelMetadata null
```

- Convert the resource to JSON
```powershell
$Role | ConvertTo-JSON
```


[[Back to top]](#) 

