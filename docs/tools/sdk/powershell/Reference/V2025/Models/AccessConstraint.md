---
id: v2025-access-constraint
title: AccessConstraint
pagination_label: AccessConstraint
sidebar_label: AccessConstraint
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessConstraint', 'V2025AccessConstraint'] 
slug: /tools/sdk/powershell/v2025/models/access-constraint
tags: ['SDK', 'Software Development Kit', 'AccessConstraint', 'V2025AccessConstraint']
---


# AccessConstraint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT",    "ACCESS_PROFILE",    "ROLE" ] | Type of Access | [required]
**Ids** | **[]String** | Must be set only if operator is SELECTED. | [optional] 
**Operator** |  **Enum** [  "ALL",    "SELECTED" ] | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [required]

## Examples

- Prepare the resource
```powershell
$AccessConstraint = Initialize-V2025AccessConstraint  -Type ENTITLEMENT `
 -Ids [2c90ad2a70ace7d50170acf22ca90010] `
 -Operator SELECTED
```

- Convert the resource to JSON
```powershell
$AccessConstraint | ConvertTo-JSON
```


[[Back to top]](#) 

