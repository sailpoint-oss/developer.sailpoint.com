---
id: v2025-role-membership-selector
title: RoleMembershipSelector
pagination_label: RoleMembershipSelector
sidebar_label: RoleMembershipSelector
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleMembershipSelector', 'V2025RoleMembershipSelector'] 
slug: /tools/sdk/powershell/v2025/models/role-membership-selector
tags: ['SDK', 'Software Development Kit', 'RoleMembershipSelector', 'V2025RoleMembershipSelector']
---


# RoleMembershipSelector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**RoleMembershipSelectorType**](role-membership-selector-type) |  | [optional] 
**Criteria** | [**RoleCriteriaLevel1**](role-criteria-level1) |  | [optional] 
**Identities** | [**[]RoleMembershipIdentity**](role-membership-identity) | Defines role membership as being exclusive to the specified Identities, when type is IDENTITY_LIST. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMembershipSelector = Initialize-V2025RoleMembershipSelector  -Type null `
 -Criteria null `
 -Identities null
```

- Convert the resource to JSON
```powershell
$RoleMembershipSelector | ConvertTo-JSON
```


[[Back to top]](#) 

