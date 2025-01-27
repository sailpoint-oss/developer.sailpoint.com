---
id: role-criteria-level3
title: RoleCriteriaLevel3
pagination_label: RoleCriteriaLevel3
sidebar_label: RoleCriteriaLevel3
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleCriteriaLevel3'] 
slug: /tools/sdk/powershell/v2024/models/role-criteria-level3
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel3']
---


# RoleCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**Key** |  Pointer to [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**StringValue** |  Pointer to **String** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleCriteriaLevel3 = Initialize-PSSailpoint.V2024RoleCriteriaLevel3  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com
```

- Convert the resource to JSON
```powershell
$RoleCriteriaLevel3 | ConvertTo-JSON
```


[[Back to top]](#) 

