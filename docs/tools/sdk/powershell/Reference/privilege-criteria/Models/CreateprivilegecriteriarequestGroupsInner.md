---
id: createprivilegecriteriarequest-groups-inner
title: CreateprivilegecriteriarequestGroupsInner
pagination_label: CreateprivilegecriteriarequestGroupsInner
sidebar_label: CreateprivilegecriteriarequestGroupsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CreateprivilegecriteriarequestGroupsInner', 'CreateprivilegecriteriarequestGroupsInner'] 
slug: /tools/sdk/powershell/privilegecriteria/models/createprivilegecriteriarequest-groups-inner
tags: ['SDK', 'Software Development Kit', 'CreateprivilegecriteriarequestGroupsInner', 'CreateprivilegecriteriarequestGroupsInner']
---


# CreateprivilegecriteriarequestGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "OR" ] | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | [**[]CreateprivilegecriteriarequestGroupsInnerCriteriaItemsInner**](createprivilegecriteriarequest-groups-inner-criteria-items-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateprivilegecriteriarequestGroupsInner = Initialize-CreateprivilegecriteriarequestGroupsInner  -Operator AND `
 -CriteriaItems null
```

- Convert the resource to JSON
```powershell
$CreateprivilegecriteriarequestGroupsInner | ConvertTo-JSON
```


[[Back to top]](#) 

