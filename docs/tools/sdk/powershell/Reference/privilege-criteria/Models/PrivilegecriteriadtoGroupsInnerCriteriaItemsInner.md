---
id: privilegecriteriadto-groups-inner-criteria-items-inner
title: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
pagination_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_label: PrivilegecriteriadtoGroupsInnerCriteriaItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/powershell/privilegecriteria/models/privilegecriteriadto-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner', 'PrivilegecriteriadtoGroupsInnerCriteriaItemsInner']
---


# PrivilegecriteriadtoGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "group" ] | The target type for the criteria item. | [optional] 
**Operator** |  **Enum** [  "IN",    "EQUALS",    "NOT_EQUALS",    "CONTAINS",    "DOES_NOT_CONTAIN",    "STARTS_WITH",    "ENDS_WITH" ] | The operator to apply to the property and values. | [optional] 
**Property** |  **Enum** [  "displayName",    "description",    "value" ] |  | [optional] 
**Values** | **[]String** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | **Boolean** | Whether to ignore case when evaluating the property against the values. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$PrivilegecriteriadtoGroupsInnerCriteriaItemsInner = Initialize-PrivilegecriteriadtoGroupsInnerCriteriaItemsInner  -TargetType group `
 -Operator IN `
 -Property null `
 -Values ["admin","superuser"] `
 -IgnoreCase true
```

- Convert the resource to JSON
```powershell
$PrivilegecriteriadtoGroupsInnerCriteriaItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

