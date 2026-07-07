---
id: privilegecriteriadto-groups-inner
title: PrivilegecriteriadtoGroupsInner
pagination_label: PrivilegecriteriadtoGroupsInner
sidebar_label: PrivilegecriteriadtoGroupsInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PrivilegecriteriadtoGroupsInner', 'PrivilegecriteriadtoGroupsInner'] 
slug: /tools/sdk/powershell/privilegecriteria/models/privilegecriteriadto-groups-inner
tags: ['SDK', 'Software Development Kit', 'PrivilegecriteriadtoGroupsInner', 'PrivilegecriteriadtoGroupsInner']
---


# PrivilegecriteriadtoGroupsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "OR" ] | The logical operator to apply between criteria items in the group. | [optional] 
**CriteriaItems** | [**[]PrivilegecriteriadtoGroupsInnerCriteriaItemsInner**](privilegecriteriadto-groups-inner-criteria-items-inner) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PrivilegecriteriadtoGroupsInner = Initialize-PrivilegecriteriadtoGroupsInner  -Operator AND `
 -CriteriaItems null
```

- Convert the resource to JSON
```powershell
$PrivilegecriteriadtoGroupsInner | ConvertTo-JSON
```


[[Back to top]](#) 

