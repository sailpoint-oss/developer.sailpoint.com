---
id: v2024-dimension
title: Dimension
pagination_label: Dimension
sidebar_label: Dimension
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dimension'] 
slug: /tools/sdk/powershell/v2024/models/dimension
tags: ['SDK', 'Software Development Kit', 'Dimension']
---


# Dimension

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | The id of the Dimension. This field must be left null when creating a dimension, otherwise a 400 Bad Request error will result. | [optional] 
**Name** |  **String** | The human-readable display name of the Dimension | [required]
**Created** |  Pointer to **System.DateTime** | Date the Dimension was created | [optional] [readonly] 
**Modified** |  Pointer to **System.DateTime** | Date the Dimension was last modified. | [optional] [readonly] 
**Description** |  Pointer to **String** | A human-readable description of the Dimension | [optional] 
**Owner** |  [**OwnerReference**](owner-reference) |  | [required]
**AccessProfiles** |  Pointer to [**[]AccessProfileRef**](access-profile-ref) |  | [optional] 
**Entitlements** |  Pointer to [**[]EntitlementRef**](entitlement-ref) |  | [optional] 
**Membership** |  Pointer to [**DimensionMembershipSelector**](dimension-membership-selector) |  | [optional] 
**ParentId** |  Pointer to **String** | The ID of the parent role. This field can be left null when creating a dimension, but if provided, it must match the role ID specified in the path variable of the API call. | [optional] 

## Examples

- Prepare the resource
```powershell
$Dimension = Initialize-PSSailpoint.V2024Dimension  -Id 2c918086749d78830174a1a40e121518 `
 -Name Dimension 2567 `
 -Created 2021-03-01T22:32:58.104Z `
 -Modified 2021-03-02T20:22:28.104Z `
 -Description Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor. `
 -Owner null `
 -AccessProfiles null `
 -Entitlements null `
 -Membership null `
 -ParentId 2c918086749d78830174a1a40e121518
```

- Convert the resource to JSON
```powershell
$Dimension | ConvertTo-JSON
```


[[Back to top]](#) 

