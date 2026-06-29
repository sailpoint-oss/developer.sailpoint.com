---
id: createprivilegecriteriarequest-groups-inner-criteria-items-inner
title: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
pagination_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner'] 
slug: /tools/sdk/powershell/privilegecriteria/models/createprivilegecriteriarequest-groups-inner-criteria-items-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner', 'CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner']
---


# CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TargetType** |  **Enum** [  "group" ] | The target type of the criteria item. | [optional] 
**Operator** |  **Enum** [  "displayName",    "description",    "value" ] |  | [optional] 
**Values** | **[]String** | The values to evaluate the property against. | [optional] 
**IgnoreCase** | **Boolean** | Whether to ignore case when evaluating the property against the values. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner = Initialize-CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner  -TargetType group `
 -Operator null `
 -Values ["admin","superuser"] `
 -IgnoreCase true
```

- Convert the resource to JSON
```powershell
$CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner | ConvertTo-JSON
```


[[Back to top]](#) 

