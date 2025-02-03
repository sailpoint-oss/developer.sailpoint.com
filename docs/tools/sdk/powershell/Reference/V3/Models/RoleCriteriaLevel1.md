---
id: role-criteria-level1
title: RoleCriteriaLevel1
pagination_label: RoleCriteriaLevel1
sidebar_label: RoleCriteriaLevel1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1'] 
slug: /tools/sdk/powershell/v3/models/role-criteria-level1
tags: ['SDK', 'Software Development Kit', 'RoleCriteriaLevel1', 'RoleCriteriaLevel1']
---


# RoleCriteriaLevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | [**RoleCriteriaOperation**](role-criteria-operation) |  | [optional] 
**Key** | [**RoleCriteriaKey**](role-criteria-key) |  | [optional] 
**StringValue** | **String** | String value to test the Identity attribute, Account attribute, or Entitlement specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, NOT_EQUALS, CONTAINS, STARTS_WITH, or ENDS_WITH, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | [**[]RoleCriteriaLevel2**](role-criteria-level2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleCriteriaLevel1 = Initialize-PSSailpoint.V3RoleCriteriaLevel1  -Operation null `
 -Key null `
 -StringValue carlee.cert1c9f9b6fd@mailinator.com `
 -Children null
```

- Convert the resource to JSON
```powershell
$RoleCriteriaLevel1 | ConvertTo-JSON
```


[[Back to top]](#) 

