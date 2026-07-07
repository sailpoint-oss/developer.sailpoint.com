---
id: createprivilegecriteriarequest
title: Createprivilegecriteriarequest
pagination_label: Createprivilegecriteriarequest
sidebar_label: Createprivilegecriteriarequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Createprivilegecriteriarequest', 'Createprivilegecriteriarequest'] 
slug: /tools/sdk/powershell/privilegecriteria/models/createprivilegecriteriarequest
tags: ['SDK', 'Software Development Kit', 'Createprivilegecriteriarequest', 'Createprivilegecriteriarequest']
---


# Createprivilegecriteriarequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The Id of the source that the criteria is applied to. | [optional] 
**Type** |  **Enum** [  "CUSTOM" ] | The type of criteria being created. Expects ""CUSTOM"". | [optional] 
**Operator** |  **Enum** [  "AND",    "OR" ] | The logical operator to apply between groups. | [optional] 
**Groups** | [**[]CreateprivilegecriteriarequestGroupsInner**](createprivilegecriteriarequest-groups-inner) |  | [optional] 
**PrivilegeLevel** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW" ] | The privilege level assigned by this criteria. | [optional] 

## Examples

- Prepare the resource
```powershell
$Createprivilegecriteriarequest = Initialize-Createprivilegecriteriarequest  -SourceId c42c45d8d7c04d2da64d215cd8c32f21 `
 -Type CUSTOM `
 -Operator AND `
 -Groups null `
 -PrivilegeLevel HIGH
```

- Convert the resource to JSON
```powershell
$Createprivilegecriteriarequest | ConvertTo-JSON
```


[[Back to top]](#) 

